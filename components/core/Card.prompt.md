**Card** — the surface primitive: white fill, hairline border, soft navy-tinted shadow; on hover it lifts 4px and the border turns cyan-tinted. Use `tinted` when the card sits on a white section (it switches to the pale frost fill so it reads as a distinct surface).

```jsx
<Card>
  <h3>RT4-5GP</h3>
  <p>Universāls multifunkciju raidītājs</p>
</Card>

<Card tinted hover={false}>Static info panel</Card>
```

Default radius is 16px (`--r-xl`). Compose `Badge`, `Tag`, `Stat`, and `Button` inside.
