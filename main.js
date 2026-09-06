/* ============================================================
   main.js — The Collective site
   ============================================================ */
(function () {

  /* ── Translations ─────────────────────────────────────── */
  const translations = {
    en: {
      'page-title':          'The Collective | Strategy that reaches the shop floor',
      'nav-problem':         'Problem',
      'nav-howwethink':      'How we think',
      'nav-services':        'Services',
      'nav-proof':           'Proof',
      'nav-approach':        'Approach',
      'nav-about':            'About',
      'nav-contact':         'Contact',

      'hero-h1':             'Your strategy is clear.<br>Your organisation moves<br>like loose sand.',
      'hero-lede':           'We work with organizations where the plan, the blueprint and the people who fund and own the work have come apart. We put them back together, and we stay until it holds.',
      'hero-cta-secondary':  'How we think',

      /* ── Problem ──────────────────────────────────────── */
      'problem-eyebrow':     'You\'ll recognise it',
      'problem-h2':          'Why organisations stop progressing',
      'problem-p1':          'Whether you sit in the CEO, COO, CFO, CIO, CTO or transformation seat, the symptoms rhyme. Forty funded initiatives and no way to say which three move the strategy. Returns, replenishment and launches that nobody owns end to end. Shared platforms that never get capacity because every programme pulls for itself. A roadmap that is set, funded, and still stalls at every decision.',
      'problem-p2':          'The cause is the same in each seat: the <em class="accent">plan</em>, the <em class="accent">blueprint</em> and the <em class="accent">means</em> are held by different people who never see the whole. Objectives don\'t land anywhere they can be measured. The work that many initiatives depend on has no owner. Run and change compete for the same people, and nobody decides who wins.',
      'problem-p3':          'This isn\'t an IT question and it isn\'t a modelling exercise. It\'s how the organisation as a whole decides, changes and runs. We deliver no tool, no platform and no document. We deliver the movement on the result the objective was meant to move, and the proof that it moved.',

      /* ── How we think (static illustration) ──────────── */
      'stack-eyebrow':       'How we think',
      'stack-h2':            'Plan, Blueprint, Means in motion',
      'stack-sub':           'A plan needs to translate to the blueprint, the blueprint only works when the means deliver, while today\'s run and tomorrow\'s transformations have to be orchestrated side by side. We understand how.',
      'stack-01-title':      'Plan',
      'stack-01-subtitle':   'Why',
      'stack-01-line':       'Five to eight objectives, each with a result it must move and an owner who is measured on it. An objective that can\'t land anywhere it can be measured doesn\'t belong in the portfolio.',
      'stack-02-title':      'Blueprint',
      'stack-02-subtitle':   'Where and with what',
      'stack-02-line':       'The end-to-end flows where results are measured, and what those flows depend on together. Where many objectives lean on the same shared work, that is where the pressure is.',
      'stack-03-title':      'Means',
      'stack-03-subtitle':   'Who, how much, in what rhythm',
      'stack-03-line':       'Run and change compete for the same people. Persistent teams funded as capacity, owners on two axes, and one table where capacity is allocated by objective and by what\'s shared, on the retail calendar.',
      'stack-04-title':      'The full picture, harmonized',
      'stack-04-subtitle':   'All three, together',
      'stack-04-line':       'The plan, the blueprint and the means, seen as one system. This is what "in one motion" looks like: nothing moves without the other two moving with it.',

      /* ── Services ─────────────────────────────────────── */
      'services-eyebrow':    'What we offer',
      'services-h2':         'Services',
      'card-bestfor-label':  'Best for',

      'card1-title':         'Run and change, orchestrated',
      'card1-tagline':       'Stop the programme from becoming a second company.',
      'card1-bestfor':       'COOs and CIOs of retail and consumer organisations whose transformation builds what the line can\'t run, and whose shared platforms never get capacity.',
      'card1-li1':           'Who owns what, on two axes: temporary owners on the objectives that are live, permanent owners for the work everyone shares',
      'card1-li2':           'Funding that follows priorities: from projects to persistent capacity, allocated by objective and by what\'s shared across them',
      'card1-li3':           'One table that decides, on the retail calendar: peak, range cycles and budget round built in',

      'card2-title':         'Portfolio reset',
      'card2-tagline':       'Your portfolio, shortened to what moves the strategy.',
      'card2-bestfor':       'CFOs and CIOs at retail and consumer organisations heading into a budget round with too many initiatives and no defensible order.',
      'card2-li1':           'Every objective tied to the result it will be measured on, with that result measured before we start',
      'card2-li2':           'One view of which capabilities your initiatives are all quietly competing for',
      'card2-li3':           'A shorter list, sequenced, that you can defend to the board',

      'card3-title':         'Transformation architect, in the line',
      'card3-tagline':       'When it helps, one of us steps in to make the change stick.',
      'card3-bestfor':       'Transformation directors and CIOs at retail and consumer organisations with a programme where decisions are stuck, unclear or drifting.',
      'card3-li1':           'Diagnosis and delivery kept separate: we scope with you first, then decide together whether one of us steps in',
      'card3-li2':           'Every roadmap step traced to a decision, not a deadline',
      'card3-li3':           'A defined end date and a clean handover to your own people',

      'card4-title':         'Bringing two retail organisations into one',
      'card4-tagline':       'After the deal, one blueprint instead of two.',
      'card4-bestfor':       'CEOs, COOs and integration leads after a merger, acquisition or formula consolidation in retail or consumer.',
      'card4-li1':           'Two sets of flows and shared work mapped against each other: what merges, what stays, what stops',
      'card4-li2':           'Owners and funding for the combined organisation before the systems are touched',
      'card4-li3':           'The portfolio of integration work sequenced on the trading calendar, not the deal timeline',

      'landing-text':        'Depending on where you stand, we think along in connecting your plan to the blueprint of tomorrow — facilitating the right decisions, identifying the correct portfolio, the organisation\'s blueprint and orchestration to run and transform side-by-side, or guiding your current transformation programme.',

      /* ── Proof ────────────────────────────────────────── */
      'proof-eyebrow':       'Proof',
      'proof-h2':            'Use cases we\'re proud of',
      'proof-intro':         'We measure the result before we start and after we leave. Until client results can be shown here, these are illustrative examples of what that measurement looks like.',
      'proof-disclaimer':    'Illustrative example, not a client engagement',
      'proof-measured-label':'What was measured',
      'proof-moved-label':   'What moved',
      'proof1-situation':    'A returns process split across three systems and two teams, with no single owner. Customers waited while responsibility passed between them.',
      'proof1-measured':     'Average days from return received to refund issued',
      'proof1-moved':        '11 days → 4 days',
      'proof2-situation':    'A range decision that had to clear five committees before it reached the shop floor, each one adding its own delay. The calendar moved faster than the decision did.',
      'proof2-measured':     'Weeks from range decision to product on shelf',
      'proof2-moved':        '14 weeks → 9 weeks',
      'proof3-situation':    'A portfolio of 38 funded initiatives where most had a budget but no result anyone could point to. The board couldn\'t say which ones mattered.',
      'proof3-measured':     'Initiatives with a result, an owner and a measurement point defined',
      'proof3-moved':        '6 of 38 → 14 of 14',

      /* ── Approach ─────────────────────────────────────── */
      'approach-eyebrow':    'How we work',
      'approach-h2':         'Approach',
      'approach-sub':        'Every engagement follows the same rhythm: a sharp diagnostic, a clear blueprint, then close involvement during delivery. The content differs by track. The discipline doesn\'t.',
      'phase1-title':        'Diagnose',
      'phase1-subtitle':     'QuickScan · Maturity Audit',
      'phase1-body':         '<strong>No assumptions, no predefined answers.</strong> For transformation programmes: what is the goal, where does complexity sit, what is blocking progress, which architectural decisions are urgent? For EA functions: what is the current maturity? The output is a prioritised map of what needs to happen.',
      'phase2-title':        'Compose',
      'phase2-subtitle':     'Target State · Roadmap · Decisions',
      'phase2-body':         '<strong>Translate the diagnosis into a clear blueprint and executable strategy.</strong> Trade-offs get made, options get documented, a roadmap gets set, with guardrails not just milestones. Every artefact earns its place because it changes what someone does next. Decisions over documents.',
      'phase3-title':        'Steer',
      'phase3-subtitle':     'Embedded Partner · Delivery Support',
      'phase3-body':         '<strong>Architecture doesn\'t survive first contact with delivery unchanged.</strong> Steer is the embedded partner phase: guardrails, course corrections when the landscape shifts, and a thinking partner close enough to the work to catch drift before it becomes debt. Until the path forward stays obvious without us in the room.',

      /* ── About ────────────────────────────────────────── */
      'about-eyebrow':       'Who we are',
      'about-h2':            'About us',
      'founder1-role':       'Founder',
      'founder1-bio':        'Twenty years in enterprise architecture taught me how organisations actually fit together. The work I do now starts where that discipline stops: at who decides, who pays and who runs it. Everything I make has to be useful at the moment a decision is taken. Clear output, fast cycles, no model for its own sake. Close enough to commerce, supply chain, digital and finance to connect them when it matters.',
      'founder2-name':       'Kai Jacobse',
      'founder2-role':       'Founder',
      'founder2-bio':        'Experienced Transformation and Product & Technology leader with a record in driving change that strengthens business value, operational performance, and organisational agility. I specialise in leading complex transformation initiatives through Programs, Projects, and Adaptive Delivery models that enable faster learning cycles, rapid execution, and continuous improvement in increasingly fast-moving business environments.',
      'about-fitlabel':      'Where we typically work',
      'about-fit1':          'Retail and consumer organisations in active transformation',
      'about-fit2':          'Omnichannel, merchandising and supply chain, e-commerce, post-merger integration',
      'about-fit3':          'CEOs, COOs, CFOs and transformation directors who need a thinking partner, and the CIOs who have to make it work',

      /* ── Contact ──────────────────────────────────────── */
      'contact-h2':          'Let\'s talk!',
      'contact-sub':         'Whether it\'s connecting plans to an outcome based blueprint and orchestration mechanisms to orchestrate run and transform - we\'re happy to discuss any problem or idea.',
      'contact-cta':         'Let\'s talk',
      'contact-opts-eyebrow':'Get in touch',
      'contact-opts-h2':     'Contact',
      'contact-opts-sub':    'No preparation needed. Pick what works best for you.',
      'contact-msg-title':   'Message',
      'contact-msg-desc':    'Write it down, I\'ll reply within a day',
      'contact-call-title':  'Call',
      'contact-avail':       'Available Monday – Friday, 09:00 – 18:00 CET',
      'form-namelabel':      'Name',
      'form-emaillabel':     'Email',
      'form-companylabel':   'Company',
      'form-msglabel':       'Message',
      'ph-name':             'Your name',
      'ph-company':          'Your organisation',
      'ph-message':          'What\'s on your mind?',
      'form-submit':         'Send message',
      'form-sending':        'Sending…',
      'form-success':        'Message sent. We\'ll be in touch within a day.',
      'form-error':          'Something went wrong — try calling or emailing directly.',

      /* ── Footer ───────────────────────────────────────── */
      'footer-kvk':          'KvK [KVK]',
      'footer-city':         'Amsterdam',
      'footer-privacy':      'Privacy statement',
    },
    nl: {
      'page-title':          'The Collective | Strategie die de winkelvloer bereikt',
      'nav-problem':         'Probleem',
      'nav-howwethink':      'Hoe wij denken',
      'nav-services':        'Diensten',
      'nav-proof':           'Bewijs',
      'nav-approach':        'Aanpak',
      'nav-about':           'Over',
      'nav-contact':         'Contact',

      'hero-h1':             'Uw strategie is helder.<br>Uw organisatie beweegt<br>als los zand.',
      'hero-lede':           'Wij werken met organisaties waar het plan, de blauwdruk en de mensen die het werk financieren en bezitten uit elkaar zijn gegroeid. Wij brengen ze weer samen, en wij blijven totdat het standhoudt.',
      'hero-cta-secondary':  'Hoe wij denken',

      /* ── Problem ──────────────────────────────────────── */
      'problem-eyebrow':     'U herkent het',
      'problem-h2':          'Waarom organisaties stoppen met vooruitgaan',
      'problem-p1':          'Of u nu op de stoel van de CEO, COO, CFO, CIO, CTO of transformatiedirecteur zit, de symptomen rijmen. Veertig gefinancierde initiatieven en geen manier om te zeggen welke drie de strategie bewegen. Retouren, aanvulling en lanceringen die niemand end-to-end bezit. Gedeelde platforms die nooit capaciteit krijgen omdat elk programma voor zichzelf trekt. Een roadmap die vaststaat, gefinancierd is, en toch bij elke beslissing vastloopt.',
      'problem-p2':          'De oorzaak is in elke stoel hetzelfde: het <em class="accent">plan</em>, de <em class="accent">blauwdruk</em> en de <em class="accent">middelen</em> liggen bij verschillende mensen die nooit het geheel zien. Objectives landen nergens waar ze gemeten kunnen worden. Het werk waarvan veel initiatieven afhangen heeft geen eigenaar. Run en change strijden om dezelfde mensen, en niemand beslist wie wint.',
      'problem-p3':          'Dit is geen IT-vraagstuk en geen modelleeroefening. Het is hoe de organisatie als geheel beslist, verandert en draait. Wij leveren geen tool, geen platform en geen document. Wij leveren de beweging op het resultaat dat het objective moest bewegen, en het bewijs dat die bewoog.',

      /* ── Hoe wij denken (statische illustratie) ──────── */
      'stack-eyebrow':       'Hoe wij denken',
      'stack-h2':            'Plan, Blauwdruk, Middelen in beweging',
      'stack-sub':           'Een plan moet zich vertalen naar de blauwdruk, de blauwdruk werkt alleen als de middelen leveren, terwijl de run van vandaag en de transformaties van morgen naast elkaar georkestreerd moeten worden. Wij begrijpen hoe.',
      'stack-01-title':      'Plan',
      'stack-01-subtitle':   'Waarom',
      'stack-01-line':       'Vijf tot acht objectives, elk met een resultaat dat het moet bewegen en een eigenaar die erop wordt afgerekend. Een objective die nergens meetbaar landt, hoort niet in de portefeuille.',
      'stack-02-title':      'Blauwdruk',
      'stack-02-subtitle':   'Waar en waarmee',
      'stack-02-line':       'De end-to-end flows waarop resultaten gemeten worden, en wat die flows samen nodig hebben. Waar veel objectives op hetzelfde gedeelde werk leunen, zit de druk.',
      'stack-03-title':      'Middelen',
      'stack-03-subtitle':   'Wie, hoeveel, in welk ritme',
      'stack-03-line':       'Run en change strijden om dezelfde mensen. Vaste teams gefinancierd als capaciteit, eigenaars op twee assen, en één tabel waar capaciteit wordt toegewezen per objective en per gedeeld werk, op de retailkalender.',
      'stack-04-title':      'Het volledige beeld, samengebracht',
      'stack-04-subtitle':   'Alle drie, samen',
      'stack-04-line':       'Het plan, de blauwdruk en de middelen, gezien als één systeem. Dat is wat "in één beweging" betekent: niets beweegt zonder dat de andere twee meebewegen.',

      /* ── Diensten ─────────────────────────────────────── */
      'services-eyebrow':    'Wat wij bieden',
      'services-h2':         'Diensten',
      'card-bestfor-label':  'Geschikt voor',

      'card1-title':         'Run en change, op elkaar afgestemd',
      'card1-tagline':       'Voorkom dat het programma een tweede bedrijf wordt.',
      'card1-bestfor':       'COO\'s en CIO\'s van retail- en consumentenorganisaties wier transformatie bouwt wat de lijn niet kan draaien, en wier gedeelde platforms nooit capaciteit krijgen.',
      'card1-li1':           'Eigenaarschap op twee assen: tijdelijke eigenaars op de objectives die lopen, vaste eigenaars voor het werk dat iedereen deelt',
      'card1-li2':           'Financiering die prioriteiten volgt: van projecten naar vaste capaciteit, toegewezen per objective en per wat ze delen',
      'card1-li3':           'Eén tabel die beslist, op de retailkalender: piek, assortimentscycli en begrotingsronde ingebouwd',

      'card2-title':         'Portfolioreset',
      'card2-tagline':       'Uw portfolio, verkort tot wat de strategie beweegt.',
      'card2-bestfor':       'CFO\'s en CIO\'s bij retail- en consumentenorganisaties op weg naar een begrotingsronde met te veel initiatieven en geen verdedigbare volgorde.',
      'card2-li1':           'Elk objective gekoppeld aan het resultaat waarop het gemeten wordt, met dat resultaat gemeten voordat we beginnen',
      'card2-li2':           'Eén overzicht van welke capabilities uw initiatieven allemaal stilletjes beconcurreren',
      'card2-li3':           'Een korter lijstje, gesequenced, dat u kunt verdedigen bij de raad van bestuur',

      'card3-title':         'Transformatiearchitect, in de lijn',
      'card3-tagline':       'Als het helpt, stapt een van ons in om de verandering te laten beklijven.',
      'card3-bestfor':       'Transformatiedirecteuren en CIO\'s bij retail- en consumentenorganisaties met een programma waar beslissingen vastlopen, onduidelijk zijn of afdrijven.',
      'card3-li1':           'Diagnose en uitvoering gescheiden gehouden: we bepalen eerst samen de scope, dan beslissen we samen of een van ons instapt',
      'card3-li2':           'Elke roadmapstap herleid tot een beslissing, niet een deadline',
      'card3-li3':           'Een vaste einddatum en een schone overdracht aan uw eigen mensen',

      'card4-title':         'Twee retailorganisaties tot één maken',
      'card4-tagline':       'Na de deal, één blauwdruk in plaats van twee.',
      'card4-bestfor':       'CEO\'s, COO\'s en integratieleads na een fusie, overname of formuleconsolidatie in retail of consumentengoederen.',
      'card4-li1':           'Twee sets flows en gedeeld werk tegen elkaar afgezet: wat samenvoegt, wat blijft, wat stopt',
      'card4-li2':           'Eigenaars en financiering voor de gecombineerde organisatie voordat de systemen worden aangeraakt',
      'card4-li3':           'Het integratieportfolio gesequenced op de handelskalender, niet op de dealtijdlijn',

      'landing-text':        'Afhankelijk van waar u staat, denken wij mee in het verbinden van uw plan met de blauwdruk van morgen — door de juiste beslissingen te faciliteren, de juiste portefeuille te identificeren, de blauwdruk van de organisatie en de orchestratie om run en transform naast elkaar te laten lopen, of door uw huidige transformatieprogramma te begeleiden.',

      /* ── Bewijs ───────────────────────────────────────── */
      'proof-eyebrow':       'Bewijs',
      'proof-h2':            'Praktijkvoorbeelden waar we trots op zijn',
      'proof-intro':         'Wij meten het resultaat voordat we beginnen en nadat we vertrekken. Totdat klantresultaten hier getoond kunnen worden, zijn dit illustratieve voorbeelden van hoe die meting eruitziet.',
      'proof-disclaimer':    'Illustratief voorbeeld, geen klantopdracht',
      'proof-measured-label':'Wat werd gemeten',
      'proof-moved-label':   'Wat bewoog',
      'proof1-situation':    'Een retourproces verspreid over drie systemen en twee teams, zonder één eigenaar. Klanten wachtten terwijl de verantwoordelijkheid heen en weer ging.',
      'proof1-measured':     'Gemiddeld aantal dagen van ontvangen retour tot uitbetaalde terugbetaling',
      'proof1-moved':        '11 dagen → 4 dagen',
      'proof2-situation':    'Een assortimentsbeslissing die vijf comités moest passeren voordat die de winkelvloer bereikte, elk met zijn eigen vertraging. De kalender bewoog sneller dan de beslissing.',
      'proof2-measured':     'Weken van assortimentsbeslissing tot product in het schap',
      'proof2-moved':        '14 weken → 9 weken',
      'proof3-situation':    'Een portfolio van 38 gefinancierde initiatieven waarvan de meeste een budget hadden maar geen resultaat waar iemand naar kon wijzen. De raad van bestuur kon niet zeggen welke ertoe deden.',
      'proof3-measured':     'Initiatieven met een resultaat, een eigenaar en een meetpunt gedefinieerd',
      'proof3-moved':        '6 van 38 → 14 van 14',

      /* ── Aanpak ───────────────────────────────────────── */
      'approach-eyebrow':    'Hoe wij werken',
      'approach-h2':         'Aanpak',
      'approach-sub':        'Elke opdracht volgt hetzelfde ritme: een scherpe diagnose, een heldere blauwdruk, dan nauwe betrokkenheid tijdens de uitvoering. De inhoud verschilt per track. De discipline niet.',
      'phase1-title':        'Diagnose',
      'phase1-subtitle':     'QuickScan · Volwassenheidsaudit',
      'phase1-body':         '<strong>Geen aannames, geen vooraf bepaalde antwoorden.</strong> Voor transformatieprogramma\'s: wat is het doel, waar zit de complexiteit, wat blokkeert de voortgang, welke architectuurbeslissingen zijn urgent? Voor EA-functies: wat is de huidige volwassenheid? De uitkomst is een geprioriteerde kaart van wat er moet gebeuren.',
      'phase2-title':        'Componeer',
      'phase2-subtitle':     'Doelstaat · Roadmap · Beslissingen',
      'phase2-body':         '<strong>Vertaal de diagnose naar een heldere blauwdruk en uitvoerbare strategie.</strong> Afwegingen worden gemaakt, opties gedocumenteerd, een roadmap wordt vastgesteld, met vangrails en niet alleen mijlpalen. Elk artefact verdient zijn plek omdat het verandert wat iemand als volgende doet. Beslissingen boven documenten.',
      'phase3-title':        'Sturen',
      'phase3-subtitle':     'Ingebed Partner · Delivery Ondersteuning',
      'phase3-body':         '<strong>Architectuur overleeft het eerste contact met de uitvoering niet onveranderd.</strong> Sturen is de ingebedde partnerfase: vangrails, bijsturing wanneer het landschap verschuift, en een denkpartner dichtbij genoeg bij het werk om afdrijven te signaleren voordat het schuld wordt. Totdat de weg vooruit vanzelfsprekend blijft zonder ons in de kamer.',

      /* ── Over ─────────────────────────────────────────── */
      'about-eyebrow':       'Wie wij zijn',
      'about-h2':            'Over ons',
      'founder1-role':       'Oprichter',
      'founder1-bio':        'Twintig jaar in enterprise architectuur leerde mij hoe organisaties werkelijk in elkaar zitten. Het werk dat ik nu doe begint waar die discipline stopt: bij wie beslist, wie betaalt en wie het draait. Alles wat ik maak moet nuttig zijn op het moment dat een beslissing wordt genomen. Heldere output, snelle cycli, geen model om het model. Dicht genoeg bij commercie, supply chain, digitaal en finance om ze te verbinden wanneer het ertoe doet.',
      'founder2-name':       'Kai Jacobse',
      'founder2-role':       'Oprichter',
      'founder2-bio':        'Ervaren leider in Transformatie en Product & Technology met een trackrecord in het aansturen van verandering die bedrijfswaarde, operationele prestaties en organisatorische wendbaarheid versterkt. Ik ben gespecialiseerd in het leiden van complexe transformatietrajecten via Programma\'s, Projecten en Adaptive Delivery-modellen die snellere leercycli, snelle uitvoering en continue verbetering mogelijk maken in steeds sneller bewegende zakelijke omgevingen.',
      'about-fitlabel':      'Waar wij doorgaans werken',
      'about-fit1':          'Retail- en consumentenorganisaties in actieve transformatie',
      'about-fit2':          'Omnichannel, merchandising en supply chain, e-commerce, post-merger integratie',
      'about-fit3':          'CEO\'s, COO\'s, CFO\'s en transformatiedirecteuren die een denkpartner nodig hebben, en de CIO\'s die het moeten laten werken',

      /* ── Contact ──────────────────────────────────────── */
      'contact-h2':          'Laten we praten!',
      'contact-sub':         'Of het nu gaat om het verbinden van plannen met een resultaatgerichte blauwdruk en de orchestratiemechanismen om run en transform te orkestreren - we bespreken graag elk vraagstuk of idee.',
      'contact-cta':         'Laten we praten',
      'contact-opts-eyebrow':'Neem contact op',
      'contact-opts-h2':     'Contact',
      'contact-opts-sub':    'Geen voorbereiding nodig. Kies wat het beste voor u werkt.',
      'contact-msg-title':   'Bericht',
      'contact-msg-desc':    'Schrijf het op, wij reageren binnen een dag',
      'contact-call-title':  'Bellen',
      'contact-avail':       'Bereikbaar maandag – vrijdag, 09:00 – 18:00 CET',
      'form-namelabel':      'Naam',
      'form-emaillabel':     'E-mail',
      'form-companylabel':   'Bedrijf',
      'form-msglabel':       'Bericht',
      'ph-name':             'Uw naam',
      'ph-company':          'Uw organisatie',
      'ph-message':          'Wat speelt er?',
      'form-submit':         'Verstuur bericht',
      'form-sending':        'Verzenden…',
      'form-success':        'Bericht verzonden. Wij nemen binnen een dag contact op.',
      'form-error':          'Er is iets misgegaan — probeer te bellen of direct te mailen.',

      /* ── Footer ───────────────────────────────────────── */
      'footer-kvk':          'KvK [KVK]',
      'footer-city':         'Amsterdam',
      'footer-privacy':      'Privacyverklaring',
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

  /* ── Shared footer ───────────────────────────────────── */
  // Edit this template to update the footer on ALL pages at once.
  const FOOTER_HTML = `
    <div class="wrap">
      <div class="footer-row">
        <div class="footer-meta mono">
          <span>© <span id="year"></span> The Collective</span>
          <span class="footer-sep" aria-hidden="true">·</span>
          <span data-i18n="footer-kvk">KvK [KVK]</span>
          <span class="footer-sep" aria-hidden="true">·</span>
          <span data-i18n="footer-city">Amsterdam</span>
          <span class="footer-sep" aria-hidden="true">·</span>
          <a href="mailto:maarten.stienstra@gmail.com">maarten.stienstra@gmail.com</a>
          <span class="footer-sep" aria-hidden="true">·</span>
          <a href="tel:+31646281246">+31 (0)6 46281246</a>
        </div>
        <div class="footer-links">
          <a href="privacy/" data-i18n="footer-privacy">Privacy statement</a>
          <div class="lang-toggle lang-toggle--desktop">
            <button class="lang-btn active" data-lang-btn="en">English</button>
            <span class="lang-sep" aria-hidden="true">|</span>
            <button class="lang-btn" data-lang-btn="nl">Nederlands</button>
          </div>
        </div>
      </div>
    </div>`;

  document.querySelectorAll('[data-inject-footer]').forEach(el => {
    el.innerHTML = FOOTER_HTML;
  });

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
            _subject: 'The Collective — website inquiry',
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
    // Fine-grained low-end steps so a section taller than the tracking
    // band (its intersection ratio can never reach 0.2) still crosses a
    // threshold and gets picked up — without this, tall sections were
    // skipped entirely and the nav stayed stuck on the previous one.
    threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.35, 0.5, 0.65],
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

  /* ── Approach timeline ───────────────────────────────── */
  // The rail is drawn from scroll position, not on a timer. A timed
  // draw can only ever be right for one scroll speed: start it and the
  // reader is still on their way, so it finishes below the fold and
  // they arrive to a rail that is already complete. Tying it to scroll
  // means the rail advances as the reader does, at any speed, and each
  // dot lights up exactly when the leading edge reaches it.
  const phasesRow = document.querySelector('.phases-row');
  if (phasesRow) {
    const stages = [...phasesRow.querySelectorAll('.phase-block')];
    const verticalRail = window.matchMedia('(max-width: 720px)');
    const RAIL_MS = 1400; // must match the rail's transition in style.css

    // Give each stage the delay at which the rail's leading edge
    // reaches its dot. Measured rather than hardcoded so it holds at
    // any width, and in either orientation. offsetLeft/Top rather than
    // getBoundingClientRect: the stages are transformed while hidden,
    // which would skew a rect measurement.
    const timeStagesToRail = () => {
      stages.forEach(s => {
        const along = verticalRail.matches
          ? s.offsetTop  / phasesRow.offsetHeight
          : s.offsetLeft / phasesRow.offsetWidth;
        s.style.setProperty('--stage-delay', `${Math.round(along * RAIL_MS)}ms`);
      });
    };

    const run = () => {
      timeStagesToRail();
      phasesRow.classList.add('revealed');
      stages.forEach(s => s.classList.add('revealed'));
    };

    if (prefersReducedMotion) {
      run();
    } else {
      const railObs = new IntersectionObserver((entries) => {
        entries.forEach(en => {
          if (!en.isIntersecting) return;
          run();
          railObs.unobserve(en.target);
        });
        // Shrink the root's bottom edge so the draw starts once the
        // timeline is properly on screen. Left at the default it
        // triggers on a sliver at the very bottom of the viewport, and
        // the whole sequence plays out below the fold — the reader
        // then arrives to a rail that has already finished.
      }, { threshold: 0, rootMargin: '0px 0px -35% 0px' });
      railObs.observe(phasesRow);
    }
  }

  /* ── Init ─────────────────────────────────────────────── */
  const hash = (location.hash || '').replace('#', '');
  setTopbarHeight();

  const init = () => {
    const initial = (hash && document.getElementById(hash)) ? hash : null;
    // Only mark a section active when the page actually opens on one
    // (a deep link). Landing on the hero leaves the nav unmarked —
    // parking the indicator on the first link made Problem look
    // selected before the reader had reached it.
    if (initial) {
      setActive(initial, { immediate: true, moveIndicator: true });
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
