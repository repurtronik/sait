**FeatureCard** — icon tile for solution and app-feature grids. Navy rounded icon chip over a title and description; hover lifts with a cyan-tinted border. `onDark` switches to translucent cards with a cyan icon for navy "tech" sections.

```jsx
<FeatureCard
  icon={<i data-lucide="radio-tower"></i>}
  title="Objektu globālais monitorings"
  description="Centralizēts GSM/GPRS un UHF/VHF monitorings reāllaikā."
/>

<FeatureCard onDark icon={<i data-lucide="shield"></i>} title="UHF / VHF" description="Pašu retranslācijas tīkls." />
```

Icons: use Lucide (stroke 2, round caps) to match the site. Lay out in a `grid`.
