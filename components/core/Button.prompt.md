**Button** — CORTEX's action element; `cyan` is the signature call-to-action, navy `primary` for solid dark actions, `outline`/`ghost` for placement on dark hero/CTA sections.

```jsx
<Button variant="cyan">Skatīt produktus →</Button>
<Button variant="primary">Sūtīt</Button>
<Button variant="secondary">Lejuplādēt</Button>
<Button variant="outline">Sazināties</Button>   {/* on dark only */}
```

Variants: `cyan` (default), `primary` (navy), `secondary` (navy outline), `outline` (white outline, on dark), `ghost` (faint outline, on dark), `white` (on color strips). Sizes: `sm` `md` `lg`. Use `as="a"` + `href` for links. Arrows (`→`) are written inline in the label, not as icons — consistent with the site.
