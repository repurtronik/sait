import React from "react";

/**
 * CORTEX Button — the brand's primary action element.
 * Variants mirror the site's button set: cyan (signature CTA),
 * primary (navy), secondary/outline (bordered), ghost (on dark), white.
 */
export function Button({
  children,
  variant = "cyan",
  size = "md",
  as = "button",
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: "9px 18px", fontSize: "0.82rem" },
    md: { padding: "13px 28px", fontSize: "0.92rem" },
    lg: { padding: "16px 34px", fontSize: "1rem" },
  };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--sp-sm, 8px)",
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    lineHeight: 1,
    border: "none",
    borderRadius: "var(--r-md, 8px)",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    width: fullWidth ? "100%" : "auto",
    opacity: disabled ? 0.5 : 1,
    transition: "transform var(--t-base,250ms), background var(--t-base,250ms), box-shadow var(--t-base,250ms), color var(--t-base,250ms)",
    ...sizes[size],
  };

  const variants = {
    cyan: {
      background: "var(--cx-cyan, #00B4D8)",
      color: "var(--cx-navy, #0F2D52)",
      boxShadow: "var(--shadow-md)",
    },
    primary: {
      background: "var(--cx-navy, #0F2D52)",
      color: "#fff",
    },
    secondary: {
      background: "transparent",
      color: "var(--cx-navy, #0F2D52)",
      border: "2px solid var(--cx-navy, #0F2D52)",
    },
    outline: {
      background: "transparent",
      color: "#fff",
      border: "2px solid rgba(255,255,255,0.25)",
    },
    ghost: {
      background: "transparent",
      color: "rgba(255,255,255,0.75)",
      border: "2px solid rgba(255,255,255,0.22)",
    },
    white: {
      background: "#fff",
      color: "var(--cx-navy, #0F2D52)",
      fontWeight: 700,
    },
  };

  const Tag = as;
  const [hover, setHover] = React.useState(false);

  const hoverStyle = !disabled && hover ? {
    cyan: { background: "var(--cx-cyan-hover, #00C8F0)", transform: "translateY(-2px)", boxShadow: "var(--shadow-cyan)" },
    primary: { background: "var(--cx-blue, #1565C0)", transform: "translateY(-2px)", boxShadow: "var(--shadow-lg)" },
    secondary: { background: "var(--cx-navy, #0F2D52)", color: "#fff", transform: "translateY(-2px)" },
    outline: { borderColor: "var(--cx-cyan, #00B4D8)", color: "var(--cx-cyan, #00B4D8)", background: "rgba(0,180,216,0.1)" },
    ghost: { borderColor: "var(--cx-cyan, #00B4D8)", color: "var(--cx-cyan, #00B4D8)" },
    white: { transform: "translateY(-2px)", boxShadow: "0 6px 18px rgba(0,0,0,0.15)" },
  }[variant] : {};

  return (
    <Tag
      style={{ ...base, ...variants[variant], ...hoverStyle, ...style }}
      disabled={as === "button" ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
