import React from "react";

/**
 * CORTEX Stat — big black number over a muted uppercase label.
 * Powers the hero stats strip and About page metrics.
 * `onDark` uses cyan numbers + faded labels for dark sections.
 */
export function Stat({ value, label, onDark = false, align = "center", style, ...rest }) {
  return (
    <div style={{ textAlign: align, ...style }} {...rest}>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 800,
          fontSize: "1.9rem",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: onDark ? "var(--cx-cyan, #00B4D8)" : "var(--cx-navy, #0F2D52)",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--fs-xs, 0.72rem)",
          textTransform: "uppercase",
          letterSpacing: "0.07em",
          marginTop: "5px",
          color: onDark ? "rgba(255,255,255,0.45)" : "var(--cx-tm, #546E7A)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
