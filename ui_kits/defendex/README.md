# UI Kit — Defendex 2.0 (mobile app)

Recreation of the CORTEX **Defendex 2.0** monitoring app — a Flutter app for
object owners and PCO (central monitoring station) operators. Click-through.

## Run
Open `index.html`. Self-contained (React + Babel + Lucide + Android frame); does
**not** require the design-system bundle. Sign in advances Login → Event Archive;
the floating gear (or Settings link on login) opens Settings; SAVE shows a toast.

## Files
- `index.html` — entry; screen router inside an `AndroidDevice` frame.
- `DefendexApp.jsx` — `LoginScreen`, `EventArchive`, `SettingsScreen`, shared `AppBar`, `Field`, `GradBtn`, and the `DFX` palette.
- `android-frame.jsx` — Material-3 Android device bezel (starter component).

## Visual language (distinct from the website)
The app is Material/Flutter, not the marketing CSS: white surfaces on a pale
`#F7F9FC` background, sky-blue primary `#2196F3`, **gradient** action buttons
(`#42A5F5 → #1565C0`), outlined inputs with a leading tinted icon chip, rounded
14–16px cards with soft shadows. It still carries the CORTEX logo + brand blue.

## Source of truth
Real app screenshots in `assets/defendex/` (login, settings, event archive,
object dropdown). Server fields (IP `192.168.211.149`, port `8010`) are taken
verbatim from the captures.
