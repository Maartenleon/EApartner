/* ============================================================
   main.js — The Collective site
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
      'hero-h1':             'Clear direction<br>for organisations<br>in transformation.',
      'hero-lede':           'We bring coherence to complex organisations,<br>so your strategy becomes something you can build and deliver.',
      'hero-cta':            'View services',
      'value-eyebrow':       'Why The Collective',
      'value-h2':            'Every coherent organisation is held together by architecture most people never see. Most struggling ones show what happens when it isn\'t there.',
      'value-text1':         'Too many initiatives, too little focus. An IT landscape that tangles as the organisation grows. Strategy that doesn\'t reach delivery. Delivery that drifts without strategy. Reasonable local decisions that don\'t add up globally.',
      'value-text2':         'The need isn\'t more technology, talent, or effort. It\'s <strong>coherence</strong> — decisions that add up instead of cancelling out. That\'s the work of enterprise architecture.',
      'value-text3':         'Architecture sits close enough to strategy to shape decisions, and close enough to delivery to govern what gets built. Its job is to keep dependencies between strategy, capabilities, data, applications, and technology visible enough that the organisation can change deliberately, not discover its constraints too late. A discipline, not a document.',
      'value-text4':         'It shows up in two ways. <strong>Transformations need architecture to steer them.</strong> <strong>An architecture function needs to deliver decisions, not artefacts.</strong> Where you start depends on where you are.',
      'services-eyebrow':    'What we offer',
      'services-h2':         'Services',
      'services-sub':        'Architecture for organisations with complex transformations.',
      'track1-h3':           'Architecture for Transformation',
      'track1-p':            'Your transformation needs a spine: from strategy through capabilities, data, applications, and technology. Architecture that connects layers and enables decisions.',
      'track-showmore':      'Show more',
      'track-showless':      'Show less',
      'track1-fitline':      'Best for: Organisations mid-transformation where decisions are stuck, unclear, or drifting',
      'track1-li1':          'A clear map of where complexity sits and which decisions are urgent',
      'track1-li2':          'A layered target architecture that\'s built to last and executable',
      'track1-li3':          'A sequenced roadmap where every step traces to a decision, not a deadline',
      'track1-li4':          'Embedded guidance until the path forward stays obvious without us',
      'approach-eyebrow':    'How we work',
      'approach-h2':         'Approach',
      'approach-sub':        'Every engagement follows the same rhythm: a sharp diagnostic, a clear blueprint, then close involvement during delivery. The content differs by track. The discipline doesn\'t.',
      'phase1-title':        'Diagnose — 4 weeks',
      'phase1-subtitle':     'QuickScan · Maturity Audit',
      'phase1-body':         '<strong>No assumptions, no predefined answers.</strong> For transformation programmes: what is the goal, where does complexity sit, what is blocking progress, which architectural decisions are urgent? For EA functions: what is the current maturity? The output is a prioritised map of what needs to happen.',
      'phase2-title':        'Compose — 4 weeks',
      'phase2-subtitle':     'Target State · Roadmap · Decisions',
      'phase2-body':         '<strong>Translate the diagnosis into a clear blueprint and executable strategy.</strong> Trade-offs get made, options get documented, a roadmap gets set, with guardrails not just milestones. Every artefact earns its place because it changes what someone does next. Decisions over documents.',
      'phase3-title':        'Steer — ongoing',
      'phase3-subtitle':     'Embedded Partner · Delivery Support',
      'phase3-body':         '<strong>Architecture doesn\'t survive first contact with delivery unchanged.</strong> Steer is the embedded partner phase: guardrails, course corrections when the landscape shifts, and a thinking partner close enough to the work to catch drift before it becomes debt. Until the path forward stays obvious without us in the room.',
      'about-eyebrow':       'Who we are',
      'about-h2':            'About',
      'about-sub':           'Sharp collaborators, focused on delivery. Good listeners, effective communicators.',
      'about-role':          'Enterprise Architects',
      'about-bio':           'Most architecture work produces documents that inform, but don\'t decide. We work the other way: artefacts need to be useful at the moment a decision has to be made. Clear output. Fast cycles. No model for its own sake. Keep things minimal, keep the pace up, and stay close enough to business, product, data, and engineering to connect them when it matters, until the path forward is obvious.<br><br>TOGAF and ArchiMate certified. MSc in Enterprise IT Architecture. Academic rigour in service of practical reality.',
      'about-fitlabel':      'Where we typically work',
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
      'form-success':        'Message sent. We\'ll be in touch within a day.',
      'form-error':          'Something went wrong — try calling or emailing directly.',
      'contact-call-title':  'Call',
      'contact-avail':       'Available Monday – Friday, 09:00 – 18:00 CET',

      /* ── Track 1 ──────────────────────────────────────── */
      't1-hero-lede':        'This is enterprise architecture, done inside your transformation. It bridges direction and execution — and stays close to delivery so the bridge doesn\'t drift. Strategy, capabilities, data, applications, and technology, held coherent enough that decisions compound and modular enough that change doesn\'t ripple. The output isn\'t a model. It\'s the decisions your transformation needs next.',
      't1-problem-p1':       '<strong>Most transformations don\'t fail for lack of effort.</strong> They fail because reasonable decisions, made in different layers and different domains, stop adding up. Strategy doesn\'t reach delivery. Delivery drifts from strategy. Initiatives multiply, focus thins, and the landscape gets harder to change exactly when it most needs to.',
      't1-problem-p2':       'These are the moments enterprise architecture is for.',
      't1-q1-q':             'How do I add new systems without creating an integration spaghetti down the line?',
      't1-q1-a':             'Without architecture guardrails, every new system becomes a new integration point. We define integration principles, a canonical data model, and a target architecture that new systems slot into — before they\'re built, not after the damage is done.',
      't1-q2-q':             'How do I decide which tech initiatives to prioritise when everything feels urgent?',
      't1-q2-a':             'Most organisations have more initiatives than focus. We map your capability gaps to strategic goals and use that as the basis for sequencing — so every initiative you fund has a clear architectural reason for coming before the others.',
      't1-q3-q':             'Which of our processes are actually suitable for AI, and which ones aren\'t ready yet?',
      't1-q3-a':             'AI readiness is architectural: it depends on data quality, capability ownership, and integration maturity. We assess your landscape layer by layer and give you a clear picture of where agents can deliver value today — and where the foundational work comes first.',
      't1-q4-q':             'Every programme creates its own architecture — how do we get coherence without a central bottleneck?',
      't1-q4-a':             'When architecture decisions are made programme by programme, coherence only comes from luck or conflict. We establish shared principles and a reference architecture that programmes inherit — so alignment happens by design, not constant negotiation.',
      't1-approach-intro':   'Every engagement follows the same rhythm. Sharp diagnostic, clear blueprint, close involvement during delivery.',
      't1-phase1-title':     'Diagnose — 4 weeks',
      't1-phase1-sub':       'QuickScan',
      't1-phase1-body':      'No assumptions, no predefined answers. What is the goal of the transformation, where does complexity sit, what is blocking progress, which architectural decisions are urgent? The output is a prioritised map of what needs to happen.',
      't1-phase2-title':     'Compose — 4 weeks',
      't1-phase2-sub':       'Target State · Roadmap · Decisions',
      't1-phase2-body':      'Translate the diagnosis into a clear blueprint and executable strategy. Trade-offs get made, options get documented, a roadmap gets set with guardrails not just milestones. Every artefact earns its place because it changes what someone does next. Decisions over documents.',
      't1-phase3-title':     'Steer — ongoing',
      't1-phase3-sub':       'Embedded Partner · Delivery Support',
      't1-phase3-body':      'Architecture doesn\'t survive first contact with delivery unchanged. Steer is the embedded partner phase: guardrails, course corrections when the landscape shifts, and a thinking partner close enough to the work to catch drift before it becomes debt. Until the path forward stays obvious without us in the room.',
      't1-model-p1':         'Coherence has two axes. <strong>Vertically</strong>, each layer constrains and enables the one above and below — strategy that doesn\'t reach technology is wishful thinking; technology disconnected from strategy is debt waiting to happen. <strong>Horizontally</strong>, every domain fits the same model, or integration becomes the work instead of the outcome. AI and agents cut across all of it.',
      't1-model-p2':         'But coherence alone makes an organisation rigid. <strong>Modularity is the second discipline</strong> — parts designed to be replaced, repriced, or reorganised without rebuilding the whole. Architecture\'s job is to hold both: tight enough that decisions compound, loose enough that change doesn\'t cascade.',
      't1-layers-intro':     'Each layer carries a decision the organisation can\'t afford to leave implicit. The artefacts below are what carry those decisions — small, sharp, useful at the moment someone has to act.',
      't1-layer1':           '<em>The decision:</em> what this organisation will and won\'t do, structurally — including the principles that govern security, risk, and compliance before they become someone else\'s emergency.<br><em>The artefact:</em> architectural principles with real teeth, and a North Star that survives reorganisation.',
      't1-layer2':           '<em>The decision:</em> where to invest, where to consolidate, where to leave alone — and which value streams each capability serves.<br><em>The artefact:</em> a capability map with domain ownership, honest maturity scoring, and change prioritised by capability gaps rather than initiative momentum.',
      't1-layer3':           '<em>The decision:</em> who owns what, which system is the source of truth, and what "the customer" actually means across the organisation.<br><em>The artefact:</em> a conceptual data model with ownership, quality definitions, and the acceptance criteria AI needs to be reliable rather than confident-sounding.',
      't1-layer4':           '<em>The decision:</em> which systems stay, which go, which get rebuilt, and in what order — before the wrong sequence gets funded.<br><em>The artefact:</em> an application landscape that surfaces redundancy, integration complexity, and the right modernisation sequence.',
      't1-layer5':           '<em>The decision:</em> the foundational bets — cloud, data platform, integration layer — that constrain everything above for years.<br><em>The artefact:</em> a technology radar, build-vs-buy principles, and debt mapping that makes the right bets visible before they\'re irreversible.',
      't1-layer6':           '<em>The decision:</em> where autonomous action is sanctioned, what agents can access, trigger, and decide, and where human oversight is required.<br><em>The artefact:</em> an agentic operating model that runs across all five layers — making clear where AI compounds value and where it compounds risk.',
      't1-why-h2':           'Why work with us',
      't1-card1-title':      'Decision-focused',
      't1-card1-body':       'Every artefact earns its place because it changes what someone does next. No model for its own sake.',
      't1-card2-title':      'Fast cycles',
      't1-card2-body':       'Diagnostic in four weeks. Target architecture in four more. Ongoing involvement only as long as it\'s useful.',
      't1-card3-title':      'Close to delivery',
      't1-card3-body':       'Architecture that walks away from the work it set in motion is just expensive advice. We stay until the path forward is obvious without us in the room.',
      't1-card4-title':      'Independent',
      't1-card4-body':       'No vendor partnerships, no platform incentives, no team to upsell into the engagement. The advice serves the architecture, not the next sale.',
      't1-walkaway-p1':      'A target architecture tying strategy to technology through capabilities, data, and applications — coherent enough that decisions compound, modular enough that the next change doesn\'t require a rebuild. A sequenced roadmap where each step traces to a decision. Principles and guardrails that hold when no one is watching.',
      't1-walkaway-p2':      'Architecture that sets direction and walks away is just expensive advice. The work continues close to delivery — catching drift before it becomes debt, adjusting the target when the landscape genuinely shifts and refusing to when it hasn\'t, staying in the room until the path forward is obvious without us. Direction without presence is how transformations quietly lose their spine.',
      't1-faq-h2':           'Frequently asked questions',
      't1-faq1-q':           'Why a small, focused firm over a large one?',
      't1-faq1-a':           'Speed and continuity. Large firms sell you a partner and deliver a team that rotates. We show up ourselves, every meeting, and the conversation in week 12 builds on the conversation in week 1. For a transformation that needs architecture to steer, that continuity matters more than scale.',
      't1-faq2-q':           'What if our transformation already has architects?',
      't1-faq2-a':           'Good — most of our work is alongside existing architects rather than replacing them. The question is usually whether they have the time, the seniority, or the distance from delivery to make the decisions that need to be made. If they do, you don\'t need us. If they don\'t, we work with them, not over them.',
      't1-faq3-q':           'How long does an engagement typically last?',
      't1-faq3-a':           'Diagnostic: four weeks. Target architecture and roadmap: four to eight weeks more. Embedded involvement during delivery: as long as it\'s useful, never longer. Most engagements run three to nine months total. The goal is making ourselves unnecessary, not indispensable.',
      't1-faq4-q':           'What do you actually deliver?',
      't1-faq4-a':           'Decisions, carried by small artefacts: a target architecture, a roadmap traced to decisions, principles with real teeth, and ongoing course corrections during delivery. Not a binder. The deliverable is what the organisation can do after, not what it has on the shelf.',
      't1-faq5-q':           'How do we start?',
      't1-faq5-a':           'One conversation. No preparation needed. If there\'s a fit, we\'d typically begin with a four-week QuickScan: a structured diagnostic that gives you a prioritised map of what needs to happen, whether or not we work together afterwards.',
    },
    nl: {
      'page-title':          'Enterprise Architecture Consultancy | Focus & Helderheid',
      'nav-value':           'Waarde',
      'nav-services':        'Diensten',
      'nav-approach':        'Aanpak',
      'nav-about':           'Over',
      'nav-contact':         'Contact',
      'nav-track1':          'Architectuur voor Transformatie',
      'hero-h1':             'Heldere richting<br>voor organisaties<br>in verandering.',
      'hero-lede':           'Wij brengen samenhang in complexe organisaties,<br>zodat uw strategie iets wordt wat u kunt bouwen en uitvoeren.',
      'hero-cta':            'Bekijk diensten',
      'value-eyebrow':       'Waarom The Collective',
      'value-h2':            'Elke coherente organisatie wordt bijeengehouden door architectuur die de meeste mensen nooit zien. Bij de meeste organisaties die worstelen zie je wat er gebeurt als die er niet is.',
      'value-text1':         'Te veel initiatieven, te weinig focus. Een IT-landschap dat verstrikt raakt naarmate de organisatie groeit. Strategie die de uitvoering niet bereikt. Uitvoering die afdrijft zonder strategie. Redelijke lokale beslissingen die globaal niet optellen.',
      'value-text2':         'De behoefte is niet meer technologie, talent of inspanning. Het is <strong>samenhang</strong> — beslissingen die optellen in plaats van elkaar opheffen. Dat is het werk van enterprise architectuur.',
      'value-text3':         'Architectuur staat dicht genoeg bij de strategie om beslissingen te vormen, en dicht genoeg bij de uitvoering om te sturen wat er wordt gebouwd. Haar taak is de afhankelijkheden tussen strategie, capabilities, data, applicaties en technologie zichtbaar genoeg te houden zodat de organisatie bewust kan veranderen, niet haar beperkingen te laat ontdekken. Een discipline, niet een document.',
      'value-text4':         'Het manifesteert zich op twee manieren. <strong>Transformaties hebben architectuur nodig om ze te sturen.</strong> <strong>Een architectuurfunctie moet beslissingen leveren, geen artefacten.</strong> Waar u begint hangt af van waar u staat.',
      'services-eyebrow':    'Wat wij aanbieden',
      'services-h2':         'Diensten',
      'services-sub':        'Architectuur voor organisaties met complexe transformaties.',
      'track1-h3':           'Architectuur voor Transformatie',
      'track1-p':            'Uw transformatie heeft een ruggengraat nodig: van strategie via capabilities, data, applicaties en technologie. Architectuur die lagen verbindt en beslissingen mogelijk maakt.',
      'track-showmore':      'Meer tonen',
      'track-showless':      'Minder tonen',
      'track1-fitline':      'Geschikt voor: Organisaties midden in een transformatie waar beslissingen vastlopen, onduidelijk zijn of afdrijven',
      'track1-li1':          'Een helder overzicht van waar de complexiteit zit en welke beslissingen urgent zijn',
      'track1-li2':          'Een gelaagde doelarchitectuur die duurzaam en uitvoerbaar is',
      'track1-li3':          'Een gesequenced roadmap waarbij elke stap terugleidt naar een beslissing, niet een deadline',
      'track1-li4':          'Ingebedde begeleiding totdat de weg vooruit vanzelfsprekend is zonder ons',
      'approach-eyebrow':    'Hoe wij werken',
      'approach-h2':         'Aanpak',
      'approach-sub':        'Elke opdracht volgt hetzelfde ritme: een scherpe diagnose, een heldere blauwdruk, dan nauwe betrokkenheid tijdens de uitvoering. De inhoud verschilt per track. De discipline niet.',
      'phase1-title':        'Diagnose — 4 weken',
      'phase1-subtitle':     'QuickScan · Volwassenheidsaudit',
      'phase1-body':         '<strong>Geen aannames, geen vooraf bepaalde antwoorden.</strong> Voor transformatieprogramma\'s: wat is het doel, waar zit de complexiteit, wat blokkeert de voortgang, welke architectuurbeslissingen zijn urgent? Voor EA-functies: wat is de huidige volwassenheid? De uitkomst is een geprioriteerde kaart van wat er moet gebeuren.',
      'phase2-title':        'Componeer — 4 weken',
      'phase2-subtitle':     'Doelstaat · Roadmap · Beslissingen',
      'phase2-body':         '<strong>Vertaal de diagnose naar een heldere blauwdruk en uitvoerbare strategie.</strong> Afwegingen worden gemaakt, opties gedocumenteerd, een roadmap wordt vastgesteld, met vangrails en niet alleen mijlpalen. Elk artefact verdient zijn plek omdat het verandert wat iemand als volgende doet. Beslissingen boven documenten.',
      'phase3-title':        'Sturen — doorlopend',
      'phase3-subtitle':     'Ingebed Partner · Delivery Ondersteuning',
      'phase3-body':         '<strong>Architectuur overleeft het eerste contact met de uitvoering niet onveranderd.</strong> Sturen is de ingebedde partnerfase: vangrails, bijsturing wanneer het landschap verschuift, en een denkpartner dichtbij genoeg bij het werk om afdrijven te signaleren voordat het schuld wordt. Totdat de weg vooruit vanzelfsprekend blijft zonder ons in de kamer.',
      'about-eyebrow':       'Wie wij zijn',
      'about-h2':            'Over',
      'about-sub':           'Scherpe samenwerkingspartners, gericht op uitvoering. Goede luisteraars, effectieve communicatoren.',
      'about-role':          'Enterprise Architects',
      'about-bio':           'De meeste architectuurwerkzaamheden produceren documenten die informeren, maar niet beslissen. Wij werken andersom: artefacten moeten nuttig zijn op het moment dat een beslissing genomen moet worden. Heldere output. Snelle cycli. Geen model om het model. Houdt het minimaal, houdt het tempo hoog, en blijf dicht genoeg bij business, product, data en engineering om ze te verbinden wanneer het ertoe doet, totdat de weg vooruit vanzelfsprekend is.<br><br>TOGAF en ArchiMate gecertificeerd. MSc in Enterprise IT Architecture. Academische strengheid in dienst van praktische realiteit.',
      'about-fitlabel':      'Waar wij doorgaans werken',
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
      'contact-msg-desc':    'Schrijf het op, wij reageren binnen een dag',
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
      'contact-call-title':  'Bellen',
      'contact-avail':       'Bereikbaar maandag – vrijdag, 09:00 – 18:00 CET',

      /* ── Track 1 ──────────────────────────────────────── */
      't1-hero-lede':        'Dit is enterprise architectuur, uitgevoerd binnen uw transformatie. Het verbindt richting en uitvoering — en blijft dicht bij de uitvoering zodat de brug niet afdrijft. Strategie, capabilities, data, applicaties en technologie, coherent genoeg zodat beslissingen optellen en modulair genoeg zodat verandering niet doorwerkt. De uitkomst is geen model. Het zijn de beslissingen die uw transformatie als volgende nodig heeft.',
      't1-problem-p1':       '<strong>De meeste transformaties mislukken niet bij gebrek aan inspanning.</strong> Ze mislukken doordat redelijke beslissingen, genomen in verschillende lagen en domeinen, ophouden samen te tellen. Strategie bereikt de uitvoering niet. Uitvoering drijft af van strategie. Initiatieven vermenigvuldigen zich, focus verdunt en het landschap wordt moeilijker te veranderen op precies het moment dat dat het hardst nodig is.',
      't1-problem-p2':       'Dit zijn de momenten waarvoor enterprise architectuur bestaat.',
      't1-q1-q':             'Hoe voeg ik nieuwe systemen toe zonder dat het landschap op termijn een spaghetti wordt?',
      't1-q1-a':             'Zonder architectuurbewakers wordt elk nieuw systeem een nieuw integratiepunt. Wij definiëren integratieprincipes, een canoniek datamodel en een doelarchitectuur waaraan nieuwe systemen moeten voldoen — voordat ze gebouwd worden, niet nadat de schade is aangericht.',
      't1-q2-q':             'Hoe beslis ik welke tech-initiatieven ik prioriteer als alles urgent voelt?',
      't1-q2-a':             'De meeste organisaties hebben meer initiatieven dan focus. Wij koppelen uw capability-hiaten aan strategische doelen en gebruiken dat als basis voor sequencing — zodat elk initiatief dat u financiert een duidelijke architectuurmatige reden heeft om voor de anderen te komen.',
      't1-q3-q':             'Welke van onze processen zijn eigenlijk geschikt voor AI, en welke zijn er nog niet klaar voor?',
      't1-q3-a':             'AI-gereedheid is architecturaal: het hangt af van datakwaliteit, eigenaarschap van capabilities en integratievolwassenheid. Wij beoordelen uw landschap laag voor laag en geven u een helder beeld van waar agents vandaag waarde kunnen leveren — en waar het fundamentele werk eerst komt.',
      't1-q4-q':             'Elk programma creëert zijn eigen architectuur — hoe krijgen we samenhang zonder centraal knelpunt?',
      't1-q4-a':             'Wanneer architectuurbeslissingen programma voor programma worden genomen, komt samenhang alleen door geluk of conflict. Wij stellen gedeelde principes en een referentiearchitectuur vast die programma\'s overnemen — zodat afstemming door ontwerp plaatsvindt, niet door constante onderhandeling.',
      't1-approach-intro':   'Elke opdracht volgt hetzelfde ritme. Scherpe diagnose, heldere blauwdruk, nauwe betrokkenheid tijdens de uitvoering.',
      't1-phase1-title':     'Diagnose — 4 weken',
      't1-phase1-sub':       'QuickScan',
      't1-phase1-body':      'Geen aannames, geen vooraf bepaalde antwoorden. Wat is het doel van de transformatie, waar zit de complexiteit, wat blokkeert de voortgang, welke architectuurbeslissingen zijn urgent? De uitkomst is een geprioriteerde kaart van wat er moet gebeuren.',
      't1-phase2-title':     'Componeer — 4 weken',
      't1-phase2-sub':       'Doelstaat · Roadmap · Beslissingen',
      't1-phase2-body':      'Vertaal de diagnose naar een heldere blauwdruk en uitvoerbare strategie. Afwegingen worden gemaakt, opties gedocumenteerd, een roadmap vastgesteld met vangrails niet alleen mijlpalen. Elk artefact verdient zijn plek omdat het verandert wat iemand als volgende doet. Beslissingen boven documenten.',
      't1-phase3-title':     'Sturen — doorlopend',
      't1-phase3-sub':       'Ingebed Partner · Delivery Ondersteuning',
      't1-phase3-body':      'Architectuur overleeft het eerste contact met de uitvoering niet onveranderd. Sturen is de ingebedde partnerfase: vangrails, bijsturing wanneer het landschap verschuift, en een denkpartner dichtbij genoeg bij het werk om afdrijving te signaleren voordat het schuld wordt. Totdat de weg vooruit vanzelfsprekend blijft zonder ons in de kamer.',
      't1-model-p1':         'Samenhang heeft twee assen. <strong>Verticaal</strong> beperkt en activeert elke laag de lagen erboven en eronder — strategie die de technologie niet bereikt is wishful thinking; technologie die losstaat van strategie is schuld die op de loer ligt. <strong>Horizontaal</strong> past elk domein in hetzelfde model, anders wordt integratie het werk in plaats van de uitkomst. AI en agents doorkruisen dit alles.',
      't1-model-p2':         'Maar samenhang alleen maakt een organisatie rigide. <strong>Modulariteit is de tweede discipline</strong> — onderdelen ontworpen om te worden vervangen, hernoemd of gereorganiseerd zonder het geheel te herbouwen. De taak van architectuur is beide te bewaren: strak genoeg zodat beslissingen optellen, los genoeg zodat verandering niet doorwerkt.',
      't1-layers-intro':     'Elke laag bevat een beslissing die de organisatie zich niet kan veroorloven impliciet te laten. De artefacten hieronder zijn wat die beslissingen draagt — klein, scherp, nuttig op het moment dat iemand ernaar moet handelen.',
      't1-layer1':           '<em>De beslissing:</em> wat deze organisatie structureel wel en niet zal doen — inclusief de principes die beveiliging, risico en compliance besturen voordat ze iemands anders noodgeval worden.<br><em>Het artefact:</em> architectuurprincipes met echte tanden en een North Star die reorganisaties overleeft.',
      't1-layer2':           '<em>De beslissing:</em> waar te investeren, waar te consolideren, waar met rust te laten — en welke waardestromen elke capability bedient.<br><em>Het artefact:</em> een capability-kaart met domein-eigenaarschap, eerlijke volwassenheidsscores en verandering geprioriteerd op capability-hiaten in plaats van initiatief-momentum.',
      't1-layer3':           '<em>De beslissing:</em> wie wat bezit, welk systeem de source of truth is, en wat "de klant" daadwerkelijk betekent in de hele organisatie.<br><em>Het artefact:</em> een conceptueel datamodel met eigenaarschap, kwaliteitsdefinities en de acceptatiecriteria die AI nodig heeft om betrouwbaar te zijn in plaats van zelfverzekerd klinkend.',
      't1-layer4':           '<em>De beslissing:</em> welke systemen blijven, welke verdwijnen, welke worden herbouwd en in welke volgorde — voordat de verkeerde volgorde gefinancierd wordt.<br><em>Het artefact:</em> een applicatielandschap dat redundantie, integratiecomplexiteit en de juiste modernisatievolgorde blootlegt.',
      't1-layer5':           '<em>De beslissing:</em> de fundamentele keuzes — cloud, dataplatform, integratielaag — die jarenlang alles erboven beperken.<br><em>Het artefact:</em> een technology radar, build-vs-buy principes en schuld-mapping die de juiste keuzes zichtbaar maken voordat ze onomkeerbaar zijn.',
      't1-layer6':           '<em>De beslissing:</em> waar autonome actie gesanctioneerd is, wat agents kunnen benaderen, triggeren en beslissen, en waar menselijk toezicht vereist is.<br><em>Het artefact:</em> een agentisch operatiemodel dat alle vijf lagen doorloopt — dat duidelijk maakt waar AI waarde versterkt en waar het risico versterkt.',
      't1-why-h2':           'Waarom met ons werken',
      't1-card1-title':      'Beslissingsgericht',
      't1-card1-body':       'Elk artefact verdient zijn plek omdat het verandert wat iemand als volgende doet. Geen model om het model.',
      't1-card2-title':      'Snelle cycli',
      't1-card2-body':       'Diagnose in vier weken. Doelarchitectuur in vier meer. Ingebedde betrokkenheid alleen zolang die nuttig is.',
      't1-card3-title':      'Dicht bij de uitvoering',
      't1-card3-body':       'Architectuur die wegloopt van het werk dat ze op gang heeft gebracht is alleen duur advies. Wij blijven totdat de weg vooruit vanzelfsprekend is zonder ons in de kamer.',
      't1-card4-title':      'Onafhankelijk',
      't1-card4-body':       'Geen leverancierspartnerships, geen platformprikkels, geen team om de opdracht in te upsellen. Het advies dient de architectuur, niet de volgende verkoop.',
      't1-walkaway-p1':      'Een doelarchitectuur die strategie verbindt met technologie via capabilities, data en applicaties — coherent genoeg zodat beslissingen optellen, modulair genoeg zodat de volgende verandering geen herbouw vereist. Een gesequenced stappenplan waarbij elke stap terugleidt naar een beslissing. Principes en vangrails die standhouden als niemand kijkt.',
      't1-walkaway-p2':      'Architectuur die richting geeft en dan vertrekt is alleen duur advies. Het werk gaat door dicht bij de uitvoering — afdrijving opsporen voordat het schuld wordt, het doel aanpassen wanneer het landschap echt verschuift en weigeren wanneer dat niet zo is, in de kamer blijven totdat de weg vooruit vanzelfsprekend is zonder ons. Richting zonder aanwezigheid is hoe transformaties stilletjes hun ruggengraat verliezen.',
      't1-faq-h2':           'Veelgestelde vragen',
      't1-faq1-q':           'Waarom een klein, gefocust bureau in plaats van een groot?',
      't1-faq1-a':           'Snelheid en continuïteit. Grote bureaus verkopen u een partner en leveren een team dat roteert. Wij komen zelf opdagen, elke meeting, en het gesprek in week 12 bouwt voort op het gesprek in week 1. Voor een transformatie die architectuur nodig heeft om te sturen, telt die continuïteit zwaarder dan schaal.',
      't1-faq2-q':           'Wat als onze transformatie al architecten heeft?',
      't1-faq2-a':           'Goed — de meeste van onze opdrachten zijn naast bestaande architecten, niet als vervanging. De vraag is meestal of ze de tijd, senioriteit of afstand van de uitvoering hebben om de beslissingen te nemen die genomen moeten worden. Als ze dat hebben, hebt u ons niet nodig. Als ze dat niet hebben, werken wij met hen mee, niet over hen heen.',
      't1-faq3-q':           'Hoe lang duurt een opdracht doorgaans?',
      't1-faq3-a':           'Diagnose: vier weken. Doelarchitectuur en roadmap: vier tot acht weken meer. Ingebedde betrokkenheid tijdens de uitvoering: zolang het nuttig is, nooit langer. De meeste opdrachten duren drie tot negen maanden totaal. Het doel is onszelf overbodig maken, niet onmisbaar.',
      't1-faq4-q':           'Wat levert u eigenlijk op?',
      't1-faq4-a':           'Beslissingen, gedragen door kleine artefacten: een doelarchitectuur, een roadmap herleid naar beslissingen, principes met echte tanden en doorlopende bijsturing tijdens de uitvoering. Geen map. Het resultaat is wat de organisatie daarna kan doen, niet wat ze op de plank heeft staan.',
      't1-faq5-q':           'Hoe beginnen we?',
      't1-faq5-a':           'Één gesprek. Geen voorbereiding nodig. Als er een match is, beginnen we doorgaans met een vier-weken QuickScan: een gestructureerde diagnose die u een geprioriteerde kaart geeft van wat er moet gebeuren, of we daarna wel of niet samenwerken.',
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

  /* ── Shared contact section ──────────────────────────── */
  // Injected into any element with data-inject-contact before translations
  // run, so data-i18n attributes are picked up automatically.
  // Edit this template to update the contact section on ALL pages at once.
  const CONTACT_SECTION_HTML = `
    <div class="wrap">
      <div id="contact-content">
        <h2 class="reveal" style="--reveal-delay: 0ms" data-i18n="contact-h2">
          Ready to talk enterprise architecture?
        </h2>
        <p class="sub reveal" style="--reveal-delay: 120ms" data-i18n="contact-sub">
          Whether it's steering a transformation or building an EA function that delivers — one focused conversation is often enough to find the way forward.
        </p>
        <button class="btn reveal" id="lets-talk-btn" style="--reveal-delay: 240ms">
          <span data-i18n="contact-cta">Let's talk</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <div id="contact-options">
        <div class="section-3col">
          <div class="section-label">
            <p class="section-eyebrow" data-i18n="contact-opts-eyebrow">Get in touch</p>
            <h2 data-i18n="contact-opts-h2">Contact</h2>
            <p class="sub" data-i18n="contact-opts-sub">No preparation needed. Pick what works best for you.</p>
          </div>
          <div class="contact-choice-row">
            <div class="contact-choice contact-choice--static">
              <div class="contact-choice-header">
                <span class="contact-choice-title" data-i18n="contact-msg-title">Message</span>
                <span class="contact-choice-desc" data-i18n="contact-msg-desc">Write it down, we'll reply within a day</span>
              </div>
              <form id="contact-form" novalidate class="contact-form-inline">
                <div class="form-row">
                  <div class="form-field">
                    <label for="f-name" data-i18n="form-namelabel">Name</label>
                    <input type="text" id="f-name" name="name" autocomplete="name" required data-i18n-ph="ph-name">
                  </div>
                  <div class="form-field">
                    <label for="f-email" data-i18n="form-emaillabel">Email</label>
                    <input type="email" id="f-email" name="email" placeholder="your@email.com" autocomplete="email" required>
                  </div>
                </div>
                <div class="form-field">
                  <label for="f-company" data-i18n="form-companylabel">Company</label>
                  <input type="text" id="f-company" name="company" autocomplete="organization" data-i18n-ph="ph-company">
                </div>
                <div class="form-field">
                  <label for="f-message" data-i18n="form-msglabel">Message</label>
                  <textarea id="f-message" name="message" rows="4" required data-i18n-ph="ph-message"></textarea>
                </div>
                <div class="form-submit-row">
                  <button type="submit" class="btn" id="form-submit-btn">
                    <span data-i18n="form-submit">Send message</span><span aria-hidden="true">→</span>
                  </button>
                  <span class="form-status" id="form-status" aria-live="polite"></span>
                </div>
              </form>
            </div>
            <div class="contact-choice contact-choice--static">
              <div class="contact-choice-header">
                <span class="contact-choice-title" data-i18n="contact-call-title">Call</span>
              </div>
              <a href="tel:+31646281246" class="contact-phone">+31 (0)6 46281246</a>
              <p class="contact-availability" data-i18n="contact-avail">Available Monday – Friday, 09:00 – 18:00 CET</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  document.querySelectorAll('[data-inject-contact]').forEach(el => {
    el.innerHTML = CONTACT_SECTION_HTML;
  });

  /* ── Shared approach section (Track 1) ──────────────── */
  // Edit this template to update the Approach section on track-1.html.
  // To add Track 2, duplicate with APPROACH_TRACK2_HTML + data-inject-approach="track2".
  const APPROACH_TRACK1_HTML = `
    <div class="wrap">
      <div class="section-3col">
        <div class="section-label reveal">
          <p class="section-eyebrow" data-i18n="approach-eyebrow">How we work</p>
          <h2 data-i18n="approach-h2">Approach</h2>
          <p class="sub" style="margin-top:16px;" data-i18n="t1-approach-intro">Every engagement follows the same rhythm. Sharp diagnostic, clear blueprint, close involvement during delivery.</p>
        </div>
        <div class="phases-row">
          <div class="phase-block reveal" data-phase-num="01">
            <p class="phase-label">01</p>
            <h3 class="phase-title" data-i18n="t1-phase1-title">Diagnose — 4 weeks</h3>
            <p class="phase-subtitle" data-i18n="t1-phase1-sub">QuickScan</p>
            <p class="phase-body" data-i18n="t1-phase1-body">No assumptions, no predefined answers. What is the goal of the transformation, where does complexity sit, what is blocking progress, which architectural decisions are urgent? The output is a prioritised map of what needs to happen.</p>
          </div>
          <div class="phase-block reveal" data-phase-num="02">
            <p class="phase-label">02</p>
            <h3 class="phase-title" data-i18n="t1-phase2-title">Compose — 4 weeks</h3>
            <p class="phase-subtitle" data-i18n="t1-phase2-sub">Target State · Roadmap · Decisions</p>
            <p class="phase-body" data-i18n="t1-phase2-body">Translate the diagnosis into a clear blueprint and executable strategy. Trade-offs get made, options get documented, a roadmap gets set with guardrails not just milestones. Every artefact earns its place because it changes what someone does next. Decisions over documents.</p>
          </div>
          <div class="phase-block reveal" data-phase-num="03">
            <p class="phase-label">03</p>
            <h3 class="phase-title" data-i18n="t1-phase3-title">Steer — ongoing</h3>
            <p class="phase-subtitle" data-i18n="t1-phase3-sub">Embedded Partner · Delivery Support</p>
            <p class="phase-body" data-i18n="t1-phase3-body">Architecture doesn't survive first contact with delivery unchanged. Steer is the embedded partner phase: guardrails, course corrections when the landscape shifts, and a thinking partner close enough to the work to catch drift before it becomes debt. Until the path forward stays obvious without me in the room.</p>
          </div>
        </div>
      </div>
    </div>`;

  document.querySelectorAll('[data-inject-approach="track1"]').forEach(el => {
    el.innerHTML = APPROACH_TRACK1_HTML;
  });

  /* ── Shared footer ───────────────────────────────────── */
  // Edit this template to update the footer on ALL pages at once.
  const FOOTER_HTML = `
    <div class="wrap">
      <div class="footer-row">
        <span class="mono">© <span id="year"></span> The Collective</span>
        <div class="lang-toggle lang-toggle--desktop">
          <button class="lang-btn active" data-lang-btn="en">English</button>
          <span class="lang-sep" aria-hidden="true">|</span>
          <button class="lang-btn" data-lang-btn="nl">Nederlands</button>
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
