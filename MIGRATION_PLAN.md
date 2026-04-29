# EA Partner — Migration Plan: Hub-and-Spoke

**Status:** Awaiting approval before any HTML/CSS changes.

---

## 1. New Pages

| File | Content source | Template |
|---|---|---|
| `approach.html` | `#aanpak` section from `index.html` | Track-page shell |
| `about.html` | `#over` section from `index.html` | Track-page shell |
| `contact.html` | `#contact` section from `index.html` | Track-page shell |
| `insights.html` | New empty page | Track-page shell |

All four inherit the track-page template: same topbar, mobile overlay,
footer, `main.js`, design tokens, and `section` rules.

---

## 2. Content Moves

### `approach.html`
- **Move:** full `.section-3col` block from `#aanpak` (eyebrow, h2, sub,
  three `.phase-block` elements with all `data-i18n` attributes).
- **Wrap in:** `section` (inherits min-height: 100vh) or `<main>` with
  `.page-intro` + the phases section, depending on visual result.
- **No new text.** i18n keys `approach-eyebrow`, `approach-h2`,
  `approach-sub`, `phase1-*`, `phase2-*`, `phase3-*` stay in `main.js` as-is.

### `about.html`
- **Move:** full `.section-3col` block from `#over` (photo, bio, fit-grid,
  LinkedIn link).
- Mark expansion points with `<!-- TODO: extend bio -->`.
- i18n keys `about-*` stay as-is.

### `contact.html`
- **Move:** the full `#contact` section content (`#contact-content` button
  + `#contact-options` with form and call block).
- The two-state interaction (Let's talk → options reveal) travels with it —
  the relevant JS in `main.js` already guards with `if (letsTalkBtn …)`.
- i18n keys `contact-*`, `form-*`, `ph-*` stay as-is.

### `insights.html`
- No content move. Static placeholder only:
  - Page intro: "Insights" heading.
  - One `<section>` with a "Coming soon" note.
  - `<!-- TODO: article list goes here -->` marker.

### `index.html` — what remains / changes

| Section | Change |
|---|---|
| Hero | **Unchanged** |
| Value (`#waarde`) | **Unchanged** |
| Services (`#diensten`) | **Unchanged** |
| Approach (`#aanpak`) | Replaced with teaser: 1–2 sentences from `approach-sub` + three phase names (no body text) + `.btn` "How I work →" to `approach.html`. Keep `id="aanpak"` on the element for existing anchor links. |
| About (`#over`) | Replaced with teaser: photo thumbnail + 2–3 sentences from `about-bio` + `.btn` "More about Maarten →" to `about.html`. Keep `id="over"`. |
| Contact (`#contact`) | Replaced with compact CTA: `contact-h2` heading + phone number + primary `.btn` "Get in touch →" to `contact.html`. Keep `id="contact"`. |

Existing anchors `#aanpak`, `#over`, `#contact` **remain on the homepage
teasers** so no external links break. The `id` attributes move to the
teaser wrappers, not removed.

---

## 3. Navigation Changes

### Desktop nav (both `index.html` and all sub-pages)

| Item | href | Notes |
|---|---|---|
| Value | `#waarde` (homepage) / `index.html#waarde` (subpages) | Unchanged |
| Services ▾ | dropdown | Unchanged; sub-items → track pages |
| Approach | `approach.html` | Currently `index.html#aanpak` |
| About | `about.html` | Currently `index.html#over` |
| **Insights** | `insights.html` | **New item** |
| Contact | `contact.html` | Currently `index.html#contact` |

### Mobile overlay
Same items in the same order. No scroll-spy; items are direct page links.

### i18n keys needed (additions to `main.js`)
- `'nav-insights'` → EN: `"Insights"`, NL: `"Inzichten"`
  (or `<!-- TODO: NL translation -->` if preferred)

---

## 4. Nav Pill Behaviour — New Logic

### Problem with current system
The pill is driven by `IntersectionObserver` on `[data-section]` elements.
This works only on `index.html` where those sections exist. On subpages,
`links` is empty and the pill is permanently hidden.

### Proposed new approach

**Two modes, one `main.js`:**

**Mode A — Homepage (`index.html`)**
- Scroll-spy is **disabled**. The `IntersectionObserver` is not created.
- The pill shows no active item (indicator stays `opacity: 0`) while the
  user scrolls through the homepage content sections.
- **Rationale:** With Approach, About, and Contact moving to their own pages,
  the homepage will have fewer anchors. More importantly, a pill that chases
  the user while they browse a short teaser page looks restless. Absence of
  the pill on the homepage is the cleanest choice — it matches the
  pattern used on any page without a matching nav item (e.g., an article page).
- The `[data-section]` attributes **can be kept** on homepage nav links for
  smooth-scroll behaviour; just the active-state/pill logic is disabled.

**Mode B — All subpages (approach, about, contact, insights, track-1, track-2)**
- Pill moves to the nav item whose `href` matches the current page filename.
- Detection: `document.body.dataset.page` — add `data-page="approach"` etc.
  to `<body>` on each page. `main.js` reads this on load.
- `setActive()` is called once on init with the matched page id; no observer.
- Services dropdown items (track-1, track-2): the **Services** nav link gets
  the active state (pill sits on Services) since the dropdown items are not
  direct nav-level links.

**Implementation sketch (main.js change):**
```js
// Determine active item from body data attribute (subpages)
// or skip scroll-spy (homepage)
const pageId = document.body.dataset.page; // e.g. "approach", "track1"

if (pageId) {
  // Map page ids to nav data-section values
  const pageNavMap = {
    'approach': 'aanpak',
    'about':    'over',
    'contact':  'contact',
    'insights': 'insights',
    'track1':   'diensten',  // services dropdown
    'track2':   'diensten',
  };
  const navId = pageNavMap[pageId];
  if (navId) setActive(navId, { immediate: true, moveIndicator: true });
  // No IntersectionObserver created
} else {
  // Homepage: create observer but do NOT call setActive on scroll
  // (scroll-spy disabled; pill stays hidden)
}
```

Nav links on subpages also need `data-section` attributes matching the map
above so `setActive` can find and mark them:
- `<a href="approach.html" data-section="aanpak" …>`

This requires adding `data-section` back to nav links on subpages.
Alternatively, `setActive` can be adapted to match by `href` instead of
`data-section` — either works.

---

## 5. Track-page CTA Updates

In `track-1.html` and `track-2.html`:
- `href="index.html#contact"` → `href="contact.html"` on all CTA buttons.
- Add secondary link `<a class="btn" href="approach.html">How I work →</a>`
  below the primary CTA in `#contact-track`.

---

## 6. Risks

| Risk | Mitigation |
|---|---|
| **Broken anchors** — existing external links or bookmarks to `index.html#aanpak`, `#over`, `#contact` | Keep `id` attributes on homepage teaser wrappers. Anchors still resolve. |
| **i18n on new pages** — `setLangContent` runs on load and applies all translations present in DOM | No risk if all text uses `data-i18n`. Missing NL keys fall back to EN via `translations.en[key]` fallback in `t()`. Mark gaps with `<!-- TODO: NL translation -->`. |
| **`#contact-content` / `#contact-options` JS** — the Let's talk reveal uses element IDs hardcoded in `main.js` | Both elements travel to `contact.html` intact. `main.js` guards with `if (letsTalkBtn …)` — no error on pages without it. |
| **Phase block reveal animation** — driven by `document.querySelectorAll('.phase-block')` in `main.js` | Works on any page that contains `.phase-block` elements. No change needed. |
| **`#diensten` SVG scroll-trigger** | Stays on homepage, no risk. |
| **`#waarde` SVG scroll-trigger** | Stays on homepage, no risk. |
| **Pill flicker on page load** | `setActive` with `immediate: true` fires before first paint completes. Indicator starts hidden (`opacity: 0`), fades in with `.15s ease` — no flicker. |
| **SEO** — content moves off homepage | GitHub Pages is not indexed at scale; low risk. Add `<link rel="canonical">` to subpages if needed later. |
| **`data-section` on homepage nav links** | Smooth-scroll JS uses `a[href^="#"]`, not `a[data-section]`. Keeping or removing `data-section` does not affect smooth scroll. Keeping it keeps the code path consistent. |

---

## 7. Open Questions for Your Review

1. **Insights nav position:** Should "Insights" appear between "About" and
   "Contact", or after "Contact"? The plan above puts it before Contact.

2. **Homepage approach teaser:** Should the three phase names (Diagnose /
   Architect / Steer) be shown as a simple three-item list, or as a condensed
   version of the current phase-block cards (with just title + subtitle, no
   body text)?

3. **Homepage about teaser:** Which 2–3 sentences from the bio should be the
   teaser? Or should I pick the opening sentence and the credentials line?

4. **Contact page — two-state interaction:** Currently the homepage contact
   section starts with a "Let's talk" button that reveals the form. On its
   own page this feels unnecessary — should I skip the first state and go
   directly to the form + call options layout? Or keep the two-state flow?

5. **`approach.html` layout:** The three phase blocks currently live inside
   a `.section-3col` on the homepage (label left, phases right). On the
   dedicated page, should they stay in this layout, or should the phases
   be the primary content with the label becoming a `.page-intro` block
   (matching the track-page pattern)?

6. **`about.html` layout:** Same question — keep `.section-3col`, or use
   `.page-intro` + a full-width about section?

---

## 8. File Change Summary (after approval)

**New files:** `approach.html`, `about.html`, `contact.html`, `insights.html`,
`DESIGN_SYSTEM.md` (already created), `MIGRATION_PLAN.md` (this file).

**Modified files:**
- `index.html` — teaser replacements for approach/about/contact sections;
  nav updated; `data-page` removed (homepage has no data-page).
- `track-1.html` — nav links updated; CTA href updated; secondary link added.
- `track-2.html` — nav links updated; CTA href updated; secondary link added.
- `main.js` — pill logic refactored (page-based vs scroll-spy); Insights
  i18n key added.
- `style.css` — no structural changes expected; possibly minor additions
  for teaser-specific layouts if needed.
