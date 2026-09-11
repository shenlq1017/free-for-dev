// Build the site's bilingual, per-module data from the two README sources.
//
//   node scripts/build-data.js
//
// Inputs (source of truth, hand/AI maintained):
//   README.en.md   pristine English upstream (verbatim copy of upstream README.md)
//   README.md      Chinese translation, same list structure
//
// Outputs (generated, do not edit):
//   data/index.json
//   data/intro.json
//   data/modules/<section-slug>.json
//
// English and Chinese rows are matched by their URL (or by name when the row
// has no link), never by position, so upstream insertions and deletions cannot
// shift a translation onto the wrong service. Unmatched English rows fall back
// to English text and are reported.
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { parsePreamble, parseSections } from './lib/parse-readme.js';
import { ROOT, normalizeWs, slug, writeJson } from './lib/util.js';

const read = (p) => readFileSync(new URL(p, ROOT), 'utf8').replace(/\r\n/g, '\n');

const enSections = parseSections(read('README.en.md'));
const zhSections = parseSections(read('README.md'));

const warnings = [];
let untranslated = 0;

/* ---------------- heading helpers ------------------------------------------- */
function splitZhHeading(heading) {
  const m = heading.match(/^(.*?)（([^（）]+)）$/);
  return m ? { zh: m[1].trim(), en: m[2].trim() } : { zh: heading.trim(), en: heading.trim() };
}

/* ---------------- section pairing (by English heading, then position) -------- */
const zhByEnHeading = new Map();
for (const sec of zhSections) {
  const { en } = splitZhHeading(sec.heading);
  if (!zhByEnHeading.has(en)) zhByEnHeading.set(en, []);
  zhByEnHeading.get(en).push(sec);
}

function pairSections() {
  const taken = new Set();
  const pairs = [];
  enSections.forEach((en, i) => {
    const zh = (zhByEnHeading.get(en.heading) ?? []).find((s) => !taken.has(s));
    if (zh) {
      taken.add(zh);
      pairs.push({ en, zh, titleZh: splitZhHeading(zh.heading).zh });
      return;
    }
    const byPos = zhSections[i];
    if (byPos && !taken.has(byPos) && byPos.items.length === en.items.length) {
      taken.add(byPos);
      pairs.push({ en, zh: byPos, titleZh: splitZhHeading(byPos.heading).zh });
      warnings.push(`分类 "${en.heading}"：上游改了标题，按位置配对`);
    } else {
      pairs.push({ en, zh: null, titleZh: en.heading });
      warnings.push(`分类 "${en.heading}"：上游新增，中文标题待翻译`);
    }
  });
  for (const sec of zhSections) {
    if (!taken.has(sec)) warnings.push(`分类 "${sec.heading}"：仅存在于中文版（上游已删除？）`);
  }
  return pairs;
}

/* ---------------- row identity ------------------------------------------------ */
function urlKey(u) {
  try {
    const url = new URL(u);
    return (url.host.replace(/^www\./, '') + url.pathname.replace(/\/+$/, '')).toLowerCase();
  } catch {
    return normalizeWs(u).toLowerCase();
  }
}

// A row's anchor is the first URL appearing anywhere in it (link label, bare
// URL in the description, …). Only rows with no URL at all fall back to the
// name — those are rare and their names are brand-like.
function firstUrl(text) {
  const m = text.match(/https?:\/\/[^\s)>\]]+/);
  return m ? m[0] : null;
}

function rowKey(node) {
  const url = node.url ?? firstUrl(`${node.name} ${node.desc}`);
  return url ? `u:${urlKey(url)}` : `n:${normalizeWs(node.name).toLowerCase()}`;
}

// Assign a deduplicated __key to each node and return key -> node.
// Both sides run through this same rule, so duplicates align positionally.
function indexByKey(nodes) {
  const map = new Map();
  for (const node of nodes) {
    const base = rowKey(node);
    let key = base;
    let n = 2;
    while (map.has(key)) key = `${base}#${n++}`;
    map.set(key, node);
    node.__key = key;
  }
  return map;
}

/* ---------------- recursive merge -------------------------------------------- */
function nodeId(en, used) {
  const base = (en.url ? urlKey(en.url) : slug(en.name)).replace(/[^a-z0-9\-_.]+/g, '-').replace(/^-+|-+$/g, '') || `row-${used.size}`;
  let id = base;
  let n = 2;
  while (used.has(id)) id = `${base}-${n++}`;
  used.add(id);
  return id;
}

function mergeNodes(en, zh, used, path) {
  if (!en) return null;
  const id = nodeId(en, used);
  const node = {
    id,
    name: en.name,
    ...(en.url ? { url: en.url } : {}),
    ...(zh && zh.name !== en.name ? { nameZh: zh.name } : {}),
    desc: { en: en.desc, zh: zh?.desc ?? '' },
    children: [],
    subs: [],
  };

  if (!zh) {
    untranslated++;
    node.untranslated = true;
  } else {
    if (en.desc && !zh.desc) {
      untranslated++;
      node.untranslated = true;
    }
    if ((en.url ?? null) !== (zh.url ?? null)) {
      warnings.push(`${path}/${en.name}：URL 不一致 ${en.url} vs ${zh.url}`);
    }
  }

  // children: match by key, emit in English order
  indexByKey(en.children);
  const zhChildren = indexByKey(zh?.children ?? []);
  const matched = new Set();
  for (const child of en.children) {
    const m = zhChildren.get(child.__key);
    if (m) matched.add(child.__key);
    const merged = mergeNodes(child, m, used, `${path}/${en.name}`);
    if (merged) node.children.push(merged);
  }
  for (const [key, orphan] of zhChildren) {
    if (!matched.has(key)) {
      warnings.push(`${path}/${en.name}：子项 "${orphan.name}" 仅存在于中文版（上游已删除）`);
    }
  }

  // sub-points carry no anchor, so pair by position
  const enSubs = en.subs;
  const zhSubs = zh?.subs ?? [];
  if (zh && enSubs.length !== zhSubs.length) {
    warnings.push(`${path}/${en.name}：子要点数量不一致 英=${enSubs.length} 中=${zhSubs.length}`);
  }
  node.subs = enSubs.map((s, i) => ({ text: { en: s.text, zh: zhSubs[i]?.text ?? '' } }));

  return node;
}

/* ---------------- emit -------------------------------------------------------- */
const indexSections = [];
const moduleData = [];

for (const { en, zh, titleZh } of pairSections()) {
  const id = slug(en.heading);
  const used = new Set();
  const zhIndex = indexByKey(zh?.items ?? []);
  indexByKey(en.items);
  const matched = new Set();
  const items = [];
  for (const item of en.items) {
    const m = zhIndex.get(item.__key);
    if (m) matched.add(item.__key);
    const merged = mergeNodes(item, m, used, id);
    if (merged) items.push(merged);
  }
  for (const [key, orphan] of zhIndex) {
    if (!matched.has(key)) {
      warnings.push(`${id}：条目 "${orphan.name}" 仅存在于中文版（上游已删除）`);
    }
  }

  const count = items.reduce(
    (n, it) => n + (it.url ? 1 : 0) + it.children.filter((c) => c.url).length,
    0,
  );
  indexSections.push({ id, title: { en: en.heading, zh: titleZh }, count });
  moduleData.push({ id, data: { id, title: { en: en.heading, zh: titleZh }, items } });
}

const enIntro = parsePreamble(read('README.en.md'));
const zhIntro = parsePreamble(read('README.md'));
const intro = enIntro.map((en, i) => ({ en, zh: zhIntro[i] ?? '' }));

let upstreamCommit = '';
try {
  upstreamCommit = execSync('git rev-parse --short HEAD', {
    encoding: 'utf8',
    cwd: fileURLToPath(ROOT),
  }).trim();
} catch {}

function countServices(mods) {
  let n = 0;
  for (const m of mods) {
    for (const it of m.data.items) {
      if (it.url) n++;
      for (const c of it.children) if (c.url) n++;
    }
  }
  return n;
}

writeJson(new URL('data/index.json', ROOT), {
  generatedAt: new Date().toISOString(),
  upstreamCommit,
  source: 'https://github.com/ripienaar/free-for-dev',
  stats: { sections: indexSections.length, services: countServices(moduleData) },
  sections: indexSections,
});
writeJson(new URL('data/intro.json', ROOT), intro);
for (const m of moduleData) writeJson(new URL(`data/modules/${m.id}.json`, ROOT), m.data);

const uniq = [...new Set(warnings)];
console.log(
  `分类 ${indexSections.length} 个，服务 ${countServices(moduleData)} 项，未翻译行 ${untranslated}`,
);
console.log(`警告 ${uniq.length} 条`);
for (const w of uniq.slice(0, 25)) console.log(`  ! ${w}`);
if (uniq.length > 25) console.log(`  ... 另有 ${uniq.length - 25} 条`);
