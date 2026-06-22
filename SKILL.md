---
name: cortex-design
description: Use this skill to generate well-branded interfaces and assets for CORTEX (SIA KORTEKS) — a Latvian manufacturer of professional security & monitoring systems — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping the CORTEX marketing website and the Defendex 2.0 monitoring app.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Brand:** CORTEX / SIA KORTEKS, Rīga, est. 1992. Professional alarm-monitoring electronics. Primary language **Latvian** (LV); RU/EN supported.
- **Two idioms:** the marketing **website** (navy + cyan, Outfit, dark gradient sections) and the **Defendex 2.0 mobile app** (Material/Flutter, white cards, sky-blue, gradient buttons). Keep them distinct.
- **Tokens:** link `styles.css`. Colors `--cx-navy #0F2D52`, `--cx-cyan #00B4D8`, `--cx-sky #2196F3`; fonts Outfit + DM Mono.
- **Components:** React primitives under `components/` (namespace `window.CORTEXDesignSystem_78fec2`). See each `*.prompt.md`.
- **UI kits:** `ui_kits/website/` and `ui_kits/defendex/` — full screen recreations to copy from.
- **Icons:** Lucide via CDN (`<i data-lucide="…">`), stroke-width 2.
- **Assets:** `assets/` — logo, product photos, app screenshots.

See `readme.md` → CONTENT FUNDAMENTALS, VISUAL FOUNDATIONS, ICONOGRAPHY for the full rules.
