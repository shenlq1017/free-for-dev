/* Free for Dev CN — bilingual directory frontend. Vanilla JS, no deps. */
(() => {
  'use strict';

  const I18N = {
    zh: {
      brandSub: '开发者免费服务清单',
      eyebrow: '非官方中文译本 · 同步自 ripienaar/free-for-dev',
      heroTitle: '开发者<span class="grad">免费服务</span>清单',
      heroSub:
        '为开发者与开源作者整理的永久免费 / 长期免费服务：云厂商、CI/CD、数据库、监控、生成式 AI……一次找齐，从容选型。',
      searchPh: '搜索服务、分类或免费额度…',
      clearSearch: '清除搜索',
      noResults: '没有找到匹配的服务，换个关键词试试',
      resultsFor: '搜索结果',
      items: '项',
      notePrefix: /^\s*\*{0,2}(注意|NOTE)\*{0,2}\s*[:：]\s*/,
      footerMain:
        '内容来自开源项目 <a href="https://github.com/ripienaar/free-for-dev" target="_blank" rel="noopener">ripienaar/free-for-dev</a>（1600+ 位贡献者共同维护），版权归原作者及贡献者所有；本中文页面仅作学习交流。',
      viewZhSource: '查看中文 Markdown',
      title: 'Free for Dev · 开发者免费服务清单（中文）',
      themeLabel: '切换深色模式',
    },
    en: {
      brandSub: 'Free services for developers',
      eyebrow: 'Unofficial Chinese mirror · from ripienaar/free-for-dev',
      heroTitle: 'A directory of <span class="grad">free services</span> for developers',
      heroSub:
        'SaaS, PaaS, IaaS and other offerings with free developer tiers — cloud, CI/CD, databases, monitoring, generative AI and more, all in one place.',
      searchPh: 'Search services, categories or quotas…',
      clearSearch: 'Clear',
      noResults: 'No matching service. Try another keyword.',
      resultsFor: 'Results',
      items: '',
      notePrefix: /^\s*\*{0,2}(NOTE|注意)\*{0,2}\s*[:：]\s*/,
      footerMain:
        'Content from <a href="https://github.com/ripienaar/free-for-dev" target="_blank" rel="noopener">ripienaar/free-for-dev</a>, built by 1600+ contributors. Copyright belongs to the original authors and contributors.',
      viewZhSource: 'Chinese Markdown',
      title: 'Free for Dev · Free services for developers',
      themeLabel: 'Toggle dark mode',
    },
  };

  const AVATAR_PALETTES = [
    ['#3B82F6', '#6366F1'], ['#6366F1', '#8B5CF6'], ['#8B5CF6', '#D946EF'],
    ['#06B6D4', '#3B82F6'], ['#0EA5E9', '#22D3EE'], ['#10B981', '#06B6D4'],
    ['#F59E0B', '#F97316'], ['#EF4444', '#F97316'], ['#EC4899', '#8B5CF6'],
    ['#14B8A6', '#84CC16'],
  ];

  /* ---------------- state ---------------- */
  const state = {
    lang: localStorage.getItem('lang') || 'zh',
    theme: localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    index: null,
    modules: new Map(),
    flat: [],
  };

  const $ = (sel) => document.querySelector(sel);
  const t = (key) => I18N[state.lang][key];

  /* ---------------- tiny md renderer ---------------- */
  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function mdInline(s) {
    return esc(s)
      .replace(/!\[([^\]]*)\]\((https?:[^)\s]+)\)/g, '<img alt="$1" src="$2" loading="lazy">')
      .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      // bare URLs preceded by whitespace / start / opening punctuation
      .replace(
        /(^|[\s（(「【《])(https?:\/\/[^\s<>"')\]】」》）。，、；：！？]+)/g,
        (_m, pre, url) => `${pre}<a href="${url}" target="_blank" rel="noopener">${url}</a>`,
      )
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  }

  function hostOf(url) {
    try {
      return new URL(url).host.replace(/^www\./, '');
    } catch {
      return '';
    }
  }

  function monogram(name) {
    const words = name.replace(/[^\p{L}\p{N} .&+-]/gu, '').trim().split(/[\s.]+/).filter(Boolean);
    if (/[\u4e00-\u9fff]/.test(name)) return name.slice(0, 1);
    return words.slice(0, 2).map((w) => w[0]?.toUpperCase() ?? '').join('');
  }
  function avatarStyle(name) {
    let h = 0;
    for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    const [a, b] = AVATAR_PALETTES[h % AVATAR_PALETTES.length];
    return `background:linear-gradient(135deg,${a},${b})`;
  }

  const EXT_SVG = '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M7 17 17 7M9 7h8v8"/></svg>';

  /* ---------------- data loading ---------------- */
  async function load() {
    const [index, intro] = await Promise.all([
      fetch('data/index.json').then((r) => r.json()),
      fetch('data/intro.json').then((r) => r.json()),
    ]);
    state.index = index;
    state.intro = intro;
    const mods = await Promise.all(
      index.sections.map((s) => fetch(`data/modules/${s.id}.json`).then((r) => r.json())),
    );
    mods.forEach((m) => state.modules.set(m.id, m));

    // flat searchable offer list
    state.flat = [];
    for (const m of mods) {
      for (const card of m.items) {
        state.flat.push({ section: m, card, offer: null });
        for (const offer of card.children ?? []) {
          state.flat.push({ section: m, card, offer });
        }
      }
    }
  }

  /* ---------------- rendering ---------------- */
  function pickLang(...vals) {
    const [zh, en] = vals;
    if (state.lang === 'zh') return { text: zh || en || '', missing: !zh };
    return { text: en || zh || '', missing: false };
  }

  function titleOf(section) {
    return state.lang === 'zh' ? section.title.zh : section.title.en;
  }

  function renderStats() {
    const s = state.index.stats;
    const chips = [
      { n: s.sections, zh: '个分类', en: 'categories' },
      { n: s.services.toLocaleString(), zh: '项免费服务', en: 'free services' },
      { n: '1600+', zh: '位贡献者', en: 'contributors' },
    ];
    $('#heroStats').innerHTML = chips
      .map(
        (c) => `<span class="stat-chip"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><b>${c.n}</b>${state.lang === 'zh' ? c.zh : c.en}</span>`,
      )
      .join('');
  }

  function renderSidebar() {
    $('#sideNav').innerHTML = state.index.sections
      .map(
        (s) =>
          `<a class="side-link" href="#sec-${s.id}" data-sec="${s.id}"><span class="nav-zh">${titleOf(s)}</span><span class="nav-count">${s.count}</span></a>`,
      )
      .join('');
  }

  function renderNote() {
    const pair = state.intro.find((p) => /NOTE|注意/.test(p.zh) || /NOTE/.test(p.en));
    if (!pair) { $('#noteCard').hidden = true; return; }
    const raw = state.lang === 'zh' ? pair.zh : pair.en;
    const text = raw.replace(t('notePrefix'), '');
    $('#noteCard').hidden = false;
    $('#noteCard').innerHTML = `
      <span class="note-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/></svg></span>
      <div>${mdInline(text)}</div>`;
  }

  function nameHtml(name, url) {
    const inner = esc(name) + EXT_SVG;
    return url
      ? `<a class="card-name" href="${url}" target="_blank" rel="noopener">${inner}</a>`
      : `<span class="card-name">${esc(name)}</span>`;
  }

  function descHtml(desc, extraClass = '') {
    if (!desc) return '';
    const picked = pickLang(desc.zh, desc.en);
    const tag = state.lang === 'zh' && picked.missing ? '<span class="tag-en">EN</span>' : '';
    return `<p class="${extraClass}">${tag}${mdInline(picked.text)}</p>`;
  }

  function offerRowHtml(o) {
    const name = o.url
      ? `<a class="offer-name" href="${o.url}" target="_blank" rel="noopener">${esc(o.name)}${EXT_SVG}</a>`
      : `<span class="offer-name">${esc(o.name)}</span>`;
    const subs = (o.subs ?? [])
      .map((s) => {
        const p = pickLang(s.text.zh, s.text.en);
        const tag = state.lang === 'zh' && p.missing ? '<span class="tag-en">EN</span>' : '';
        return `<li>${tag}${mdInline(p.text)}</li>`;
      })
      .join('');
    return `<li class="offer">${name}${descHtml(o.desc, 'offer-desc')}${subs ? `<ul class="sub-list">${subs}</ul>` : ''}</li>`;
  }

  function cardHtml(card, { crumb = '', reveal = true } = {}) {
    const isGroup = (card.children ?? []).length > 0;
    const pickedName = state.lang === 'zh' && card.nameZh ? card.nameZh : card.name;
    const host = card.url ? hostOf(card.url) : '';
    const crumbHtml = crumb ? `<span class="result-crumb">${esc(crumb)}</span>` : '';
    const ownDesc = descHtml(card.desc, 'card-desc');
    const body = isGroup
      ? ownDesc + `<ul class="offer-list">${card.children.map(offerRowHtml).join('')}</ul>`
      : ownDesc +
        ((card.subs ?? []).length
          ? `<ul class="sub-list">${card.subs
              .map((s) => `<li>${mdInline(pickLang(s.text.zh, s.text.en).text)}</li>`)
              .join('')}</ul>`
          : '');
    return `<article class="card ${isGroup ? 'is-group' : ''} ${reveal ? 'reveal' : ''}">
      <div class="card-head">
        <span class="avatar" style="${avatarStyle(card.name)}" aria-hidden="true">${esc(monogram(pickedName))}</span>
        <div class="card-title">${nameHtml(pickedName, card.url)}${host ? `<span class="card-host">${esc(host)}</span>` : ''}${crumbHtml}</div>
      </div>${body}</article>`;
  }

  function renderSections() {
    const bilingual = state.lang === 'zh';
    $('#sections').innerHTML = state.index.sections
      .map((s) => {
        const m = state.modules.get(s.id);
        const cards = m.items.map((c) => cardHtml(c)).join('');
        const eyebrow = bilingual ? `<span class="section-en">${esc(s.title.en)}</span>` : '';
        const heading = bilingual ? s.title.zh : s.title.en;
        return `<section class="section reveal" id="sec-${s.id}">
          <header class="section-head">
            ${eyebrow}
            <h2>${esc(heading)}</h2>
            <span class="section-count">${s.count}</span>
          </header>
          <div class="card-grid">${cards}</div>
        </section>`;
      })
      .join('');
    observeReveals();
    observeScrollspy();
  }

  /* ---------------- i18n static text ---------------- */
  function applyStaticI18n() {
    document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
    document.title = t('title');
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const v = t(el.dataset.i18n);
      if (v.includes('<')) el.innerHTML = v;
      else el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
      el.placeholder = t(el.dataset.i18nPh);
    });
    document.querySelectorAll('.lang-btn').forEach((b) => {
      b.classList.toggle('is-active', b.dataset.lang === state.lang);
    });
    $('#themeToggle').setAttribute('aria-label', t('themeLabel'));
  }

  function renderAll() {
    applyStaticI18n();
    renderStats();
    renderSidebar();
    renderNote();
    renderSections();
  }

  /* ---------------- search ---------------- */
  const searchInputs = [$('#searchInput'), $('#heroSearch')];
  let searchTimer;

  function runSearch(q) {
    const query = q.trim().toLowerCase();
    const resultsView = $('#resultsView');
    if (!query) {
      resultsView.hidden = true;
      $('#sections').hidden = false;
      return;
    }
    $('#sections').hidden = true;
    resultsView.hidden = false;

    const hits = [];
    for (const item of state.flat) {
      const o = item.offer;
      const name = (o ?? item.card).name;
      const desc = (o ?? item.card).desc ?? { zh: '', en: '' };
      const hay = [
        name,
        (o ?? item.card).nameZh,
        desc.zh,
        desc.en,
        item.section.title.zh,
        item.section.title.en,
        (o?.subs ?? item.card.subs ?? []).map((s) => `${s.text.zh} ${s.text.en}`).join(' '),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      if (hay.includes(query)) {
        hits.push(item);
      }
    }

    const limited = hits.slice(0, 300);
    $('#resultsTitle').textContent = `${t('resultsFor')} · ${hits.length}`;
    $('#resultsEmpty').hidden = hits.length > 0;
    $('#resultsGrid').innerHTML = limited
      .map((item) => {
        if (item.offer) {
          const fake = { ...item.offer };
          return cardHtml(fake, {
            crumb: `${titleOf(item.section)} / ${item.card.name}`,
            reveal: false,
          });
        }
        return cardHtml(item.card, { crumb: titleOf(item.section), reveal: false });
      })
      .join('');
  }

  searchInputs.forEach((input) => {
    input.addEventListener('input', () => {
      const v = input.value;
      searchInputs.forEach((i) => { if (i !== input) i.value = v; });
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => runSearch(v), 120);
    });
  });
  $('#clearSearch').addEventListener('click', () => {
    searchInputs.forEach((i) => (i.value = ''));
    runSearch('');
    $('#heroSearch').focus();
  });
  addEventListener('keydown', (e) => {
    if (e.key === '/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
      e.preventDefault();
      $('#heroSearch').focus();
    }
    if (e.key === 'Escape' && document.activeElement.classList?.contains('search-input')) {
      searchInputs.forEach((i) => (i.value = ''));
      runSearch('');
      document.activeElement.blur();
    }
  });

  /* ---------------- scroll effects ---------------- */
  let revealObserver;
  function observeReveals() {
    revealObserver?.disconnect();
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            revealObserver.unobserve(en.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.04 },
    );
    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 9, 8) * 45}ms`;
      revealObserver.observe(el);
    });
  }

  let spyObserver;
  function observeScrollspy() {
    spyObserver?.disconnect();
    const links = new Map(
      [...document.querySelectorAll('.side-link')].map((a) => [a.dataset.sec, a]),
    );
    spyObserver = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (!en.isIntersecting) continue;
          const id = en.target.id.replace('sec-', '');
          links.forEach((a) => a.classList.toggle('is-active', a.dataset.sec === id));
          const active = links.get(id);
          if (active) active.scrollIntoView({ block: 'nearest' });
        }
      },
      { rootMargin: '-72px 0px -72% 0px' },
    );
    document.querySelectorAll('.section').forEach((s) => spyObserver.observe(s));
  }

  /* ---------------- chrome: theme / lang / back-top ---------------- */
  function applyTheme() {
    document.documentElement.dataset.theme = state.theme;
    localStorage.setItem('theme', state.theme);
  }
  $('#themeToggle').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
  });

  document.querySelectorAll('.lang-btn').forEach((b) => {
    b.addEventListener('click', () => {
      state.lang = b.dataset.lang;
      localStorage.setItem('lang', state.lang);
      const q = $('#searchInput').value;
      renderAll();
      searchInputs.forEach((i) => (i.value = q));
      if (q) runSearch(q);
    });
  });

  const backTop = $('#backTop');
  addEventListener('scroll', () => {
    const y = scrollY;
    $('#topbar').classList.toggle('is-scrolled', y > 8);
    backTop.classList.toggle('is-visible', y > 600);
  }, { passive: true });
  backTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------------- boot ---------------- */
  applyTheme();
  load()
    .then(() => {
      renderAll();
      const meta = state.index.upstreamCommit ? `upstream@${state.index.upstreamCommit}` : '';
      $('#buildMeta').textContent = meta;
    })
    .catch((err) => {
      console.error(err);
      $('#sections').innerHTML =
        '<p style="padding:40px;text-align:center;color:var(--text-3)">数据加载失败，请通过 GitHub Pages 或本地 HTTP 服务访问本页面。</p>';
    });
})();
