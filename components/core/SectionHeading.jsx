import React from "react";

/**
 * CORTEX SectionHeading — the eyebrow + title + subtitle block that
 * opens nearly every section on the site.
 * `onDark` recolors for navy/tech sections.
 */
export function SectionHeading({ label, title, subtitle, onDark = false, align = "left", style, ...rest }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === "center" ? "640px" : undefined, marginInline: align === "center" ? "auto" : undefined, ...style }} {...rest}>
      {label && (
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--fs-xs, 0.72rem)",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: onDark ? "rgba(255,255,255,0.4)" : "var(--cx-sky, #2196F3)",
            marginBottom: "var(--sp-md, 12px)",
          }}
        >
          {label}
        </div>
      )}
      {title && (
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--fs-section, clamp(1.8rem,3vw,2.5rem))",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.12,
            margin: 0,
            color: onDark ? "#fff" : "var(--cx-navy, #0F2D52)",
          }}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--fs-md, 1rem)",
            lineHeight: 1.72,
            marginTop: "var(--sp-md, 14px)",
            marginBottom: 0,
            maxWidth: "540px",
            marginInline: align === "center" ? "auto" : undefined,
            color: onDark ? "rgba(255,255,255,0.5)" : "var(--cx-tm, #546E7A)",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
