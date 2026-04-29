# EA Partner — Design System Reference

Generated from inspection of `style.css`, `main.js`, `index.html`,
`track-1.html`, `track-2.html`. Use this as the single source of truth
when building new pages.

---

## 1. Design Tokens (CSS custom properties)

All values live in `:root` in `style.css`. **Never use raw values inline.**

### Colour palette

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FAF8F6` | Page background (warm off-white) |
| `--base-rgb` | `30 8 4` | Warm dark — used with `/alpha` for opacity variants |
| `--text` | `rgb(var(--base-rgb) / .88)` | Body text |
| `--muted` | `rgb(var(--base-rgb) / .52)` | Secondary / subdued text |
| `--line` | `rgb(var(--base-rgb) / .09)` | Scrolled topbar border |
| `--panel` | `rgb(var(--base-rgb) / .025)` | Card fill tint |
| `--shadow` | `0 10px 24px …` | Card drop shadow |
| `--surface` | `rgb(var(--base-rgb) / .01)` | Lowest surface tint |
| `--surface-hover` | `rgb(var(--base-rgb) / .03)` | Hover surface tint |
| `--line-soft` | `rgb(var(--base-rgb) / .08)` | Section dividers, subtle borders |
| `--line-mid` | `rgb(var(--base-rgb) / .10)` | Standard card borders |
| `--line-strong` | `rgb(var(--base-rgb) / .14)` | Hover / active borders |
| `--ink` | `rgb(var(--base-rgb) / .18)` | Bullets, left-border accents |
| `--bg-rgb` | `250 248 246` | Background channels for opacity use |
| `--bg-alpha` | `rgb(250 248 246 / .98)` | Scrolled topbar background |
| `--brand` | `#5c0f07` | Deep garnet — headings, logo |
| `--hero-bg` | `#8b1a0a` | Hero section background |
| `--accent` | `#f1400b` | Vivid orange-red — CTAs, highlights |
| `--accent-rgb` | `241 64 11` | For `rgb(var(--accent-rgb) / alpha)` |
| `--warm` | `#F5E0C3` | Warm cream — hero text |
| `--warm-rgb` | `245 224 195` | For `rgb(var(--warm-rgb) / alpha)` |

### Layout

| Token | Value | Use |
|---|---|---|
| `--radius` | `18px` | Default border-radius (cards, panels) |
| `--radius-sm` | `9px` | Dropdown items, small elements |
| `--radius-md` | `14px` | Dropdown panels |
| `--radius-pill` | `999px` | Buttons, nav pill |
| `--max` | `1700px` | Max container width |
| `--topbar-h` | `64px` (JS-overridden to actual) | Topbar height offset for sections |

### Typography

| Token | Fonts |
|---|---|
| `--mono` | `ui-monospace, Helvetica` — labels, digits, code |
| `--sans` | `ui-sans-serif, system-ui, …` — body text (default) |
| `--serif` | Garamond / EB Garamond / Georgia — h1, h2, eyebrows (referenced by class name, not variable) |

---

## 2. Typography Scale

| Element | Font | Size | Weight | Colour |
|---|---|---|---|---|
| `h1` | Garamond serif | `clamp(34px, 2.8vw, 36px)` | 150 | `--brand` |
| `h2` | Garamond serif | `clamp(22px, 2.2vw, 32px)` | 300 | `--brand` |
| `.section-eyebrow` | Garamond serif italic | 14px | 400 | `--base-rgb / .32` |
| Body | System sans | `0.8125rem` | 400 | `--text` |
| `.sub` | System sans | body | 400 | `--muted`, max 72ch |
| `.lede` | System sans | body | 400 | `--muted` (hero: `--warm-rgb / .72`) |
| `.mono` / labels | `--mono` | 10–13px | 400 | `--muted` |
| Nav links | System sans | 13px | 400 | `--muted` |

---

## 3. Layout Components

### `.wrap`
```css
width: 100%; max-width: var(--max); margin: 0 auto; padding: 0 48px;
```
Mobile (`≤ 900px`): `padding: 0 18px`

### `section` (global)
```css
min-height: calc(100vh - var(--topbar-h));
display: flex; align-items: center;
padding: 120px 0;
border-top: 1px solid var(--line-soft);
```
Mobile: `padding: 80px 0; min-height: 100dvh`

### `.section-3col`
```css
display: grid; grid-template-columns: 0.55fr 2fr; gap: 96px;
```
Left column = `.section-label` (eyebrow + h2 + .sub).
Mobile: single column, gap 32px.

### `.two`
```css
display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
```
Mobile: single column.

### `.panel`
```css
border: 1px solid var(--line-mid); background: var(--bg);
border-radius: var(--radius); padding: 18px;
```

### `.card`
```css
grid-column: span 6; border: 1px solid var(--line-mid); background: var(--bg);
border-radius: var(--radius); padding: 18px; overflow: hidden;
```
Hover: `translateY(-2px)` + stronger border + shadow.

### `.btn`
```css
display: inline-flex; gap: 10px; padding: 11px 15px;
border-radius: var(--radius-pill); border: 1px solid var(--line-strong);
background: var(--surface); font-size: 14px;
```
Arrow `span:last-child` translates 3px right on hover.
Variant: `.btn.primary` — accent border + accent tint background.

---

## 4. Track-page Template Pattern

Both `track-1.html` and `track-2.html` share this shell (defined in `style.css`
under `/* TRACK PAGES — shared template */`):

```
<head>
  <link rel="stylesheet" href="style.css" />
  <style>/* diagram-specific CSS only */</style>
</head>
<body>
  .cursor
  .topbar#topbar  (identical HTML to homepage, links prefix with index.html)
  .mobile-overlay#mobileOverlay
  <main>
    .page-intro           (div, not section — topbar-h + 48px padding)
    .problems-section     (section — 4 question cards, .problems-grid 2×2)
    .viz-section          (div — diagram, border-top from shared CSS)
    <section>             (capabilities/layers, min-height: 100vh)
    <section#contact-track> (CTA)
  </main>
  <footer>
  <script src="main.js"></script>
</body>
```

Key shared classes (all in `style.css`):
- `.page-intro`, `.page-back` — intro block
- `.viz-section`, `.viz-grid` — diagram wrapper
- `.layer-grid` / `.cap-grid` — item grid (1fr 1fr, gap 40px 72px)
- `.layer-row` / `.cap-row` — item row (100px + 1fr)
- `.layer-digit` / `.cap-digit`, `.layer-name` / `.cap-name`, `.layer-body` / `.cap-body`

Diagram-specific CSS lives in a page-level `<style>` block:
- `track-1`: `.align-viz`, `.viz-label`, `.ai-node` + keyframes
- `track-2`: `.maturity-viz`, maturity-fill animations, `.maturity-legend`

---

## 5. Nav + Pill Mechanism (critical)

### HTML structure (topbar nav)
```html
<div class="topbar" id="topbar">
  <div class="wrap">
    <div class="topbar-inner">
      <a class="logo" href="…">…</a>
      <button class="hamburger" id="hamburger">…</button>
      <nav id="mainnav">
        <div class="nav-indicator" id="navIndicator"></div>
        <a href="#waarde"   data-section="waarde"   data-i18n="nav-value">Value</a>
        <div class="nav-item"> <!-- Services dropdown -->
          <a href="#diensten" data-section="diensten">…</a>
          <div class="nav-dropdown" role="menu">…</div>
        </div>
        <a href="#aanpak"  data-section="aanpak"   data-i18n="nav-approach">Approach</a>
        <a href="#over"    data-section="over"      data-i18n="nav-about">About</a>
        <a href="#contact" data-section="contact"   data-i18n="nav-contact">Contact</a>
      </nav>
    </div>
  </div>
</div>
```

### How the pill works (JS in `main.js`)

1. **`links`** = all `a[data-section]` elements inside `#mainnav`.
2. **`sections`** = those `data-section` values resolved as `document.getElementById()`.
3. **IntersectionObserver** watches those sections; when one crosses the viewport
   threshold (0.2–0.65, rootMargin `-20% 0px -60% 0px`), it calls
   `setActive(id)`.
4. **`setActive(id)`** adds `.active` class to the matching link, removes from
   others, then calls `moveIndicatorTo(activeLink)`.
5. **`moveIndicatorTo(link)`** reads the link's bounding rect relative to the nav
   and sets the `.nav-indicator` element's `width`, `height`, `top`,
   and `transform: translateX(…)`. Animated with `320ms cubic-bezier(.2,.9,.2,1)`.
6. **CSS** `nav:has(a.active) .nav-indicator { opacity: 1; }` — pill is
   invisible until there is an `.active` link.
7. **On init**: if no `#hash`, `moveIndicatorTo(links[0], true)` — starts at
   "Value". If there is a hash, `setActive(hash, { immediate: true })`.
8. **On language swap**: `moveIndicatorTo(activeLink, true)` runs while body is
   faded out (invisible jump, no flicker).
9. **On resize**: re-runs `moveIndicatorTo` on the active link.

### What happens on track pages (current)
Nav links use `href="index.html#section"` — no `data-section` attribute.
Therefore `links` is empty, `sections` is empty, no IntersectionObserver runs,
no `.active` class is set, pill stays hidden (`opacity: 0`).

### Key selectors
| Selector | Purpose |
|---|---|
| `a[data-section]` | Links that participate in scroll-spy |
| `a.active` | Active nav link (pill target) |
| `#navIndicator` | The moving pill element |
| `nav:has(a.active) .nav-indicator` | Shows pill |
| `.topbar.scrolled` | Topbar becomes opaque after 6px scroll |
| `.topbar.over-hero` | Inverts topbar colours over dark hero |

---

## 6. Mobile Nav

- Hamburger shown at `≤ 720px`. Desktop nav (`#mainnav`) hidden.
- `.mobile-overlay` full-screen, `position: fixed`, animated in/out.
- Items: Garamond 30px, stagger-in via `nth-child` transition-delays.
- Sub-links (track pages): `.overlay-sub-links` div with `.overlay-sub-link`
  children (20px Garamond, 0.72 opacity, arrow prefix).
- Language toggle (`.lang-toggle--mobile`) at bottom-left of overlay.

---

## 7. Language Toggle

- `data-i18n="key"` on elements → `innerHTML` set by `setLangContent()`.
- `data-i18n-ph="key"` on inputs → `placeholder` set.
- `document.title` updated via `page-title` key.
- `localStorage.lang` persists choice.
- Language swap applies a 180ms body fade (`body.lang-fade`) to hide
  layout reflow and indicator jump.

---

## 8. Scroll Reveal

`.reveal` class → `opacity: 0; transform: translateY(20px)`.
IntersectionObserver adds `.in` when element crosses threshold 0.08.
Optional `--reveal-delay` custom property staggers the transition.

---

## 9. Footer

```html
<footer>
  <div class="wrap">
    <div class="footer-row">
      <span class="mono">© <span id="year"></span> EA Partner</span>
      <div class="lang-toggle lang-toggle--desktop">…</div>
    </div>
  </div>
</footer>
```
`#year` is set to `new Date().getFullYear()` by `main.js`.

---

## 10. Adding a New Page — Checklist

1. Copy topbar + mobile-overlay block verbatim from a track page.
   - Nav links: `href="pagename.html"` for own-page links,
     `href="index.html#section"` for homepage anchors.
   - Remove `data-section` from nav links (or add new mechanism — see Migration Plan).
2. Copy footer verbatim.
3. Add `<script src="main.js"></script>` before `</body>`.
4. Use only design-token variables — no inline colours, sizes, or magic numbers.
5. `<section>` elements inherit full-viewport height automatically.
6. Add all user-facing text to `translations.en` and `translations.nl`
   in `main.js`; reference via `data-i18n`.
7. New CSS that could be reused on other pages → add to `style.css`
   under the relevant section. Page-specific CSS → page `<style>` block.
