import React from "react";

/**
 * CORTEX Card — the surface primitive. White, hairline border,
 * soft navy-tinted shadow, lifts + cyan border on hover.
 * `tinted` swaps to the pale frost fill used on white sections.
 */
export function Card({ children, tinted = false, hover = true, padding, style, ...rest }) {
  const [h, setH] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: tinted ? "var(--cx-frost, #F0F8FF)" : "var(--cx-white, #fff)",
        border: "1.5px solid var(--cx-bd2, #E1F0FB)",
        borderRadius: "var(--r-xl, 16px)",
        padding: padding ?? "var(--sp-2xl, 36px)",
        boxShadow: "var(--shadow-sm)",
        transition: "transform var(--t-base,250ms), box-shadow var(--t-base,250ms), border-color var(--t-base,250ms)",
        ...(hover && h
          ? {
              transform: "translateY(-4px)",
              boxShadow: "var(--shadow-lg)",
              borderColor: "var(--cx-bd, #BBDEFB)",
            }
          : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
