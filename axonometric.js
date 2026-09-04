/* ============================================================
   axonometric.js — "How we think" interactive illustration.
   Index list (left) drives which square is highlighted in the
   isometric drawing (right): hover/focus previews, click persists.
   A fourth entry, "harmonized", has no square of its own — it
   highlights all three drawn layers at once. Geometry is generated
   from numbers via axo-geometry.js. Content is bilingual via the
   site's normal data-i18n system (this script runs before main.js,
   so its injected markup exists before main.js applies translations).
   ============================================================ */
(function () {

  const LAYERS = [
    { id: '01', geometry: 'plan' },
    { id: '02', geometry: 'blueprint' },
    { id: '03', geometry: 'means' },
    { id: '04', geometry: null }, // harmonized — highlights all layers, draws none of its own
  ];

  const AXO_SECTION_HTML = `
    <div class="wrap">
      <div class="section-3col">
        <div class="section-label">
          <p class="section-eyebrow reveal" style="--reveal-delay: 0ms" data-i18n="stack-eyebrow">How we think</p>
          <h2 class="reveal" style="--reveal-delay: 0ms" data-i18n="stack-h2">Plan to means,<br>in one motion</h2>
          <p class="sub reveal" style="--reveal-delay: 0ms; margin-top:16px;" data-i18n="stack-sub">Three layers. A decision at the top has to land as owned, funded work at the bottom, and the result has to travel back up. Most organisations lose it somewhere in the middle.</p>
          <div class="axo-index" role="group" aria-label="Layers" id="axoIndex"></div>
        </div>
        <div class="axo-drawing reveal" style="--reveal-delay: 300ms" id="axoDrawing"></div>
      </div>
    </div>
  `;

  // NOTE: the outer grid is `.section-3col` — the same class every other
  // section uses for its [label] [content] layout — so this section's
  // left column matches their left-column width exactly, instead of
  // using its own ratio.

  const buildIndexHTML = () => LAYERS.map((l, i) => `
    <button type="button" class="axo-row reveal" style="--reveal-delay: ${300 + i * 150}ms" id="axo-btn-${l.id}" data-id="${l.id}" aria-pressed="false" aria-describedby="axo-desc-${l.id}">
      <span class="axo-row-top"><span class="axo-num">${l.id}</span><span class="axo-title" data-i18n="stack-${l.id}-title">Layer</span></span>
      <span class="axo-desc" id="axo-desc-${l.id}"><span class="axo-desc-inner">
        <span class="axo-subtitle" data-i18n="stack-${l.id}-subtitle">Subtitle</span>
        <span class="axo-text" data-i18n="stack-${l.id}-line">Line.</span>
      </span></span>
    </button>
  `).join('');

  /* ── Geometry: one flat square per layer, no sides — just the top
     face outline, stacked close together on the z axis and sized to
     fit all three in the viewport at once. Means sits at the base
     (z=0); Blueprint and Plan float just above it. ── */
  const SIZE = 12;  // square footprint (w = d)
  const GAP  = 3;   // vertical gap between squares

  const MEANS_Z     = 0;
  const BLUEPRINT_Z = MEANS_Z + GAP;
  const PLAN_Z      = BLUEPRINT_Z + GAP;

  const square = (G, z) => G.face([[0, 0, z], [SIZE, 0, z], [SIZE, SIZE, z], [0, SIZE, z]]);

  const buildSVG = () => {
    const G = window.AxoGeometry;
    G.resetBounds();

    let s = '';
    s += `<g data-layer="03">${square(G, MEANS_Z)}</g>`;
    s += `<g data-layer="02">${square(G, BLUEPRINT_Z)}</g>`;
    s += `<g data-layer="01">${square(G, PLAN_Z)}</g>`;

    const b = G.getBounds();
    const pad = 32;
    const vx = (b.minX - pad).toFixed(1), vy = (b.minY - pad).toFixed(1);
    const vw = (b.maxX - b.minX + pad * 2).toFixed(1), vh = (b.maxY - b.minY + pad * 2).toFixed(1);

    return `<svg class="axo-svg" viewBox="${vx} ${vy} ${vw} ${vh}" fill="none" role="img" aria-labelledby="axoTitle axoDesc">
      <title id="axoTitle">Three stacked squares: plan, blueprint, means</title>
      <desc id="axoDesc">A static isometric drawing of three flat squares, stacked closely: plan at the top, blueprint in the middle, means at the base.</desc>
      ${s}
    </svg>`;
  };

  /* ── Wiring: hover/focus previews, click persists ───────── */
  const init = () => {
    const root = document.querySelector('[data-inject-axo]');
    if (!root) return;
    root.innerHTML = AXO_SECTION_HTML;

    const indexEl = root.querySelector('#axoIndex');
    const drawEl  = root.querySelector('#axoDrawing');
    indexEl.innerHTML = buildIndexHTML();
    drawEl.innerHTML  = buildSVG();

    const svgEl    = drawEl.querySelector('svg');
    const layerEls = svgEl.querySelectorAll('[data-layer]');
    const buttons  = Array.from(indexEl.querySelectorAll('.axo-row'));
    let selected = null;

    const applyState = (activeId) => {
      buttons.forEach(b => b.classList.toggle('is-active', activeId !== null && b.dataset.id === activeId));
      layerEls.forEach(g => {
        if (activeId === null) { g.style.opacity = ''; return; }
        // The "harmonized" layer (04) has no square of its own —
        // it highlights every drawn layer at once.
        g.style.opacity = (activeId === '04' || g.dataset.layer === activeId) ? '1' : '.15';
      });
    };

    const setSelected = (id) => {
      selected = id;
      buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.id === id)));
      applyState(id);
    };

    buttons.forEach((b, i) => {
      // The active row's text expands (the accordion) and can grow the
      // button taller than the viewport has room for — browsers respond
      // to that by auto-scrolling the newly-focused element into view,
      // which (now that scrolling is smooth) reads as the whole diagram
      // sliding around. Taking over focus with preventScroll stops it:
      // the row still lights up, the page never moves.
      b.addEventListener('mousedown', (e) => e.preventDefault());
      b.addEventListener('mouseenter', () => applyState(b.dataset.id));
      b.addEventListener('focus',      () => applyState(b.dataset.id));
      b.addEventListener('mouseleave', () => applyState(selected));
      b.addEventListener('blur',       () => applyState(selected));
      b.addEventListener('click',      () => {
        b.focus({ preventScroll: true });
        setSelected(b.dataset.id);
      });
      b.addEventListener('keydown', (e) => {
        if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(e.key)) return;
        e.preventDefault();
        const dir = (e.key === 'ArrowDown' || e.key === 'ArrowRight') ? 1 : -1;
        buttons[(i + dir + buttons.length) % buttons.length].focus({ preventScroll: true });
      });
    });
  };

  // Runs at top level (like main.js's own section injections) so the
  // .reveal elements below exist before main.js wires up its scroll
  // observer and translations — this script tag must stay ordered
  // before main.js's.
  init();
})();
