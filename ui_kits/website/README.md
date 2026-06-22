# UI Kit — CORTEX Website (cortex.eu)

High-fidelity recreation of the CORTEX marketing site homepage.

## Run
Open `index.html`. It loads the design-system bundle (`_ds_bundle.js`), React, Babel and Lucide, then mounts the page.

## Files
- `index.html` — entry; assembles `Topbar`, `Nav`, `HomePage`, `Footer` and wires the language switch + nav dropdowns.
- `SiteChrome.jsx` — `Topbar` (contact + LV/RU/EN switch), sticky `Nav` (hover dropdowns, search, login CTA), `Footer` (5-column).
- `HomePage.jsx` — `Hero` (navy gradient + live monitoring dashboard mock + stats), `Solutions` (FeatureCard grid), `Catalog` (ProductCard grid), `DefendexStrip` (cloud-platform promo), `CTA`.

## Composes
`Button`, `Badge`, `Stat`, `SectionHeading`, `FeatureCard`, `ProductCard` from the design system. Product photos come from `assets/products/`.

## Source of truth
`sait/cortex/index.html` + `sait/cortex/css/styles.css`. Latvian is the primary UI language (RU/EN also supported on the live site).
