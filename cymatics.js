(function () {
  'use strict';

  // ── Tuning knobs ─────────────────────────────────────────────────────────
  // Too busy behind text  → raise trailFade to 0.45, drop particleAlphaSettled to 0.7
  // Janky on old phones   → raise density to 160
  // Changes too often     → raise autoInterval to 12000
  // Pattern forms too slowly → raise baseForce
  const CONFIG = {
    density:              115,    // px² per particle
    minParticles:        3000,
    maxParticles:       15000,
    trailFade:           0.28,   // bg fill alpha per frame (higher = shorter trails)
    particleAlphaSettled: 0.85,
    particleAlphaMoving:  0.5,
    particleSize:         1.5,   // px, desktop
    particleSizeMobile:   1.2,   // px, < 720 wide
    pointerRadius:        130,   // px; set 0 to disable repulsion
    autoInterval:        8000,   // ms between auto mode changes
    minStrikeInterval:   2500,   // ms minimum between any two strikes
    strikeTemperature:    3.4,   // random velocity burst magnitude on strike
    dprCap:               2,
    baseForce:            25,    // gradient force toward nodal lines (was 2 — too weak)
    damping:              0.95,  // per-frame velocity multiplier (< 1)
  };

  const MODES = [
    { n: 2, m: 3, glow: '#a32010' },
    { n: 3, m: 4, glow: '#701608' },
    { n: 1, m: 4, glow: '#b02408' },
    { n: 3, m: 5, glow: '#5c0f07' },
    { n: 2, m: 5, glow: '#c02708' },
    { n: 4, m: 5, glow: '#8b2a14' },
    { n: 1, m: 6, glow: '#941c06' },
    { n: 3, m: 6, glow: '#6e1a0d' },
  ];

  // ── Setup ─────────────────────────────────────────────────────────────────
  const hero = document.querySelector('header.hero');
  if (!hero) return;
  const container = hero.querySelector('.cymatic-bg');
  if (!container) return;
  const canvas = container.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  // Read colors from CSS custom properties at runtime
  const cs = getComputedStyle(document.documentElement);
  function parseHex(str) {
    let h = str.trim().replace('#', '');
    if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
    return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)];
  }
  function readProp(prop, fallback) {
    const v = cs.getPropertyValue(prop).trim();
    return parseHex(v || fallback);
  }
  const [bgR, bgG, bgB]       = readProp('--hero-bg', '#8b1a0a');
  const [warmR, warmG, warmB] = readProp('--warm',    '#F5E0C3');
  const [acR, acG, acB]       = readProp('--accent',  '#f1400b');

  // Pre-compute 64-step color table: avoids template-string allocation per particle per frame
  const N_COLORS = 64;
  const COLOR_TABLE = [];
  const trailFillStyle = `rgba(${bgR},${bgG},${bgB},${CONFIG.trailFade})`;
  for (let i = 0; i <= N_COLORS; i++) {
    const tc = i / N_COLORS;
    const a  = (CONFIG.particleAlphaSettled + (CONFIG.particleAlphaMoving - CONFIG.particleAlphaSettled) * tc).toFixed(3);
    COLOR_TABLE.push(`rgba(${acR},${acG},${acB},${a})`);
  }

  let W = 0, H = 0, dpr = 1;
  let particles = [];
  let modeIndex = 0;
  let currentMode = MODES[0];
  let pointerX = -9999, pointerY = -9999;
  let lastStrikeTime = -(CONFIG.minStrikeInterval);
  let lastAutoTime = 0;
  let running = false, rafId = null;

  // ── Resize ────────────────────────────────────────────────────────────────
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, CONFIG.dprCap);
    W = hero.offsetWidth;
    H = hero.offsetHeight;
    canvas.width  = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // Fill opaque background immediately so trail-fade works from frame 1
    ctx.fillStyle = `rgb(${bgR},${bgG},${bgB})`;
    ctx.fillRect(0, 0, W, H);
    initParticles();
  }

  function initParticles() {
    const count = Math.min(CONFIG.maxParticles,
      Math.max(CONFIG.minParticles, Math.floor((W * H) / CONFIG.density)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: 0, vy: 0,
    }));
  }

  // ── Chladni physics ───────────────────────────────────────────────────────
  // φ(u,v) = cos(nπu)cos(mπv) − cos(mπu)cos(nπv)
  // Force: −φ∇φ drives particles toward nodal lines (φ = 0).
  function chladni(x, y, n, m) {
    const u = x / W, v = y / H, pi = Math.PI;
    const npu = n * pi * u, mpv = m * pi * v;
    const mpu = m * pi * u, npv = n * pi * v;
    const phi = Math.cos(npu) * Math.cos(mpv) - Math.cos(mpu) * Math.cos(npv);
    const gu  = -n * pi * Math.sin(npu) * Math.cos(mpv) + m * pi * Math.sin(mpu) * Math.cos(npv);
    const gv  = -m * pi * Math.cos(npu) * Math.sin(mpv) + n * pi * Math.cos(mpu) * Math.sin(npv);
    return { phi, gu, gv };
  }

  // ── Strike ────────────────────────────────────────────────────────────────
  function strike(now) {
    if (now - lastStrikeTime < CONFIG.minStrikeInterval) return;
    lastStrikeTime = now;

    modeIndex   = (modeIndex + 1) % MODES.length;
    currentMode = MODES[modeIndex];
    container.style.setProperty('--glow-color', currentMode.glow);

    const t = CONFIG.strikeTemperature;
    for (let i = 0; i < particles.length; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = (0.5 + Math.random() * 0.5) * t;
      particles[i].vx += Math.cos(a) * s;
      particles[i].vy += Math.sin(a) * s;
    }
  }

  // ── Draw loop ─────────────────────────────────────────────────────────────
  function draw() {
    const { n, m } = currentMode;
    const pSize    = W < 720 ? CONFIG.particleSizeMobile : CONFIG.particleSize;

    // Trail fade — semi-transparent bg fill lets prior frames linger
    ctx.fillStyle = trailFillStyle;
    ctx.fillRect(0, 0, W, H);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const { phi, gu, gv } = chladni(p.x, p.y, n, m);

      // dφ/dx = gu/W, dφ/dy = gv/H  →  force = −φ·∇φ in pixel space
      p.vx -= phi * gu / W * CONFIG.baseForce;
      p.vy -= phi * gv / H * CONFIG.baseForce;

      // Pointer repulsion (listeners on hero, not canvas)
      if (CONFIG.pointerRadius > 0) {
        const dx = p.x - pointerX, dy = p.y - pointerY;
        const d2 = dx * dx + dy * dy;
        const r2 = CONFIG.pointerRadius * CONFIG.pointerRadius;
        if (d2 < r2 && d2 > 0.01) {
          const d   = Math.sqrt(d2);
          const str = (1 - d / CONFIG.pointerRadius) * 2.5;
          p.vx += (dx / d) * str;
          p.vy += (dy / d) * str;
        }
      }

      p.vx *= CONFIG.damping;
      p.vy *= CONFIG.damping;
      p.x  += p.vx;
      p.y  += p.vy;

      // Wrap edges
      if (p.x < 0) p.x += W; else if (p.x > W) p.x -= W;
      if (p.y < 0) p.y += H; else if (p.y > H) p.y -= H;

      // Look up pre-computed color by speed bucket (avoids per-particle string alloc)
      const speed = Math.hypot(p.vx, p.vy);
      const ci    = Math.min(N_COLORS, Math.floor(speed / 3 * N_COLORS));
      ctx.fillStyle = COLOR_TABLE[ci];
      ctx.fillRect(p.x - pSize * 0.5, p.y - pSize * 0.5, pSize, pSize);
    }
  }

  function loop(now) {
    if (!running) return;
    draw();
    if (now - lastAutoTime > CONFIG.autoInterval) {
      strike(now);
      lastAutoTime = now;
    }
    rafId = requestAnimationFrame(loop);
  }

  // ── Reduced-motion: static settled figure, no rAF ────────────────────────
  function drawStatic() {
    const { n, m } = currentMode;
    ctx.fillStyle = `rgb(${bgR},${bgG},${bgB})`;
    ctx.fillRect(0, 0, W, H);
    const pSize    = W < 720 ? CONFIG.particleSizeMobile : CONFIG.particleSize;
    const pi       = Math.PI;
    const target   = Math.min(CONFIG.maxParticles, Math.max(CONFIG.minParticles, Math.floor(W * H / CONFIG.density)));
    const maxTries = target * 30;
    ctx.fillStyle  = COLOR_TABLE[0]; // settled color
    let drawn = 0, tries = 0;
    while (drawn < target && tries < maxTries) {
      tries++;
      const u = Math.random(), v = Math.random();
      const phi = Math.cos(n * pi * u) * Math.cos(m * pi * v)
                - Math.cos(m * pi * u) * Math.cos(n * pi * v);
      if (Math.abs(phi) < 0.15) {
        ctx.fillRect(u * W - pSize * 0.5, v * H - pSize * 0.5, pSize, pSize);
        drawn++;
      }
    }
  }

  // ── Pointer listeners (on hero, not canvas) ───────────────────────────────
  hero.addEventListener('pointermove', function (e) {
    const rect = hero.getBoundingClientRect();
    pointerX = e.clientX - rect.left;
    pointerY = e.clientY - rect.top;
  }, { passive: true });

  hero.addEventListener('pointerleave', function () {
    pointerX = -9999; pointerY = -9999;
  }, { passive: true });

  var lastClick = 0;
  hero.addEventListener('click', function (e) {
    if (e.target.closest('a,button,input,select,textarea')) return;
    var now = performance.now();
    if (now - lastClick < 800) return;
    lastClick = now;
    strike(now);
    lastAutoTime = now;
  }, { passive: true });

  // ── IntersectionObserver: pause rAF when hero off-screen ─────────────────
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        if (!running) { running = true; rafId = requestAnimationFrame(loop); }
      } else {
        running = false;
        if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      }
    });
  }, { threshold: 0.01 });

  // ── Init ──────────────────────────────────────────────────────────────────
  resize();
  window.addEventListener('resize', resize);

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    drawStatic();
  } else {
    container.style.setProperty('--glow-color', currentMode.glow);
    io.observe(hero);
    running = true;
    requestAnimationFrame(function (t) {
      lastAutoTime = t;
      loop(t);
    });
  }
})();
