// Markdown structure parser shared by the data builder and sync report.
// Handles this repo's list dialect: mixed 0/2-space top-level indentation,
// 4-space offer rows, 7-space "-" sub-points, and lazy continuations.
import { normalizeWs } from './util.js';

const ITEM_RE = /^(?<indent> *)(?<marker>[*\-]) (?<content>.*?)\s*$/;
const LINK_RE = /^\[(?<label>[^\]]+)\]\((?<url>[^)\s]+)\)(?<rest>(?<sep>\s+[-–—]\s+)(?<desc>.*))?$/s;
const NAME_DESC_RE = /^(?<name>.+?)(?<sep> [-–—] )(?<desc>.+)$/s;

function splitContent(content) {
  const linked = content.match(LINK_RE);
  if (linked) {
    return {
      name: linked.groups.label.trim(),
      url: linked.groups.url.trim(),
      desc: linked.groups.desc ? normalizeWs(linked.groups.desc) : '',
    };
  }
  const split = content.match(NAME_DESC_RE);
  if (split) return { name: normalizeWs(split.groups.name), url: null, desc: normalizeWs(split.groups.desc) };
  return { name: normalizeWs(content), url: null, desc: '' };
}

// level: 0 = provider/group card, 1 = offer row, 2 = sub-point
function levelOf(indent) {
  if (indent <= 2) return 0;
  if (indent <= 5) return 1;
  return 2;
}

export function parseSections(readme) {
  const lines = readme.replace(/\s+$/, '').split('\n');
  const sections = [];
  let current = null;
  let lastOffer = null; // level-1 node accepting level-2 / continuations
  let lastCard = null; // level-0 node accepting continuations of its own desc
  let inToc = false;

  const pushNode = (node) => {
    if (node.level === 0) {
      current.items.push(node);
      lastCard = node;
      lastOffer = null;
    } else if (node.level === 1) {
      const host = current.items[current.items.length - 1];
      if (host && host.level === 0) host.children.push(node);
      else current.items.push(node); // orphan level-1 becomes a card
      lastOffer = node;
      lastCard = null;
    } else {
      const host = lastOffer ?? lastCard;
      if (host) host.subs.push({ text: node.desc || node.name });
      else current.items.push({ ...node, level: 1, subs: [], children: [] });
    }
  };

  for (const raw of lines) {
    if (raw.trim() === '') continue;

    const h2 = raw.match(/^## (.+)$/);
    if (h2) {
      current = { heading: h2[1].trim(), items: [] };
      sections.push(current);
      lastOffer = null;
      lastCard = null;
      inToc = false;
      continue;
    }
    const h1 = raw.match(/^# (.+)$/);
    if (h1) {
      inToc = h1[1].trim().toLowerCase() === 'table of contents' || h1[1].trim() === '目录';
      continue;
    }
    if (!current) continue; // preamble handled elsewhere
    if (inToc) continue;
    if (raw.includes('Back to Top') || raw.includes('返回顶部')) continue;

    const item = raw.match(ITEM_RE);
    if (item) {
      const { name, url, desc } = splitContent(item.groups.content.trim());
      pushNode({
        level: levelOf(item.groups.indent.length),
        name,
        url,
        desc,
        children: [],
        subs: [],
      });
      continue;
    }

    // lazy continuation line
    if (/^\s+\S/.test(raw)) {
      const target = lastOffer ?? lastCard;
      if (target) {
        if (target.desc) target.desc = `${target.desc} ${normalizeWs(raw.trim())}`;
        else target.name = normalizeWs(`${target.name} ${raw.trim()}`);
      }
    }
  }

  return sections;
}

// Preamble paragraphs before the TOC heading, skipping blockquote banners.
export function parsePreamble(readme) {
  const lines = readme.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  for (const line of lines) {
    if (/^# (.+)$/.test(line)) {
      const t = line.replace(/^# /, '').trim();
      if (t.toLowerCase() === 'table of contents' || t === '目录') break;
      continue;
    }
    const t = line.trim();
    if (!t || t.startsWith('>')) continue;
    out.push(t);
  }
  return out;
}
