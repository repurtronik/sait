**ProductCard** — the catalog tile from cortex.eu. A product photo under a navy gradient with the model name + flag badge on top, then title, blurb, and spec `Tag`s. Hovers lift 5px with a cyan-tinted border.

```jsx
<ProductCard
  model="RT4-5GP/4"
  title="GSM/GPRS/LTE Raidītājs"
  description="1×SIM, 2×IP, Paradox/NX/DSC iekšā."
  image="assets/products/RT4-5GP.jpg"
  badge="Populārs"
  tags={["GSM/LTE", "4G", "Paradox/NX/DSC"]}
  href="/catalog.html"
/>
```

Place in a 3-up `grid` with 20px gap. Composes `Badge` and `Tag`.
