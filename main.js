/* ============================================================
   main.js — EA Partner site
   ============================================================ */
(function () {

  /* ── Element refs ─────────────────────────────────────── */
  const cursor    = document.getElementById('cursor');
  const topbar    = document.getElementById('topbar');
  const year      = document.getElementById('year');
  const nav       = document.getElementById('mainnav');
  const indicator = document.getElementById('navIndicator');
  const hamburger = document.getElementById('hamburger');

  if (year) year.textContent = new Date().getFullYear();

  const prefersReducedMotion =
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Topbar height ────────────────────────────────────── */
  const setTopbarHeight = () => {
    const h = topbar.offsetHeight || 64;
    document.documentElement.style.setProperty('--topbar-h', h + 'px');
  };

  /* ── Shadow + hero inversion on scroll ───────────────── */
  const hasHero = !!document.querySelector('header.hero');
  const onScroll = () => {
    const y = window.scrollY;
    topbar.classList.toggle('scrolled', y > 6);
    if (hasHero) topbar.classList.toggle('over-hero', y < 6);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Custom cursor ────────────────────────────────────── */
  if (cursor) {
    const heroEl = document.querySelector('header.hero');
    let shown = false;

    window.addEventListener('mousemove', (e) => {
      if (!shown) { cursor.style.opacity = '1'; shown = true; }
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';

      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        const inHero = e.clientY >= rect.top && e.clientY <= rect.bottom
                    && e.clientX >= rect.left && e.clientX <= rect.right;
        cursor.style.background = inHero
  ? getComputedStyle(document.documentElement).getPropertyValue('--warm').trim()
  : '';
      }
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
      shown = false;
    });

    window.addEventListener('mousedown', () => cursor.classList.add('clicking'));
    window.addEventListener('mouseup',   () => cursor.classList.remove('clicking'));
  }

  /* ── Hamburger menu ──────────────────────────────────── */
  const overlay = document.getElementById('mobileOverlay');

  if (hamburger && overlay) {
    const closeMenu = () => {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open menu');
    };

    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = overlay.classList.toggle('open');
      overlay.setAttribute('aria-hidden', String(!isOpen));
      hamburger.setAttribute('aria-expanded', String(isOpen));
      hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    overlay.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMenu);
    });
  }

  /* ── Calendly fade swap ──────────────────────────────── */
  const letsTalkBtn   = document.getElementById('lets-talk-btn');
  const contactContent = document.getElementById('contact-content');
  const contactCalendly = document.getElementById('contact-calendly');

  if (letsTalkBtn && contactContent && contactCalendly) {
    letsTalkBtn.addEventListener('click', () => {
      contactContent.style.opacity = '0';
      setTimeout(() => {
        contactContent.style.display = 'none';
        contactCalendly.style.display = 'block';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            contactCalendly.style.opacity = '1';
          });
        });
      }, 400);
    });
  }

  /* ── Ripple effect ────────────────────────────────────── */
  window.addEventListener('click', (e) => {
    if (prefersReducedMotion) return;

    const r = document.createElement('div');
    r.className = 'ripple';
    r.style.left = e.clientX + 'px';
    r.style.top  = e.clientY + 'px';
    r.innerHTML  = '<span></span>';
    document.body.appendChild(r);

    const kill = () => r.remove();
    r.addEventListener('animationend', (ev) => {
      if (ev.target === r.lastElementChild) kill();
    });
    setTimeout(kill, 1200);
  });

  /* ── Sliding nav indicator ────────────────────────────── */
  const links = Array.from(nav.querySelectorAll('a[data-section]'));

  let isProgrammaticScroll = false;
  let programmaticTimer    = null;
  let pendingTargetId      = null;

  const moveIndicatorTo = (link, immediate = false) => {
    if (!link || !indicator) return;

    const navRect  = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const left     = (linkRect.left - navRect.left) + nav.scrollLeft;
    const top      = (linkRect.top  - navRect.top)  + nav.scrollTop;
    const width    = linkRect.width;

    indicator.style.transition = (immediate || prefersReducedMotion)
      ? 'none'
      : 'transform 320ms cubic-bezier(.2,.9,.2,1), width 320ms cubic-bezier(.2,.9,.2,1)';

    indicator.style.width     = width + 'px';
    indicator.style.height    = linkRect.height + 'px';
    indicator.style.top       = top + 'px';
    indicator.style.transform = `translateX(${left}px)`;

    if (immediate && !prefersReducedMotion) {
      requestAnimationFrame(() => {
        indicator.style.transition =
          'transform 320ms cubic-bezier(.2,.9,.2,1), width 320ms cubic-bezier(.2,.9,.2,1)';
      });
    }
  };

  const setActive = (id, opts = { immediate: false, moveIndicator: true }) => {
    if (!id) return;
    links.forEach(l => {
      const active = l.dataset.section === id;
      l.classList.toggle('active', active);
      if (active) l.setAttribute('aria-current', 'page');
      else        l.removeAttribute('aria-current');
    });

    if (opts.moveIndicator) {
      const activeLink = links.find(l => l.dataset.section === id);
      if (activeLink) moveIndicatorTo(activeLink, opts.immediate);
    }
  };

  /* ── Smooth scroll for in-page anchors ───────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (ev) => {
      const hash = a.getAttribute('href');
      if (!hash || hash === '#') return;

      const el = document.querySelector(hash);
      if (!el) return;

      ev.preventDefault();

      if (a.matches('nav a[data-section]')) {
        isProgrammaticScroll = true;
        pendingTargetId      = a.dataset.section;

        clearTimeout(programmaticTimer);
        const settleMs = prefersReducedMotion ? 0 : 700;

        programmaticTimer = setTimeout(() => {
          if (pendingTargetId) setActive(pendingTargetId);
          pendingTargetId      = null;
          isProgrammaticScroll = false;
        }, settleMs);
      }

      const topbarH = topbar ? topbar.offsetHeight : 64;
      const top = el.getBoundingClientRect().top + window.scrollY - topbarH + 2;
      window.scrollTo({
        top,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
      history.pushState(null, '', hash);
    });
  });

  /* ── Active section tracking via IntersectionObserver ── */
  const sections = links
    .map(l => document.getElementById(l.dataset.section))
    .filter(Boolean);

  const obs = new IntersectionObserver((entries) => {
    if (isProgrammaticScroll) return;

    const visible = entries
      .filter(en => en.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible?.target?.id) setActive(visible.target.id);
  }, {
    threshold: [0.2, 0.35, 0.5, 0.65],
    rootMargin: '-20% 0px -60% 0px',
  });

  sections.forEach(s => obs.observe(s));

  /* ── Scroll reveal ───────────────────────────────────── */
  const revealEls = document.querySelectorAll('.panel, .card, .track-card, .section-head, .section-label');
  revealEls.forEach(el => {
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
  });

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        revealObs.unobserve(en.target);
      }
    });
  }, { threshold: 0.08 });

  revealEls.forEach(el => revealObs.observe(el));

  /* ── SVG scroll-trigger for #diensten ────────────────── */
  const dienstenSection = document.getElementById('diensten');
  if (dienstenSection) {
    const svgObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dienstenSection.classList.add('in-view');
        svgObs.disconnect();
      }
    }, { threshold: 0.1 });
    svgObs.observe(dienstenSection);
  }

  /* ── SVG scroll-trigger for #waarde ─────────────────── */
  const waardeSection = document.getElementById('waarde');
  if (waardeSection) {
    const waardeObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        waardeSection.classList.add('in-view');
        waardeObs.disconnect();
      }
    }, { threshold: 0.1 });
    waardeObs.observe(waardeSection);
  }

  /* ── Phase block reveal ──────────────────────────────── */
  const phaseBlocks = document.querySelectorAll('.phase-block');
  if (phaseBlocks.length) {
    const phaseObs = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('revealed');
          phaseObs.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    phaseBlocks.forEach(b => phaseObs.observe(b));
  }

  /* ── Mobile "Show more" for track cards ────────────── */
  document.querySelectorAll('.track-show-more').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const wrap = btn.closest('.track-body').querySelector('.track-expand-wrap');
      const isOpen = wrap.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
      btn.textContent = isOpen ? 'Show less' : 'Show more';
    });
  });

  /* ── Init ─────────────────────────────────────────────── */
  const hash = (location.hash || '').replace('#', '');
  setTopbarHeight();

  const init = () => {
    const initial = (hash && document.getElementById(hash)) ? hash : null;
    if (initial) {
      setActive(initial, { immediate: true, moveIndicator: true });
    } else {
      moveIndicatorTo(links[0], true);
    }
  };

  const onResize = () => {
    setTopbarHeight();
    const activeLink = nav.querySelector('a.active');
    if (activeLink) moveIndicatorTo(activeLink, true);
  };

  window.addEventListener('resize', onResize, { passive: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
