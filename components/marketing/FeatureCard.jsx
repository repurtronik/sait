import React from "react";

/**
 * CORTEX FeatureCard — icon tile for solutions / app features.
 * A navy rounded icon chip, title, and description. `onDark` variant
 * matches the tech section (translucent cards on navy).
 */
export function FeatureCard({ icon, title, description, onDark = false, style, ...rest }) {
  const [h, setH] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: onDark ? "rgba(255,255,255,0.05)" : "var(--cx-white, #fff)",
        border: onDark ? "1.5px solid rgba(255,255,255,0.1)" : "1.5px solid var(--cx-bd2, #E1F0FB)",
        borderRadius: "var(--r-lg, 14px)",
        padding: "28px",
        transition: "transform var(--t-base,250ms), box-shadow var(--t-base,250ms), border-color var(--t-base,250ms), background var(--t-base,250ms)",
        ...(h
          ? onDark
            ? { background: "rgba(0,180,216,0.1)", borderColor: "rgba(0,180,216,0.35)", transform: "translateY(-4px)" }
            : { transform: "translateY(-4px)", boxShadow: "var(--shadow-lg)", borderColor: "var(--cx-bd, #BBDEFB)" }
          : {}),
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "16px",
          background: onDark ? "rgba(0,180,216,0.15)" : "var(--cx-navy, #0F2D52)",
          border: onDark ? "1.5px solid rgba(0,180,216,0.3)" : "none",
          color: onDark ? "var(--cx-cyan, #00B4D8)" : "#fff",
        }}
      >
        {icon}
      </div>
      <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.97rem", margin: "0 0 8px", color: onDark ? "#fff" : "var(--cx-navy, #0F2D52)" }}>
        {title}
      </h3>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.83rem", lineHeight: 1.65, margin: 0, color: onDark ? "rgba(255,255,255,0.45)" : "var(--cx-tm, #546E7A)" }}>
        {description}
      </p>
    </div>
  );
}
