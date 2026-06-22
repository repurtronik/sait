# CORTEX Design System

A design system for **CORTEX** (legal name **SIA KORTEKS**) — a Latvian
manufacturer of professional security and monitoring electronics, founded in
**1992** in Rīga. CORTEX designs and builds the full stack of alarm-monitoring
technology: GSM/GPRS/LTE and UHF/VHF object transmitters, PCO base stations,
the *Win SC* operator software, and the *Defendex 2.0* cloud monitoring
platform with its mobile app. Equipment protects **10 000+ objects** across the
Baltics; the company positions on reliability ("−40 to +85 °C, Dual SIM,
backup power"), being **made in Latvia**, and **24/7 support**.

> Signāls. Objekts. Kontrole. — *Signal. Object. Control.*

## Sources this was built from
- **Company sites:** `https://178.105.90.227/about.html`, `https://www.cortex.eu/par-mums/par-kompaniju.html` (live site: cortex.eu)
- **Codebase (read-only, mounted):** `sait/` — primary is `sait/cortex/` ("Website 2.0" modernization). Key files: `sait/cortex/css/styles.css` (the unified stylesheet this system is lifted from), `sait/cortex/index.html`, `about.html`, `mobile.html`, `defendex.html`, `DEVELOPER_GUIDE.md`, `README.md`.
- **Defendex app screenshots:** `sait/defendex/photo_*.jpg` → copied to `assets/defendex/`.
- **Logo:** `uploads/logo.jpg` and `sait/cortex/img/logo.png` → `assets/logo.png`.
- **Other:** `sait/Defendex_2.0_Prezentacija_LV_*.pptx` (LV product decks — not yet mined).

Two products are represented: the **marketing website** (cortex.eu) and the
**Defendex 2.0 mobile app**. They share the brand mark and blue palette but use
two different visual idioms — see Visual Foundations.

---

## CONTENT FUNDAMENTALS

**Languages.** Primary UI language is **Latvian (LV)**; Russian (RU) and English
(EN) are fully supported and switchable. Latvian uses diacritics — always render
them correctly (ā ē ī ū š č ž ņ ķ ļ ģ): *Apsardze, monitorings, raidītāji,
risinājumi, lejuplādēt, sazināties.*

**Voice.** Confident, technical, plainspoken — an engineering company talking to
installers and operators, not consumers. It leads with capability and proof
("Vairāk nekā 30 gadi", "10 000+ objektu"), not hype. No exclamation marks, no
slogans beyond the terse hero line.

**Person.** Third-person about the company ("CORTEX nodrošina…", "CORTEX iekārtas
aizsargā…"); imperative second-person for actions ("Skatīt produktus",
"Sazināties", "Sūtīt", "Lejuplādēt"). "Mēs" ("we") appears in About/values
("Kas mūs virza", "Mēs esam šeit").

**Casing.** Sentence case for headings and body. **Eyebrow labels are UPPERCASE**
with wide tracking ("RISINĀJUMI", "KATALOGS", "TEHNOLOĢIJAS"). Product model
codes are technical and exact: `RT4-5GP/4`, `RT4-5GL/4`, `RS-4000`, `RS-63`,
`ABAS-15`, `CU-GSM27`, `Win SC`, `Defendex 2.0`. Firmware as `V51.xx`.

**Numbers & units.** Latvian thousands use a thin/normal space: `10 000+`.
Temperature `−40…+85°C`. Frequencies `139–174 MHz`, `433 MHz`, `GSM/GPRS/LTE`,
`UHF/VHF`. Stats are short and punchy: `25+`, `24/7`, `1992`, `3` (Baltic states).

**Microcopy patterns.** CTAs often end with a trailing arrow written in the label
(`Skatīt produktus →`, `Viss katalogs →`) — it is text, not an icon. Spec chips
are compact tech attributes (`GSM/LTE`, `Dual SIM`, `Paradox/NX/DSC`). Status
words: `Apsardzē` (armed), `Noņemts no apsardzes` (disarmed), `Trauksme` (alarm),
`Uzmanību` (attention), `Zems akumulators` (low battery), `Live`.

**Emoji.** Not used in product UI or marketing copy. The only emoji-like glyphs
are country flags in the app's language picker and a small ✓ checkmark in feature
lists. Do not introduce decorative emoji.

---

## VISUAL FOUNDATIONS

**Palette.** A cool, technical blue system. Deep **navy `#0F2D52`** is the
authority/brand color (headings, dark surfaces); **cyan `#00B4D8`** is the
signature accent for CTAs and highlights; **sky `#2196F3`** drives interaction
(eyebrow labels, links, focus). **Blue `#1565C0`** sits between. The logo's
**green dot `#1FA637`** is used only in the mark — never as a UI accent. Status:
success green `#2E7D32`, warning amber `#D97706`, danger red `#DC2626`. Neutrals
are blue-tinted: page background **frost `#F0F8FF`**, tinted surface **ice
`#E3F2FD`**, borders `#BBDEFB`/`#E1F0FB`, text `#1A1A2E`, muted slate `#546E7A`.

**Type.** **Outfit** for everything (400–800); **DM Mono** (400/500) for
technical details — timestamps, IP/port, model codes, live data. Display
headings are heavy **800** with tight negative tracking (−0.03em hero, −0.025em
sections) and line-height ~1.1. Body is 400 at 1.6–1.75 line-height. Eyebrows
are 700, uppercase, 0.12em tracking, sky-blue.

**Layout.** Max content width **1280px**, centered, 48px horizontal gutters.
Sections breathe at ~84px vertical padding. 8-pt spacing scale (4→84). Grids:
2-up solutions, 3-up catalog, 5-column footer.

**Backgrounds.** Light sections on frost/white. Dark sections (hero, CTA, tech,
footer) use **navy gradients** (`grad-hero` 150°, `grad-cta` 130°) overlaid with
a faint **52px grid texture** (`rgba(255,255,255,.022)` lines) and a soft radial
cyan glow bleeding from a corner. No photographic hero; product photos appear in
catalog tiles under a navy gradient scrim with a corner cyan radial.

**Cards.** White fill, **1.5px** hairline border (`#E1F0FB`), 12–16px radius,
soft navy-tinted shadow (`shadow-sm`). On hover they **lift 4–5px**, deepen the
shadow, and the border turns cyan-tinted. "Tinted" cards swap to the frost fill
when placed on white. No left-accent-border cards.

**Buttons.** Pill-free, 8px radius. `cyan` (signature CTA, navy text, md shadow),
`primary` (navy), `secondary` (navy outline), `outline`/`ghost` (white/faint
outline for dark sections), `white` (on color strips). Hover **lifts 2px**; cyan
gains a cyan glow (`0 8px 24px rgba(0,180,216,.4)`); active resets the lift.
Disabled = 50% opacity.

**Motion.** Quiet and functional. Transitions 150/250/350ms ease-in-out.
Dropdowns slide-down + fade. Live indicators use a slow blink (`●`) and a gentle
pulse. Scroll reveals fade/slide-up. No bounces, no parallax, nothing playful.

**Borders / focus.** Hairline 1px, card 1.5px, 3px accent edges (nav underline,
dropdown top edge). Focus = sky border + 3px `rgba(33,150,243,.18)` ring.

**Transparency & blur.** On dark surfaces, glass panels: `rgba(255,255,255,.05–.06)`
fills, hairline white borders, `backdrop-filter: blur(12–16px)` — used for the
hero dashboard mock and stats strip.

**Imagery vibe.** Product photography is neutral/technical (devices on white);
in tiles it's cooled by a navy gradient + cyan radial so it reads on-brand.

**Defendex app idiom (separate).** The mobile app is Material/Flutter, not the
marketing CSS: white cards on pale `#F7F9FC`, sky-blue primary `#2196F3`,
**gradient** action buttons, outlined inputs with a leading tinted icon chip,
14–16px rounded cards, soft shadows, full-width primary actions. Keep these two
idioms distinct — don't apply marketing gradients to app screens or vice versa.

---

## ICONOGRAPHY

The site uses **inline line-style SVG icons**: `fill:none`, `stroke:currentColor`,
**stroke-width 2**, round caps/joins, 24×24 viewBox — i.e. the **Lucide / Feather**
visual language. There is **no custom icon font or sprite** in the codebase.

- **In this system:** load **Lucide** from CDN
  (`https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`), render with
  `<i data-lucide="name"></i>` then `lucide.createIcons()`. This is a faithful
  match to the originals — *flagged as a CDN substitution for the codebase's
  hand-inlined SVGs, which were equivalent Feather/Lucide-style paths.*
- **Common glyphs:** `radio-tower`, `network`, `shield`/`shield-check`, `monitor`,
  `search`, `arrow-left`, `refresh-cw`, `settings`, `map-pin`, `filter`,
  `calendar`, `radio`, `server`, `code`, `user`, `lock`, `log-in`, `save`.
- **Icon chips:** marketing feature icons sit in a 48px **navy** rounded square
  (white stroke); on dark "tech" sections, a translucent cyan-bordered chip with
  cyan stroke. The app uses a 40px **ice-tinted** chip with sky stroke.
- **Emoji:** only country flags in the app language picker; a text ✓ in feature
  lists. The About page used a few emoji in certificate cards on the live
  site — prefer Lucide (`shield-check`, `badge-check`, `globe`) instead.
- **Unicode glyphs as icons:** `●` (live/status dot), `▾` (dropdown caret),
  `→` (inline in CTA labels), `✓` (feature checks).

Do not hand-draw new SVG icons or generate images — reuse Lucide and the copied
brand assets.

---

## Index / manifest

**Root**
- `styles.css` — global entry (imports only). Consumers link this one file.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skills wrapper.

**Tokens** (`tokens/`, all imported by `styles.css`)
- `fonts.css` — Outfit + DM Mono (Google Fonts). · `colors.css` · `typography.css` · `spacing.css` (spacing, radius, borders, shadows, motion, z-index).

**Components** (`components/`) — React primitives (`.jsx` + `.d.ts` + `.prompt.md`; namespace `window.CORTEXDesignSystem_78fec2`)
- `core/`: `Button`, `Badge`, `Tag`, `Card`, `Input`, `Stat`, `SectionHeading` — `core.card.html`
- `marketing/`: `ProductCard`, `FeatureCard` — `marketing.card.html`

**UI kits** (`ui_kits/`)
- `website/` — cortex.eu homepage recreation (`index.html`, `SiteChrome.jsx`, `HomePage.jsx`).
- `defendex/` — Defendex 2.0 mobile app (`index.html`, `DefendexApp.jsx`, `android-frame.jsx`).

**Foundations** (`guidelines/`) — specimen cards for the Design System tab:
colors (brand/semantic/neutrals/dark), type (display/body/mono/weights),
spacing (scale/radius/shadows), brand (logo light/dark).

**Assets** (`assets/`) — `logo.png`, `logo-inv.png`, `og-image.jpg`,
`products/` (6 device photos), `defendex/` (8 app screenshots).

**Starting points** — Buttons & Card (core), ProductCard (marketing), the
website homepage, and the Defendex app.

## Notes / open items
- Fonts load via Google Fonts `@import` (the families the live site already uses); no self-hosted `@font-face` binaries are bundled.
- Icons are Lucide via CDN, substituting for the codebase's equivalent hand-inlined Feather/Lucide-style SVGs.
- The two LV Defendex `.pptx` decks were not mined; no slide template was requested, so none was created.
