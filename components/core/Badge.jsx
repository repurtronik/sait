import React from "react";

/**
 * CORTEX Badge — small uppercase status pill.
 * Used for "Populārs", "Dual SIM · 4G", live/operational markers.
 * `tone` picks the color; `dot` prefixes a status dot.
 */
export function Badge({ children, tone = "cyan", dot = false, style, ...rest }) {
  const tones = {
    cyan:    { bg: "var(--cx-cyan, #00B4D8)", fg: "var(--cx-navy, #0F2D52)" },
    sky:     { bg: "#93C5FD", fg: "var(--cx-navy, #0F2D52)" },
    indigo:  { bg: "#A5B4FC", fg: "var(--cx-navy, #0F2D52)" },
    soft:    { bg: "#38BDF8", fg: "var(--cx-navy, #0F2D52)" },
    success: { bg: "rgba(46,125,50,0.14)", fg: "var(--cx-success, #2E7D32)" },
    warning: { bg: "rgba(217,118,6,0.14)", fg: "var(--cx-warning, #D97706)" },
    danger:  { bg: "rgba(220,38,38,0.12)", fg: "var(--cx-danger, #DC2626)" },
    onDark:  { bg: "rgba(0,180,216,0.14)", fg: "var(--cx-cyan-soft, #67E8F9)" },
  };
  const t = tones[tone] || tones.cyan;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        background: t.bg,
        color: t.fg,
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-xs, 0.72rem)",
        fontWeight: 800,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        padding: "3px 10px",
        borderRadius: "var(--r-full, 9999px)",
        lineHeight: 1.4,
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ fontSize: "0.5em", lineHeight: 1 }}>●</span>}
      {children}
    </span>
  );
}
