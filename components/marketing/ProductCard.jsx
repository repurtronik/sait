import React from "react";
import { Badge } from "../core/Badge.jsx";
import { Tag } from "../core/Tag.jsx";

/**
 * CORTEX ProductCard — catalog tile. A navy-overlaid product photo
 * with the model name + flag badge on top, then title, blurb, spec tags.
 * Mirrors the catalog grid on cortex.eu.
 */
export function ProductCard({
  model,
  title,
  description,
  image,
  badge,
  badgeTone = "cyan",
  tags = [],
  href = "#",
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "block",
        background: "var(--cx-white, #fff)",
        border: "1.5px solid var(--cx-bd2, #E1F0FB)",
        borderRadius: "var(--r-lg, 14px)",
        overflow: "hidden",
        textDecoration: "none",
        color: "inherit",
        transition: "transform var(--t-base,250ms), box-shadow var(--t-base,250ms), border-color var(--t-base,250ms)",
        ...(h ? { transform: "translateY(-5px)", boxShadow: "var(--shadow-lg)", borderColor: "var(--cx-bd, #BBDEFB)" } : {}),
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          height: "150px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "linear-gradient(135deg, rgba(15,45,82,0.7), rgba(21,101,192,0.7))",
        }}
      >
        {image && (
          <img
            src={image}
            alt={model}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, mixBlendMode: "luminosity", opacity: 0.85 }}
          />
        )}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 70%, rgba(0,180,216,0.22), transparent 60%)", zIndex: 1 }} />
        {badge && (
          <div style={{ position: "absolute", top: "10px", left: "10px", zIndex: 2 }}>
            <Badge tone={badgeTone}>{badge}</Badge>
          </div>
        )}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            fontFamily: "var(--font-sans)",
            fontWeight: 800,
            fontSize: "1.4rem",
            letterSpacing: "-0.02em",
            color: "#fff",
          }}
        >
          {model}
        </div>
      </div>
      <div style={{ padding: "18px" }}>
        <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.9rem", color: "var(--cx-navy, #0F2D52)", margin: "0 0 6px" }}>
          {title}
        </h3>
        {description && (
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--cx-tm, #546E7A)", lineHeight: 1.6, margin: "0 0 14px" }}>
            {description}
          </p>
        )}
        {tags.length > 0 && (
          <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
            {tags.map((t, i) => (
              <Tag key={i}>{t}</Tag>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
