**Input** — labelled text field. Hairline border, 3px sky focus ring; pass `error` to turn it red with a message, or `hint` for helper text.

```jsx
<Input label="E-pasts" type="email" placeholder="example@cortex.lv" />
<Input label="Tālrunis" error="Lūdzu ievadiet derīgu numuru" />
```

Standard HTML input props (`type`, `placeholder`, `required`, `value`, `onChange`) pass through.
