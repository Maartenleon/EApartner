/* ============================================================
   main.js — EA Partner site
   ============================================================ */
(function () {

  /* ── Translations ─────────────────────────────────────── */
  const translations = {
    en: {
      'page-title':          'Enterprise Architecture Consultancy | Focus & Clarity',
      'nav-value':           'Value',
      'nav-services':        'Services',
      'nav-approach':        'Approach',
      'nav-about':           'About',
      'nav-contact':         'Contact',
      'nav-track1':          'Architecture for Transformation',
      'nav-track2':          'Architecture as a Function',
      'hero-h1':             'Clear direction<br>for organisations<br>in transformation.',
      'hero-lede':           'Enterprise Architecture is how you get there,<br>in alignment with your strategy, while controlling complexity.',
      'hero-cta':            'View services',
      'value-eyebrow':       'Why enterprise architecture',
      'value-h2':            'Every satisfying organisational experience, product, or process, is held together by architecture most people never see.',
      'value-text1':         'The pattern is familiar: too many initiatives, too little focus. An IT landscape that tangles as the organisation grows. Strategic direction that doesn\'t reach delivery. Delivery that drifts without strategic direction. The need isn\'t more technology. It\'s coherence across the whole.',
      'value-text2':         'Architecture earns its place close enough to strategy to shape decisions, and close enough to delivery to govern what actually gets built. That means two things need to work: <br><strong>transformations need solid architecture</strong> to steer them, and <strong>the architecture function itself needs to deliver.</strong> How that looks depends on where you are.',
      'services-eyebrow':    'What I offer',
      'services-h2':         'Services',
      'services-sub':        'Two tracks. One for organisations with complex transformations. One for organisations who want to improve their architecture function.<br><br>I\'m good at enterprise and business architecture. Track 1 puts that to work inside your transformation. Track 2 builds it into your organisation.<br><br>Both tracks are built for the agentic era: architectures that absorb change instead of resisting it, close to where decisions actually get made.',
      'track1-h3':           'Architecture for Transformation',
      'track1-p':            'Your transformation needs a spine: from strategy through capabilities, data, applications, and technology. Architecture that connects layers and enables decisions.',
      'track-showmore':      'Show more',
      'track-showless':      'Show less',
      'track1-fitline':      'Best for: Organisations mid-transformation where decisions are stuck, unclear, or drifting',
      'track1-li1':          'A clear map of where complexity sits and which decisions are urgent',
      'track1-li2':          'A layered target architecture that\'s built to last and executable',
      'track1-li3':          'A sequenced roadmap where every step traces to a decision, not a deadline',
      'track1-li4':          'Embedded guidance until the path forward stays obvious without me',
      'track2-h3':           'Architecture as a Function',
      'track2-p':            'Your EA function exists but doesn\'t deliver influence, governance, decisions, or value. A concrete plan to make architecture stick by enhancing six capabilities.',
      'track2-fitline':      'Best for: Organisations with an EA function that exists but doesn\'t deliver strategic value',
      'track2-li1':          'An honest baseline across all six EA capabilities, scored and compared',
      'track2-li2':          'A named diagnosis of where the function loses influence and why',
      'track2-li3':          'A concrete, sequenced improvement plan anchored to impact',
      'track2-li4':          'Coaching support for leads and teams during the build-out',
      'approach-eyebrow':    'How I work',
      'approach-h2':         'Approach',
      'approach-sub':        'Every engagement follows the same rhythm: a sharp diagnostic, a clear architecture, then close involvement during delivery. The content differs by track. The discipline doesn\'t.',
      'phase1-title':        'Diagnose — 4 weeks',
      'phase1-subtitle':     'QuickScan · Maturity Audit',
      'phase1-body':         '<strong>No assumptions, no predefined answers.</strong> For transformation programmes: what is the goal, where does complexity sit, what is blocking progress, which architectural decisions are urgent? For EA functions: what is the current maturity? The output is a prioritised map of what needs to happen.',
      'phase2-title':        'Architect — 4 weeks',
      'phase2-subtitle':     'Target State · Roadmap · Decisions',
      'phase2-body':         '<strong>Translate the diagnosis into a clear architecture and executable strategy.</strong> Trade-offs get made, options get documented, a roadmap gets set, with guardrails not just milestones. Every artefact earns its place because it changes what someone does next. Decisions over documents.',
      'phase3-title':        'Steer — ongoing',
      'phase3-subtitle':     'Embedded Partner · Delivery Support',
      'phase3-body':         '<strong>Architecture doesn\'t survive first contact with delivery unchanged.</strong> Steer is the embedded partner phase: guardrails, course corrections when the landscape shifts, and a thinking partner close enough to the work to catch drift before it becomes debt. Until the path forward stays obvious without me in the room.',
      'about-eyebrow':       'Who I am',
      'about-h2':            'About',
      'about-sub':           'A sharp and great collaborator. Good listener, effective communicator.',
      'about-role':          'Enterprise Architect',
      'about-bio':           'Most architecture work produces documents that inform, but don\'t decide. I work the other way: artefacts need to be useful at the moment a decision has to be made. Clear output. Fast cycles. No model for its own sake. Keep things minimal, keep the pace up, and stay close enough to business, product, data, and engineering to connect them when it matters, until the path forward is obvious.<br><br>TOGAF and ArchiMate certified. MSc in Enterprise IT Architecture. Academic rigour in service of practical reality.',
      'about-fitlabel':      'Where I typically work',
      'about-fit1':          'Mid-to-large organisations in active transformation',
      'about-fit2':          'Organisations starting or resetting an EA practice',
      'about-fit3':          'Programme teams that need architecture to move with delivery',
      'about-fit4':          'CIOs and heads of architecture who need a thinking partner',
      'contact-h2':          'Ready to talk<br>enterprise architecture?',
      'contact-sub':         'Whether it\'s steering a transformation or building an EA function that delivers — one focused conversation is often enough to find the way forward.',
      'contact-cta':         'Let\'s talk',
      'contact-opts-eyebrow':'Get in touch',
      'contact-opts-h2':     'Contact',
      'contact-opts-sub':    'No preparation needed. Pick what works best for you.',
      'contact-msg-title':   'Message',
      'contact-msg-desc':    'Write it down, I\'ll reply within a day',
      'form-namelabel':      'Name',
      'form-emaillabel':     'Email',
      'form-companylabel':   'Company',
      'form-msglabel':       'Message',
      'ph-name':             'Your name',
      'ph-company':          'Your organisation',
      'ph-message':          'What\'s on your mind?',
      'form-submit':         'Send message',
      'form-sending':        'Sending…',
      'form-success':        'Message sent. I\'ll be in touch within a day.',
      'form-error':          'Something went wrong — try calling or emailing directly.',
      'contact-call-title':  'Call',
      'contact-avail':       'Available Monday – Friday, 09:00 – 18:00 CET',
    },
    nl: {
      'page-title':          'Enterprise Architecture Consultancy | Focus & Helderheid',
      'nav-value':           'Waarde',
      'nav-services':        'Diensten',
      'nav-approach':        'Aanpak',
      'nav-about':           'Over',
      'nav-contact':         'Contact',
      'nav-track1':          'Architectuur voor Transformatie',
      'nav-track2':          'Architectuur als Functie',
      'hero-h1':             'Heldere richting<br>voor organisaties<br>in verandering.',
      'hero-lede':           'Enterprise Architecture is de weg ernaartoe,<br>in lijn met uw strategie, terwijl u de complexiteit beheerst.',
      'hero-cta':            'Bekijk diensten',
      'value-eyebrow':       'Waarom enterprise architecture',
      'value-h2':            'Elke bevredigende organisatorische ervaring, elk product of proces, wordt bijeengehouden door architectuur die de meeste mensen nooit zien.',
      'value-text1':         'Het patroon is bekend: te veel initiatieven, te weinig focus. Een IT-landschap dat verstrikt raakt naarmate de organisatie groeit. Strategische richting die de uitvoering niet bereikt. Uitvoering die afdrijft zonder strategische richting. De behoefte is niet meer technologie. Het is samenhang over het geheel.',
      'value-text2':         'Architectuur verdient haar plek dicht genoeg bij de strategie om beslissingen te vormen, en dicht genoeg bij de uitvoering om te sturen wat er daadwerkelijk wordt gebouwd. Dat betekent dat twee dingen moeten werken: <br><strong>transformaties hebben solide architectuur nodig</strong> om ze te sturen, en <strong>de architectuurfunctie zelf moet leveren.</strong> Hoe dat eruitziet hangt af van waar u staat.',
      'services-eyebrow':    'Wat ik aanbied',
      'services-h2':         'Diensten',
      'services-sub':        'Twee tracks. Eén voor organisaties met complexe transformaties. Eén voor organisaties die hun architectuurfunctie willen verbeteren.<br><br>Ik ben goed in enterprise- en bedrijfsarchitectuur. Track 1 zet dat in voor uw transformatie. Track 2 bouwt het in uw organisatie.<br><br>Beide tracks zijn gebouwd voor het agentische tijdperk: architecturen die verandering absorberen in plaats van weerstand bieden, dicht bij waar beslissingen daadwerkelijk worden genomen.',
      'track1-h3':           'Architectuur voor Transformatie',
      'track1-p':            'Uw transformatie heeft een ruggengraat nodig: van strategie via capabilities, data, applicaties en technologie. Architectuur die lagen verbindt en beslissingen mogelijk maakt.',
      'track-showmore':      'Meer tonen',
      'track-showless':      'Minder tonen',
      'track1-fitline':      'Geschikt voor: Organisaties midden in een transformatie waar beslissingen vastlopen, onduidelijk zijn of afdrijven',
      'track1-li1':          'Een helder overzicht van waar de complexiteit zit en welke beslissingen urgent zijn',
      'track1-li2':          'Een gelaagde doelarchitectuur die duurzaam en uitvoerbaar is',
      'track1-li3':          'Een gesequenced roadmap waarbij elke stap terugleidt naar een beslissing, niet een deadline',
      'track1-li4':          'Ingebedde begeleiding totdat de weg vooruit vanzelfsprekend is zonder mij',
      'track2-h3':           'Architectuur als Functie',
      'track2-p':            'Uw EA-functie bestaat maar levert geen invloed, governance, beslissingen of waarde. Een concreet plan om architectuur te laten beklijven door zes capabilities te versterken.',
      'track2-fitline':      'Geschikt voor: Organisaties met een EA-functie die bestaat maar geen strategische waarde levert',
      'track2-li1':          'Een eerlijke baseline over alle zes EA-capabilities, gescoord en vergeleken',
      'track2-li2':          'Een benoemde diagnose van waar de functie invloed verliest en waarom',
      'track2-li3':          'Een concreet, gesequenced verbeterplan verankerd aan impact',
      'track2-li4':          'Coachingondersteuning voor leads en teams tijdens de opbouw',
      'approach-eyebrow':    'Hoe ik werk',
      'approach-h2':         'Aanpak',
      'approach-sub':        'Elke opdracht volgt hetzelfde ritme: een scherpe diagnose, een heldere architectuur, dan nauwe betrokkenheid tijdens de uitvoering. De inhoud verschilt per track. De discipline niet.',
      'phase1-title':        'Diagnose — 4 weken',
      'phase1-subtitle':     'QuickScan · Volwassenheidsaudit',
      'phase1-body':         '<strong>Geen aannames, geen vooraf bepaalde antwoorden.</strong> Voor transformatieprogramma\'s: wat is het doel, waar zit de complexiteit, wat blokkeert de voortgang, welke architectuurbeslissingen zijn urgent? Voor EA-functies: wat is de huidige volwassenheid? De uitkomst is een geprioriteerde kaart van wat er moet gebeuren.',
      'phase2-title':        'Architectuur — 4 weken',
      'phase2-subtitle':     'Doelstaat · Roadmap · Beslissingen',
      'phase2-body':         '<strong>Vertaal de diagnose naar een heldere architectuur en uitvoerbare strategie.</strong> Afwegingen worden gemaakt, opties gedocumenteerd, een roadmap wordt vastgesteld, met vangrails en niet alleen mijlpalen. Elk artefact verdient zijn plek omdat het verandert wat iemand als volgende doet. Beslissingen boven documenten.',
      'phase3-title':        'Sturen — doorlopend',
      'phase3-subtitle':     'Ingebed Partner · Delivery Ondersteuning',
      'phase3-body':         '<strong>Architectuur overleeft het eerste contact met de uitvoering niet onveranderd.</strong> Sturen is de ingebedde partnerfase: vangrails, bijsturing wanneer het landschap verschuift, en een denkpartner dichtbij genoeg bij het werk om afdrijven te signaleren voordat het schuld wordt. Totdat de weg vooruit vanzelfsprekend blijft zonder mij in de kamer.',
      'about-eyebrow':       'Wie ik ben',
      'about-h2':            'Over',
      'about-sub':           'Scherp en een fijne samenwerkingspartner. Goede luisteraar, effectieve communicator.',
      'about-role':          'Enterprise Architect',
      'about-bio':           'De meeste architectuurwerkzaamheden produceren documenten die informeren, maar niet beslissen. Ik werk andersom: artefacten moeten nuttig zijn op het moment dat een beslissing genomen moet worden. Heldere output. Snelle cycli. Geen model om het model. Houdt het minimaal, houdt het tempo hoog, en blijf dicht genoeg bij business, product, data en engineering om ze te verbinden wanneer het ertoe doet, totdat de weg vooruit vanzelfsprekend is.<br><br>TOGAF en ArchiMate gecertificeerd. MSc in Enterprise IT Architecture. Academische strengheid in dienst van praktische realiteit.',
      'about-fitlabel':      'Waar ik doorgaans werk',
      'about-fit1':          'Middelgrote tot grote organisaties in actieve transformatie',
      'about-fit2':          'Organisaties die een EA-praktijk starten of resetten',
      'about-fit3':          'Programmateams die architectuur nodig hebben die meebeweegt met de uitvoering',
      'about-fit4':          'CIO\'s en hoofden van architectuur die een denkpartner nodig hebben',
      'contact-h2':          'Klaar voor een gesprek<br>over enterprise architectuur?',
      'contact-sub':         'Of het nu gaat om het sturen van een transformatie of het opbouwen van een EA-functie die levert — één gefocust gesprek is vaak genoeg om de weg vooruit te vinden.',
      'contact-cta':         'Laten we praten',
      'contact-opts-eyebrow':'Neem contact op',
      'contact-opts-h2':     'Contact',
      'contact-opts-sub':    'Geen voorbereiding nodig. Kies wat het beste voor u werkt.',
      'contact-msg-title':   'Bericht',
      'contact-msg-desc':    'Schrijf het op, ik reageer binnen een dag',
      'form-namelabel':      'Naam',
      'form-emaillabel':     'E-mail',
      'form-companylabel':   'Bedrijf',
      'form-msglabel':       'Bericht',
      'ph-name':             'Uw naam',
      'ph-company':          'Uw organisatie',
      'ph-message':          'Wat speelt er?',
      'form-submit':         'Verstuur bericht',
      'form-sending':        'Verzenden…',
      'form-success':        'Bericht verzonden. Ik neem binnen een dag contact op.',
      'form-error':          'Er is iets misgegaan — probeer te bellen of direct te mailen.',
      'contact-call-title':  'Bellen',
      'contact-avail':       'Bereikbaar maandag – vrijdag, 09:00 – 18:00 CET',
    },
  };

  let currentLang = localStorage.getItem('lang') || 'en';

  const t = (key) => (translations[currentLang] || translations.en)[key]
                  || translations.en[key]
                  || key;

  const setLangContent = (lang) => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = (translations[lang] || translations.en)[el.dataset.i18n];
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const val = (translations[lang] || translations.en)[el.dataset.i18nPh];
      if (val !== undefined) el.placeholder = val;
    });
    document.title = (translations[lang] || translations.en)['page-title'] || document.title;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.langBtn === lang);
    });
  };

  const applyLang = (lang) => {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.body.classList.add('lang-fade');
    setTimeout(() => {
      setLangContent(lang);
      // Nav text widths change on language swap — reposition indicator
      // while the body is still faded out so the jump is invisible.
      const activeLink = links.find(l => l.classList.contains('active'));
      if (activeLink) moveIndicatorTo(activeLink, true);
      document.body.classList.remove('lang-fade');
    }, 180);
  };

  // Apply on load (no fade)
  setLangContent(currentLang);

  // Language toggle buttons
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.langBtn !== currentLang) applyLang(btn.dataset.langBtn);
    });
  });

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
  const hasHero      = !!document.querySelector('header.hero');
  const heroGlow     = document.querySelector('.hero-glow');
  const themeColorEl = document.getElementById('theme-color-meta');
  const heroEl       = document.querySelector('header.hero');
  const onScroll = () => {
    const y = window.scrollY;
    topbar.classList.toggle('scrolled', y > 6);
    if (hasHero) topbar.classList.toggle('over-hero', y < 6);
    // Sync browser chrome (status bar) colour with visible section
    if (themeColorEl && heroEl) {
      const overHero = y < heroEl.offsetHeight - 40;
      themeColorEl.content = overHero ? '#8b1a0a' : '#FAF8F6';
    }
    // Parallax: glow drifts down at 40% of scroll speed (appears to scroll up slower)
    if (heroGlow && !prefersReducedMotion) {
      heroGlow.style.transform = `translate(-50%, calc(-50% + ${y * 0.4}px))`;
    }
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

  /* ── Contact options swap ───────────────────────────── */
  const letsTalkBtn    = document.getElementById('lets-talk-btn');
  const contactContent = document.getElementById('contact-content');
  const contactOptions = document.getElementById('contact-options');

  const fadeOut = (el, cb) => {
    el.style.opacity = '0';
    setTimeout(() => { el.style.display = 'none'; if (cb) cb(); }, 400);
  };
  const fadeIn = (el) => {
    el.style.display = 'block';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.opacity = '1';
    }));
  };

  if (letsTalkBtn && contactContent && contactOptions) {
    letsTalkBtn.addEventListener('click', () => {
      fadeOut(contactContent, () => fadeIn(contactOptions));
    });
  }

  /* ── Contact form submission ─────────────────────────── */
  const contactForm   = document.getElementById('contact-form');
  const formStatus    = document.getElementById('form-status');
  const formSubmitBtn = document.getElementById('form-submit-btn');

  if (contactForm && formSubmitBtn) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!contactForm.checkValidity()) { contactForm.reportValidity(); return; }

      const textSpan = formSubmitBtn.querySelector('span');
      formSubmitBtn.disabled = true;
      textSpan.textContent   = t('form-sending');
      if (formStatus) { formStatus.textContent = ''; formStatus.className = 'form-status'; }

      try {
        const res = await fetch('https://formsubmit.co/ajax/maarten.stienstra@gmail.com', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            name:     contactForm.querySelector('[name="name"]').value,
            email:    contactForm.querySelector('[name="email"]').value,
            company:  contactForm.querySelector('[name="company"]').value,
            message:  contactForm.querySelector('[name="message"]').value,
            _subject: 'EA Partner — website inquiry',
          }),
        });
        if (!res.ok) throw new Error();
        contactForm.reset();
        if (formStatus) {
          formStatus.textContent = t('form-success');
          formStatus.className   = 'form-status success';
        }
      } catch {
        if (formStatus) {
          formStatus.textContent = t('form-error');
          formStatus.className   = 'form-status error';
        }
      } finally {
        formSubmitBtn.disabled = false;
        textSpan.textContent   = t('form-submit');
      }
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
  document.querySelectorAll('.panel, .card, .section-head').forEach(el => {
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
  });

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const raw = getComputedStyle(en.target).getPropertyValue('--reveal-delay').trim();
        const delay = prefersReducedMotion ? 0 : (parseInt(raw) || 0);
        setTimeout(() => en.target.classList.add('in'), delay);
        revealObs.unobserve(en.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

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
      btn.textContent = isOpen ? t('track-showless') : t('track-showmore');
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
