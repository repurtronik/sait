/* @ds-bundle: {"format":3,"namespace":"CORTEXDesignSystem_78fec2","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"FeatureCard","sourcePath":"components/marketing/FeatureCard.jsx"},{"name":"ProductCard","sourcePath":"components/marketing/ProductCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"35bef7cd16f9","components/core/Button.jsx":"0ba1613aaf6e","components/core/Card.jsx":"690dcecee225","components/core/Input.jsx":"5e7eb361e141","components/core/SectionHeading.jsx":"e41e8a173911","components/core/Stat.jsx":"21ca762593e7","components/core/Tag.jsx":"e7f61e33718c","components/marketing/FeatureCard.jsx":"a66917e7970d","components/marketing/ProductCard.jsx":"025b048e36e2","ui_kits/defendex/DefendexApp.jsx":"d1597dbdb490","ui_kits/defendex/android-frame.jsx":"70c8c3059eeb","ui_kits/website/HomePage.jsx":"ff8d44dcee27","ui_kits/website/SiteChrome.jsx":"472485f35e5d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CORTEXDesignSystem_78fec2 = window.CORTEXDesignSystem_78fec2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CORTEX Badge — small uppercase status pill.
 * Used for "Populārs", "Dual SIM · 4G", live/operational markers.
 * `tone` picks the color; `dot` prefixes a status dot.
 */
function Badge({
  children,
  tone = "cyan",
  dot = false,
  style,
  ...rest
}) {
  const tones = {
    cyan: {
      bg: "var(--cx-cyan, #00B4D8)",
      fg: "var(--cx-navy, #0F2D52)"
    },
    sky: {
      bg: "#93C5FD",
      fg: "var(--cx-navy, #0F2D52)"
    },
    indigo: {
      bg: "#A5B4FC",
      fg: "var(--cx-navy, #0F2D52)"
    },
    soft: {
      bg: "#38BDF8",
      fg: "var(--cx-navy, #0F2D52)"
    },
    success: {
      bg: "rgba(46,125,50,0.14)",
      fg: "var(--cx-success, #2E7D32)"
    },
    warning: {
      bg: "rgba(217,118,6,0.14)",
      fg: "var(--cx-warning, #D97706)"
    },
    danger: {
      bg: "rgba(220,38,38,0.12)",
      fg: "var(--cx-danger, #DC2626)"
    },
    onDark: {
      bg: "rgba(0,180,216,0.14)",
      fg: "var(--cx-cyan-soft, #67E8F9)"
    }
  };
  const t = tones[tone] || tones.cyan;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.5em",
      lineHeight: 1
    }
  }, "\u25CF"), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CORTEX Button — the brand's primary action element.
 * Variants mirror the site's button set: cyan (signature CTA),
 * primary (navy), secondary/outline (bordered), ghost (on dark), white.
 */
function Button({
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
    sm: {
      padding: "9px 18px",
      fontSize: "0.82rem"
    },
    md: {
      padding: "13px 28px",
      fontSize: "0.92rem"
    },
    lg: {
      padding: "16px 34px",
      fontSize: "1rem"
    }
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
    ...sizes[size]
  };
  const variants = {
    cyan: {
      background: "var(--cx-cyan, #00B4D8)",
      color: "var(--cx-navy, #0F2D52)",
      boxShadow: "var(--shadow-md)"
    },
    primary: {
      background: "var(--cx-navy, #0F2D52)",
      color: "#fff"
    },
    secondary: {
      background: "transparent",
      color: "var(--cx-navy, #0F2D52)",
      border: "2px solid var(--cx-navy, #0F2D52)"
    },
    outline: {
      background: "transparent",
      color: "#fff",
      border: "2px solid rgba(255,255,255,0.25)"
    },
    ghost: {
      background: "transparent",
      color: "rgba(255,255,255,0.75)",
      border: "2px solid rgba(255,255,255,0.22)"
    },
    white: {
      background: "#fff",
      color: "var(--cx-navy, #0F2D52)",
      fontWeight: 700
    }
  };
  const Tag = as;
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    cyan: {
      background: "var(--cx-cyan-hover, #00C8F0)",
      transform: "translateY(-2px)",
      boxShadow: "var(--shadow-cyan)"
    },
    primary: {
      background: "var(--cx-blue, #1565C0)",
      transform: "translateY(-2px)",
      boxShadow: "var(--shadow-lg)"
    },
    secondary: {
      background: "var(--cx-navy, #0F2D52)",
      color: "#fff",
      transform: "translateY(-2px)"
    },
    outline: {
      borderColor: "var(--cx-cyan, #00B4D8)",
      color: "var(--cx-cyan, #00B4D8)",
      background: "rgba(0,180,216,0.1)"
    },
    ghost: {
      borderColor: "var(--cx-cyan, #00B4D8)",
      color: "var(--cx-cyan, #00B4D8)"
    },
    white: {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 18px rgba(0,0,0,0.15)"
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...style
    },
    disabled: as === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CORTEX Card — the surface primitive. White, hairline border,
 * soft navy-tinted shadow, lifts + cyan border on hover.
 * `tinted` swaps to the pale frost fill used on white sections.
 */
function Card({
  children,
  tinted = false,
  hover = true,
  padding,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: tinted ? "var(--cx-frost, #F0F8FF)" : "var(--cx-white, #fff)",
      border: "1.5px solid var(--cx-bd2, #E1F0FB)",
      borderRadius: "var(--r-xl, 16px)",
      padding: padding ?? "var(--sp-2xl, 36px)",
      boxShadow: "var(--shadow-sm)",
      transition: "transform var(--t-base,250ms), box-shadow var(--t-base,250ms), border-color var(--t-base,250ms)",
      ...(hover && h ? {
        transform: "translateY(-4px)",
        boxShadow: "var(--shadow-lg)",
        borderColor: "var(--cx-bd, #BBDEFB)"
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CORTEX Input — labelled text field matching the site forms.
 * Sky focus ring, hairline border, optional error state.
 */
function Input({
  label,
  id,
  type = "text",
  error,
  hint,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--sp-lg, 24px)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "var(--fs-base, 0.92rem)",
      color: "var(--cx-tx, #1A1A2E)",
      marginBottom: "var(--sp-sm, 8px)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-base, 0.92rem)",
      color: "var(--cx-tx, #1A1A2E)",
      padding: "12px 16px",
      background: "var(--cx-white, #fff)",
      border: `1px solid ${error ? "var(--cx-danger, #DC2626)" : focus ? "var(--cx-sky, #2196F3)" : "var(--cx-bd2, #E1F0FB)"}`,
      borderRadius: "var(--r-md, 8px)",
      outline: "none",
      boxShadow: focus && !error ? "0 0 0 3px var(--focus-ring, rgba(33,150,243,0.18))" : "none",
      transition: "border-color var(--t-fast,150ms), box-shadow var(--t-fast,150ms)",
      ...style
    }
  }, rest)), error && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--cx-danger, #DC2626)",
      fontSize: "var(--fs-sm, 0.82rem)",
      marginTop: "var(--sp-xs, 4px)"
    }
  }, error), hint && !error && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--cx-tm, #546E7A)",
      fontSize: "var(--fs-sm, 0.82rem)",
      marginTop: "var(--sp-xs, 4px)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CORTEX SectionHeading — the eyebrow + title + subtitle block that
 * opens nearly every section on the site.
 * `onDark` recolors for navy/tech sections.
 */
function SectionHeading({
  label,
  title,
  subtitle,
  onDark = false,
  align = "left",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      maxWidth: align === "center" ? "640px" : undefined,
      marginInline: align === "center" ? "auto" : undefined,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-xs, 0.72rem)",
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: onDark ? "rgba(255,255,255,0.4)" : "var(--cx-sky, #2196F3)",
      marginBottom: "var(--sp-md, 12px)"
    }
  }, label), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-section, clamp(1.8rem,3vw,2.5rem))",
      fontWeight: 800,
      letterSpacing: "-0.025em",
      lineHeight: 1.12,
      margin: 0,
      color: onDark ? "#fff" : "var(--cx-navy, #0F2D52)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-md, 1rem)",
      lineHeight: 1.72,
      marginTop: "var(--sp-md, 14px)",
      marginBottom: 0,
      maxWidth: "540px",
      marginInline: align === "center" ? "auto" : undefined,
      color: onDark ? "rgba(255,255,255,0.5)" : "var(--cx-tm, #546E7A)"
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CORTEX Stat — big black number over a muted uppercase label.
 * Powers the hero stats strip and About page metrics.
 * `onDark` uses cyan numbers + faded labels for dark sections.
 */
function Stat({
  value,
  label,
  onDark = false,
  align = "center",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: "1.9rem",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      color: onDark ? "var(--cx-cyan, #00B4D8)" : "var(--cx-navy, #0F2D52)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-xs, 0.72rem)",
      textTransform: "uppercase",
      letterSpacing: "0.07em",
      marginTop: "5px",
      color: onDark ? "rgba(255,255,255,0.45)" : "var(--cx-tm, #546E7A)"
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CORTEX Tag — compact spec chip with a tinted ice background.
 * Used for technical attributes: "GSM/LTE", "4G", "Paradox/NX/DSC".
 */
function Tag({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-sans)",
      fontSize: "0.64rem",
      fontWeight: 600,
      background: "var(--cx-ice, #E3F2FD)",
      color: "var(--cx-sky, #2196F3)",
      border: "1px solid var(--cx-bd2, #E1F0FB)",
      padding: "2px 7px",
      borderRadius: "var(--r-sm, 4px)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CORTEX FeatureCard — icon tile for solutions / app features.
 * A navy rounded icon chip, title, and description. `onDark` variant
 * matches the tech section (translucent cards on navy).
 */
function FeatureCard({
  icon,
  title,
  description,
  onDark = false,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: onDark ? "rgba(255,255,255,0.05)" : "var(--cx-white, #fff)",
      border: onDark ? "1.5px solid rgba(255,255,255,0.1)" : "1.5px solid var(--cx-bd2, #E1F0FB)",
      borderRadius: "var(--r-lg, 14px)",
      padding: "28px",
      transition: "transform var(--t-base,250ms), box-shadow var(--t-base,250ms), border-color var(--t-base,250ms), background var(--t-base,250ms)",
      ...(h ? onDark ? {
        background: "rgba(0,180,216,0.1)",
        borderColor: "rgba(0,180,216,0.35)",
        transform: "translateY(-4px)"
      } : {
        transform: "translateY(-4px)",
        boxShadow: "var(--shadow-lg)",
        borderColor: "var(--cx-bd, #BBDEFB)"
      } : {}),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "48px",
      height: "48px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "16px",
      background: onDark ? "rgba(0,180,216,0.15)" : "var(--cx-navy, #0F2D52)",
      border: onDark ? "1.5px solid rgba(0,180,216,0.3)" : "none",
      color: onDark ? "var(--cx-cyan, #00B4D8)" : "#fff"
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "0.97rem",
      margin: "0 0 8px",
      color: onDark ? "#fff" : "var(--cx-navy, #0F2D52)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.83rem",
      lineHeight: 1.65,
      margin: 0,
      color: onDark ? "rgba(255,255,255,0.45)" : "var(--cx-tm, #546E7A)"
    }
  }, description));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CORTEX ProductCard — catalog tile. A navy-overlaid product photo
 * with the model name + flag badge on top, then title, blurb, spec tags.
 * Mirrors the catalog grid on cortex.eu.
 */
function ProductCard({
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
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "block",
      background: "var(--cx-white, #fff)",
      border: "1.5px solid var(--cx-bd2, #E1F0FB)",
      borderRadius: "var(--r-lg, 14px)",
      overflow: "hidden",
      textDecoration: "none",
      color: "inherit",
      transition: "transform var(--t-base,250ms), box-shadow var(--t-base,250ms), border-color var(--t-base,250ms)",
      ...(h ? {
        transform: "translateY(-5px)",
        boxShadow: "var(--shadow-lg)",
        borderColor: "var(--cx-bd, #BBDEFB)"
      } : {}),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "150px",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      background: "linear-gradient(135deg, rgba(15,45,82,0.7), rgba(21,101,192,0.7))"
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: model,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
      mixBlendMode: "luminosity",
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(circle at 30% 70%, rgba(0,180,216,0.22), transparent 60%)",
      zIndex: 1
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "10px",
      left: "10px",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badgeTone
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: "1.4rem",
      letterSpacing: "-0.02em",
      color: "#fff"
    }
  }, model)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "0.9rem",
      color: "var(--cx-navy, #0F2D52)",
      margin: "0 0 6px"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.8rem",
      color: "var(--cx-tm, #546E7A)",
      lineHeight: 1.6,
      margin: "0 0 14px"
    }
  }, description), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "5px",
      flexWrap: "wrap"
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i
  }, t)))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/defendex/DefendexApp.jsx
try { (() => {
// Defendex 2.0 — CORTEX monitoring mobile app (Flutter recreation).
// Faithful to the real app: white surfaces, sky-blue primary, gradient
// action buttons, outlined inputs with leading icons, Material cards.

const DFX = {
  primary: "#2196F3",
  primaryDark: "#1976D2",
  grad: "linear-gradient(135deg, #42A5F5 0%, #1E88E5 55%, #1565C0 100%)",
  ink: "#1A1A2E",
  muted: "#8A94A6",
  line: "#E2E8F0",
  bg: "#F7F9FC",
  iconBg: "#E3F2FD",
  danger: "#E53935"
};
const Lic = ({
  n,
  size = 22,
  color = DFX.primary,
  sw = 2
}) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n,
  style: {
    width: size,
    height: size,
    color,
    strokeWidth: sw
  }
});

// ── Reusable: section label (gray caps) ──
function Caps({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      letterSpacing: "0.08em",
      color: DFX.muted,
      margin: "0 0 10px",
      ...style
    }
  }, children);
}

// ── Reusable: outlined field with leading icon chip ──
function Field({
  icon,
  label,
  value,
  placeholder,
  mono = true,
  focus = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      border: `1.5px solid ${focus ? DFX.primary : DFX.line}`,
      borderRadius: 14,
      padding: "10px 12px",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 12
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -9,
      left: 14,
      background: "#fff",
      padding: "0 6px",
      fontSize: 12.5,
      color: focus ? DFX.primary : DFX.muted
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: DFX.iconBg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Lic, {
    n: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
      color: value ? DFX.ink : "#B6C0CE",
      letterSpacing: mono ? "0.02em" : 0
    }
  }, value || placeholder));
}

// ── Reusable: gradient action button ──
function GradBtn({
  icon,
  children,
  onClick,
  color
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: "100%",
      border: "none",
      cursor: "pointer",
      background: color || DFX.grad,
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: "0.04em",
      padding: "16px",
      borderRadius: 16,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      boxShadow: "0 10px 22px rgba(33,150,243,0.35)"
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 20,
      height: 20,
      color: "#fff"
    }
  }), children);
}

// ── App top bar (the app's own, not Material) ──
function AppBar({
  title,
  onBack,
  onRefresh,
  onSettings
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "10px 8px",
      gap: 4,
      background: "#fff"
    }
  }, onBack && /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: iconBtn
  }, /*#__PURE__*/React.createElement(Lic, {
    n: "arrow-left",
    size: 24,
    color: DFX.ink
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "center",
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: "0.02em",
      color: DFX.ink
    }
  }, title), onSettings && /*#__PURE__*/React.createElement("button", {
    onClick: onSettings,
    style: iconBtn
  }, /*#__PURE__*/React.createElement(Lic, {
    n: "settings",
    size: 22,
    color: DFX.ink
  })), onRefresh && /*#__PURE__*/React.createElement("button", {
    onClick: onRefresh,
    style: iconBtn
  }, /*#__PURE__*/React.createElement(Lic, {
    n: "refresh-cw",
    size: 21,
    color: DFX.ink
  })), !onSettings && !onRefresh && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40
    }
  }));
}
const iconBtn = {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

// ── LOGIN ──
function LoginScreen({
  onSignIn,
  onSettings
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      background: "#fff",
      padding: "0 28px",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "CORTEX",
    style: {
      height: 64,
      width: "auto",
      objectFit: "contain",
      margin: "0 auto 8px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: "0.06em",
      color: DFX.ink,
      margin: "0 0 40px"
    }
  }, "DEFENDEX"), /*#__PURE__*/React.createElement(Field, {
    icon: "user",
    value: "korteks",
    mono: false
  }), /*#__PURE__*/React.createElement(Field, {
    icon: "lock",
    value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    mono: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8
    }
  }), /*#__PURE__*/React.createElement(GradBtn, {
    icon: "log-in",
    onClick: onSignIn
  }, "SIGN IN"), /*#__PURE__*/React.createElement("button", {
    onClick: onSettings,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      margin: "22px auto 0",
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: DFX.muted,
      fontSize: 15,
      fontWeight: 600,
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "settings",
    style: {
      width: 17,
      height: 17,
      color: DFX.muted
    }
  }), " Server settings")));
}

// ── EVENT ARCHIVE ──
const EVENTS = [["0614", "Comm. test", "18.05.2026 00:20:32"], ["1011", "Comm. test", "18.05.2026 00:20:31"], ["6472", "Comm. test", "18.05.2026 00:20:27"], ["9090", "Disarmed", "18.05.2026 00:20:24"], ["2144", "Armed", "18.05.2026 00:20:16"], ["8817", "Comm. test", "18.05.2026 00:19:53"], ["9131", "Low battery", "18.05.2026 00:19:48"], ["1011", "Comm. test", "18.05.2026 00:19:47"]];
const TYPE_COLOR = {
  "Comm. test": DFX.muted,
  "Disarmed": "#93A4B8",
  "Armed": DFX.primary,
  "Low battery": "#F59E0B"
};
function Dropdown({
  icon,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 4px",
      borderBottom: `1px solid ${DFX.line}`
    }
  }, /*#__PURE__*/React.createElement(Lic, {
    n: icon,
    size: 20,
    color: DFX.muted
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 18,
      color: DFX.ink
    }
  }, label), /*#__PURE__*/React.createElement(Lic, {
    n: "chevron-down",
    size: 22,
    color: DFX.muted
  }));
}
function EventArchive({
  onBack,
  onRefresh
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      background: DFX.bg
    }
  }, /*#__PURE__*/React.createElement(AppBar, {
    title: "EVENT ARCHIVE",
    onBack: onBack,
    onRefresh: onRefresh
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px 0"
    }
  }, /*#__PURE__*/React.createElement(Dropdown, {
    icon: "map-pin",
    label: "All objects"
  }), /*#__PURE__*/React.createElement(Dropdown, {
    icon: "filter",
    label: "All types"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      margin: "14px 0 4px"
    }
  }, ["From date", "To date"].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      border: `1.5px solid ${DFX.line}`,
      borderRadius: 26,
      padding: "11px",
      color: DFX.primary,
      fontWeight: 600,
      fontSize: 14.5
    }
  }, /*#__PURE__*/React.createElement(Lic, {
    n: "calendar",
    size: 17
  }), " ", t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: DFX.iconBg,
      color: DFX.primaryDark,
      fontWeight: 700,
      fontSize: 15,
      padding: "12px 18px",
      margin: "12px 0 0"
    }
  }, "Events found: 200"), /*#__PURE__*/React.createElement("div", null, EVENTS.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "14px 18px",
      borderBottom: `1px solid ${DFX.line}`,
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: "50%",
      background: "#EEF2F7",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Lic, {
    n: "radio",
    size: 20,
    color: "#AAB4C2"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: DFX.ink
    }
  }, e[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "#4A5568"
    }
  }, e[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: DFX.muted,
      fontFamily: "var(--font-mono)"
    }
  }, e[2])), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.06em",
      color: TYPE_COLOR[e[1]] || DFX.muted
    }
  }, "TEST")))));
}

// ── SETTINGS ──
function SettingsScreen({
  onBack,
  toast
}) {
  const langs = [["🇷🇺", "Русский", false], ["🇬🇧", "English", true], ["🇱🇻", "Latviešu", false]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      background: DFX.bg
    }
  }, /*#__PURE__*/React.createElement(AppBar, {
    title: "Settings",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 18px 28px"
    }
  }, /*#__PURE__*/React.createElement(Caps, null, "LANGUAGE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      background: "#fff",
      borderRadius: 16,
      padding: 12,
      marginBottom: 24,
      boxShadow: "0 2px 10px rgba(20,40,80,0.05)"
    }
  }, langs.map(([flag, name, on]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      flex: 1,
      textAlign: "center",
      padding: "12px 4px",
      borderRadius: 12,
      background: on ? DFX.primary : "transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24
    }
  }, flag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: on ? 700 : 500,
      color: on ? "#fff" : DFX.ink,
      marginTop: 4
    }
  }, name)))), /*#__PURE__*/React.createElement(Caps, null, "CORTEX SERVER"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 16,
      padding: 16,
      marginBottom: 24,
      boxShadow: "0 2px 10px rgba(20,40,80,0.05)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    icon: "server",
    label: "IP / Domain",
    value: "192.168.211.149"
  }), /*#__PURE__*/React.createElement(Field, {
    icon: "code",
    label: "Port",
    value: "8010"
  })), /*#__PURE__*/React.createElement(Caps, null, "COMMUNICATION TEST (GLOBAL)"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 16,
      padding: 16,
      boxShadow: "0 2px 10px rgba(20,40,80,0.05)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    icon: "radio",
    label: "Interval (sec)",
    value: "500",
    focus: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: DFX.muted,
      margin: "2px 2px 16px"
    }
  }, "Minimum 30 sec. Applies to all objects."), /*#__PURE__*/React.createElement(GradBtn, {
    icon: "save",
    onClick: toast
  }, "SAVE"))));
}
Object.assign(window, {
  DFX,
  LoginScreen,
  EventArchive,
  SettingsScreen,
  AppBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/defendex/DefendexApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/defendex/android-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// Android.jsx — Simplified Android (Material 3) device frame
// Status bar + top app bar + content + gesture nav + keyboard.
// Based on Figma M3 spec. No dependencies, no image assets.
// Exports (to window): AndroidDevice, AndroidStatusBar, AndroidAppBar, AndroidListItem, AndroidNavBar, AndroidKeyboard
//
// Usage — wrap your screen content in <AndroidDevice> to get the bezel, status
// bar and gesture nav (props: title, large, keyboard, dark):
//
//   <AndroidDevice title="Inbox" large>
//     ...your screen content...
//   </AndroidDevice>
//   <AndroidDevice title="Compose" keyboard>…</AndroidDevice>
/* END USAGE */

const MD_C = {
  surface: '#f4fbf8',
  surfaceVariant: '#dae5e1',
  inverseOnSurface: '#ecf2ef',
  secondaryContainer: '#cde8e1',
  primaryFixedDim: '#83d5c6',
  onSurface: '#171d1b',
  onSurfaceVar: '#49454f',
  onPrimaryContainer: '#00201c',
  primary: '#006a60',
  frameBorder: 'rgba(116,119,117,0.5)'
};

// ─────────────────────────────────────────────────────────────
// Status bar (time left, wifi/cell/battery right)
// ─────────────────────────────────────────────────────────────
function AndroidStatusBar({
  dark = false
}) {
  const c = dark ? '#fff' : MD_C.onSurface;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      position: 'relative',
      fontFamily: 'Roboto, system-ui, sans-serif'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 128,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0.25,
      lineHeight: '20px',
      color: c
    }
  }, "9:30")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 8,
      transform: 'translateX(-50%)',
      width: 24,
      height: 24,
      borderRadius: 100,
      background: '#2e2e2e'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      paddingRight: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    style: {
      marginRight: -2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 13.3L.67 5.97a10.37 10.37 0 0114.66 0L8 13.3z",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    style: {
      marginRight: -2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.67 14.67V1.33L1.33 14.67h13.34z",
    fill: c
  }))), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3.75",
    y: "2",
    width: "8.5",
    height: "13",
    rx: "1.5",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "5.5",
    y: "0.9",
    width: "5",
    height: "2",
    rx: "0.5",
    fill: c
  }))));
}

// ─────────────────────────────────────────────────────────────
// Top app bar (Material 3 small/medium)
// ─────────────────────────────────────────────────────────────
function AndroidAppBar({
  title = 'Title',
  large = false
}) {
  const iconDot = /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: MD_C.onSurfaceVar,
      opacity: 0.3
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: MD_C.surface,
      padding: '4px 4px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, iconDot, !large && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 22,
      fontWeight: 400,
      color: MD_C.onSurface,
      fontFamily: 'Roboto, system-ui, sans-serif'
    }
  }, title), large && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), iconDot), large && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 20px',
      fontSize: 28,
      fontWeight: 400,
      color: MD_C.onSurface,
      fontFamily: 'Roboto, system-ui, sans-serif'
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// List item (Material 3)
// ─────────────────────────────────────────────────────────────
function AndroidListItem({
  headline,
  supporting,
  leading
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 16px',
      minHeight: 56,
      boxSizing: 'border-box',
      fontFamily: 'Roboto, system-ui, sans-serif'
    }
  }, leading && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: MD_C.primary,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      fontWeight: 500,
      flexShrink: 0
    }
  }, leading), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: MD_C.onSurface,
      lineHeight: '24px'
    }
  }, headline), supporting && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: MD_C.onSurfaceVar,
      lineHeight: '20px'
    }
  }, supporting)));
}

// ─────────────────────────────────────────────────────────────
// Gesture nav bar (pill)
// ─────────────────────────────────────────────────────────────
function AndroidNavBar({
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 108,
      height: 4,
      borderRadius: 2,
      background: dark ? '#fff' : MD_C.onSurface,
      opacity: 0.4
    }
  }));
}

// ─────────────────────────────────────────────────────────────
// Device frame — wraps everything
// ─────────────────────────────────────────────────────────────
function AndroidDevice({
  children,
  width = 412,
  height = 892,
  dark = false,
  title,
  large = false,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 18,
      overflow: 'hidden',
      background: dark ? '#1d1b20' : MD_C.surface,
      border: `8px solid ${MD_C.frameBorder}`,
      boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(AndroidStatusBar, {
    dark: dark
  }), title !== undefined && /*#__PURE__*/React.createElement(AndroidAppBar, {
    title: title,
    large: large
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(AndroidKeyboard, null), /*#__PURE__*/React.createElement(AndroidNavBar, {
    dark: dark
  }));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — Gboard (Material 3)
// ─────────────────────────────────────────────────────────────
function AndroidKeyboard() {
  let _k = 0;
  const key = (l, {
    flex = 1,
    bg = MD_C.surface,
    r = 6,
    minW,
    fs = 21
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: _k++,
    style: {
      height: 46,
      borderRadius: r,
      flex,
      minWidth: minW,
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Roboto, system-ui',
      fontSize: fs,
      color: MD_C.onPrimaryContainer
    }
  }, l);
  const row = (keys, style = {}) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      justifyContent: 'center',
      ...style
    }
  }, keys.map(l => key(l)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: MD_C.inverseOnSurface,
      padding: '0 8px 8px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], {
    padding: '0 20px'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, key('', {
    bg: MD_C.surfaceVariant
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flex: 7,
      minWidth: 274
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l))), key('', {
    bg: MD_C.surfaceVariant
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, key('?123', {
    bg: MD_C.secondaryContainer,
    r: 100,
    minW: 58,
    fs: 14
  }), key(',', {
    bg: MD_C.surfaceVariant
  }), key('', {
    flex: 3,
    minW: 154
  }), key('.', {
    bg: MD_C.surfaceVariant
  }), key('', {
    bg: MD_C.primaryFixedDim,
    r: 100,
    minW: 58
  }))));
}
Object.assign(window, {
  AndroidDevice,
  AndroidStatusBar,
  AndroidAppBar,
  AndroidListItem,
  AndroidNavBar,
  AndroidKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/defendex/android-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// CORTEX homepage — hero, solutions, catalog, Defendex strip, CTA.
// Recreation of cortex.eu/index.html. Composes design-system components.

function Hero() {
  const NS = window.CORTEXDesignSystem_78fec2;
  const {
    Button,
    Stat,
    Badge
  } = NS;
  const events = [{
    c: "#a5b4fc",
    t: "Noliktava №12 — Trauksme zona 4",
    x: "09:14"
  }, {
    c: "var(--cx-cyan)",
    t: "Birojs Centrs — Noņemts no apsardzes",
    x: "09:02"
  }, {
    c: "#93c5fd",
    t: "Veikals — Zems akumulators",
    x: "08:55"
  }, {
    c: "var(--cx-cyan)",
    t: "Villa Jūrmala — Uzstādīts apsardzē",
    x: "08:41"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--cx-grad-hero)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: "900px",
      height: "900px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(0,180,216,.15) 0%, transparent 70%)",
      top: "-350px",
      right: "-150px",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)",
      backgroundSize: "52px 52px",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "80px 48px",
      display: "grid",
      gridTemplateColumns: "1fr 420px",
      gap: "64px",
      alignItems: "center",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "onDark",
    dot: true,
    style: {
      marginBottom: "28px"
    }
  }, "Profesion\u0101las dro\u0161\u012Bbas sist\u0113mas"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(2.2rem,4.5vw,3.8rem)",
      fontWeight: 800,
      color: "#fff",
      letterSpacing: "-0.03em",
      lineHeight: 1.08,
      margin: "0 0 20px"
    }
  }, "Apsardze un", /*#__PURE__*/React.createElement("br", null), "monitorings.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cx-cyan)"
    }
  }, "Sign\u0101ls. Objekts. Kontrole.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,.62)",
      fontSize: "1rem",
      maxWidth: "500px",
      margin: "0 0 36px",
      lineHeight: 1.75
    }
  }, "CORTEX iek\u0101rtas aizsarg\u0101 t\u016Bksto\u0161iem objektu vis\u0101 Baltij\u0101. Raid\u012Bt\u0101ji, pane\u013Ci, Defendex platforma \u2014 pilns cikls no uzst\u0101d\u012B\u0161anas l\u012Bdz monitoringam."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      marginBottom: "48px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "cyan"
  }, "Skat\u012Bt produktus \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Sazin\u0101ties")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      background: "rgba(255,255,255,.05)",
      border: "1px solid rgba(255,255,255,.1)",
      borderRadius: "14px",
      backdropFilter: "blur(12px)"
    }
  }, [["25+", "Gadi tirgū"], ["10 000+", "Objekti"], ["24/7", "Atbalsts"]].map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "20px 16px",
      borderRight: i < 2 ? "1px solid rgba(255,255,255,.08)" : "none"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: v,
    label: l,
    onDark: true
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,.06)",
      border: "1px solid rgba(255,255,255,.12)",
      borderRadius: "16px",
      padding: "20px",
      boxShadow: "0 20px 64px rgba(0,0,0,.4)",
      backdropFilter: "blur(12px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "16px",
      paddingBottom: "14px",
      borderBottom: "1px solid rgba(255,255,255,.07)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "5px"
    }
  }, ["#93c5fd", "var(--cx-cyan)", "#67e8f9"].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: c
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.72rem",
      color: "rgba(255,255,255,.38)",
      flex: 1,
      textAlign: "center",
      fontFamily: "var(--font-mono)"
    }
  }, "Defendex 2.0"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.65rem",
      color: "#67e8f9",
      fontWeight: 700
    }
  }, "\u25CF Live")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "8px",
      marginBottom: "14px"
    }
  }, [["142", "Apsardzē", "var(--cx-cyan)"], ["3", "Uzmanību", "#93c5fd"], ["1", "Trauksme", "#a5b4fc"]].map(([n, l, c], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "rgba(255,255,255,.05)",
      border: "1px solid rgba(255,255,255,.08)",
      borderRadius: "8px",
      padding: "12px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "1.5rem",
      fontWeight: 800,
      lineHeight: 1,
      color: c
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.6rem",
      color: "rgba(255,255,255,.3)",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      marginTop: "4px"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, events.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "9px",
      background: "rgba(255,255,255,.04)",
      border: "1px solid rgba(255,255,255,.07)",
      borderRadius: "6px",
      padding: "9px 10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "7px",
      height: "7px",
      borderRadius: "50%",
      background: e.c,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.68rem",
      color: "rgba(255,255,255,.58)",
      flex: 1,
      lineHeight: 1.3
    }
  }, e.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.62rem",
      color: "rgba(255,255,255,.25)",
      fontFamily: "var(--font-mono)"
    }
  }, e.x)))))));
}
function Solutions() {
  const NS = window.CORTEXDesignSystem_78fec2;
  const {
    SectionHeading,
    FeatureCard
  } = NS;
  const Ico = ({
    n
  }) => /*#__PURE__*/React.createElement("i", {
    "data-lucide": n
  });
  const sols = [["radio-tower", "Objektu globālais monitorings", "Centralizēts GSM/GPRS un UHF/VHF monitorings. Tūkstošiem objektu vienā sistēmā ar reāllaika statusu."], ["network", "Retranslācijas tīkla veidošana", "Pašu UHF/VHF retranslācijas tīkls objektu aizsardzībai reģionos ar vāju GSM pārklājumu."], ["shield", "Apsardzes sistēmas maziem objektiem", "RS-63 un ABAS-15 — kompakti risinājumi. Vienkārša uzstādīšana, zemākas izmaksas."], ["monitor", "Programmatūra un mākoņplatforma", "Win SC, Defendex 2.0, mobilā lietotne — pilna programmatūras ekosistēma PCO un īpašniekiem."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#fff",
      padding: "84px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1280px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    label: "Risin\u0101jumi",
    title: "Visaptvero\u0161a dro\u0161\u012Bbas ekosist\u0113ma",
    subtitle: "No viena objekta l\u012Bdz valsts m\u0113roga monitoringa t\u012Bklam \u2014 CORTEX nodro\u0161ina visu."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "24px",
      marginTop: "52px"
    }
  }, sols.map((s, i) => /*#__PURE__*/React.createElement(FeatureCard, {
    key: i,
    icon: /*#__PURE__*/React.createElement(Ico, {
      n: s[0]
    }),
    title: s[1],
    description: s[2]
  })))));
}
function Catalog() {
  const NS = window.CORTEXDesignSystem_78fec2;
  const {
    SectionHeading,
    ProductCard,
    Button
  } = NS;
  const prods = [{
    model: "RT4-5GP/4",
    title: "GSM/GPRS/LTE Raidītājs",
    description: "1×SIM, 2×IP, Paradox/NX/DSC iekšā. G2/G4 AUTO.",
    image: "../../assets/products/RT4-5GP.jpg",
    badge: "Populārs",
    tags: ["GSM/LTE", "4G", "Paradox/NX/DSC"]
  }, {
    model: "RT4-5GL/4",
    title: "Dual SIM 4G Raidītājs",
    description: "2×SIM, 2×IP. Automātiska pārslēgšanās bez notikumu zuduma.",
    image: "../../assets/products/RT4-5GL.jpg",
    badge: "Dual SIM · 4G",
    badgeTone: "sky",
    tags: ["Dual SIM", "LTE"]
  }, {
    model: "CU-GSM27",
    title: "GSM komunikators",
    description: "Universāls GSM interfeiss esošajām signalizācijas sistēmām.",
    image: "../../assets/products/CU-GSM27.jpg",
    badge: "GSM",
    badgeTone: "soft",
    tags: ["GSM", "Interfeiss"]
  }, {
    model: "RP-4000",
    title: "Retranslators",
    description: "UHF/VHF retranslators tīkla pārklājuma paplašināšanai.",
    image: "../../assets/products/RP4000.jpg",
    badge: "UHF/VHF",
    badgeTone: "indigo",
    tags: ["UHF/VHF", "Tīkls"]
  }, {
    model: "ABAS-15",
    title: "Kompakta bāzes stacija",
    description: "Mazām sistēmām. Autonoma darbība ar akumulatoru.",
    image: "../../assets/products/ABAS15.jpg",
    badge: "GSM",
    badgeTone: "soft",
    tags: ["GSM", "Kompakts"]
  }, {
    model: "RS1-4",
    title: "Objekta raidītājs",
    description: "Ekonomisks risinājums maziem un vidējiem objektiem.",
    image: "../../assets/products/RS1-4.jpg",
    badge: "VHF",
    badgeTone: "sky",
    tags: ["VHF", "433 MHz"]
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--cx-frost)",
      padding: "84px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1280px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: "44px",
      flexWrap: "wrap",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    label: "Katalogs",
    title: "Objektu ier\u012Bces un b\u0101zes sist\u0113mas"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "cyan",
    size: "sm"
  }, "Viss katalogs \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "20px"
    }
  }, prods.map((p, i) => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: i
  }, p))))));
}
function DefendexStrip() {
  const NS = window.CORTEXDesignSystem_78fec2;
  const {
    Button,
    Badge
  } = NS;
  const feats = ["Reāllaika objektu statuss", "ARM / DISARM no telefona", "Push paziņojumi par trauksmi", "Notikumu arhīvs un atskaites"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--cx-grad-cta)",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "80px 48px",
      display: "grid",
      gridTemplateColumns: "1fr 360px",
      gap: "64px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "onDark",
    style: {
      marginBottom: "20px"
    }
  }, "M\u0101ko\u0146a platforma"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(2rem,3.5vw,2.8rem)",
      fontWeight: 800,
      color: "#fff",
      letterSpacing: "-0.025em",
      lineHeight: 1.1,
      margin: "0 0 16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cx-cyan)"
    }
  }, "Defendex 2.0"), " \u2014 monitorings tav\u0101 kabat\u0101"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,.58)",
      fontSize: "0.95rem",
      lineHeight: 1.75,
      margin: "0 0 32px",
      maxWidth: "480px"
    }
  }, "Piln\u012Bgi jauna m\u0101ko\u0146a monitoringa platforma objektu \u012Bpa\u0161niekiem un PCO operatoriem. Pieejama Android un iOS."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginBottom: "36px"
    }
  }, feats.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: "rgba(255,255,255,.7)",
      fontSize: "0.875rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cx-cyan)",
      fontWeight: 700
    }
  }, "\u2713"), f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "cyan"
  }, "Uzzin\u0101t vair\u0101k"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Skat\u012Bt lietotni"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/defendex/dfx7.jpg",
    alt: "Defendex app",
    style: {
      width: "240px",
      borderRadius: "26px",
      border: "2px solid rgba(255,255,255,.2)",
      boxShadow: "0 24px 64px rgba(0,0,0,.45)"
    }
  }))));
}
function CTA() {
  const NS = window.CORTEXDesignSystem_78fec2;
  const {
    Button,
    SectionHeading
  } = NS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--cx-navy)",
      padding: "88px 48px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "640px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    onDark: true,
    title: "Gatavi s\u0101kt sadarb\u012Bbu?",
    subtitle: "Sazinieties ar m\u016Bsu komandu \u2014 pal\u012Bdz\u0113sim izv\u0113l\u0113ties pareizo risin\u0101jumu j\u016Bsu objektam."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: "36px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "cyan"
  }, "Sazin\u0101ties"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "K\u013C\u016Bt par partneri"))));
}
function HomePage() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Solutions, null), /*#__PURE__*/React.createElement(Catalog, null), /*#__PURE__*/React.createElement(DefendexStrip, null), /*#__PURE__*/React.createElement(CTA, null));
}
Object.assign(window, {
  HomePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
// CORTEX website chrome — topbar, sticky nav with dropdowns, footer.
// Recreation of cortex.eu navigation. Self-contained; uses brand tokens.

function Topbar({
  lang,
  setLang
}) {
  const langs = ["LV", "RU", "EN"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cx-topbar)",
      padding: "6px 48px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "16px",
      fontSize: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,.55)"
    }
  }, "+371 67 505 603"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,.18)"
    }
  }, "|"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "rgba(255,255,255,.5)",
      textDecoration: "none"
    }
  }, "info@cortex.lv"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,.18)"
    }
  }, "|"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "rgba(255,255,255,.5)",
      textDecoration: "none"
    }
  }, "Person\u012Bgais kabinets"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "4px",
      marginLeft: "8px"
    }
  }, langs.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setLang(l),
    style: {
      background: lang === l ? "var(--cx-cyan)" : "none",
      border: "1px solid " + (lang === l ? "var(--cx-cyan)" : "rgba(255,255,255,.2)"),
      color: lang === l ? "var(--cx-navy)" : "rgba(255,255,255,.45)",
      fontSize: "0.68rem",
      fontWeight: 700,
      letterSpacing: "0.04em",
      padding: "2px 7px",
      borderRadius: "3px",
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, l))));
}
const NAV = [{
  label: "Sistēmas",
  items: ["Globālais monitorings", "Retranslācijas tīkls", "UHF / VHF", "GSM / GPRS", "Ethernet"]
}, {
  label: "Katalogs",
  items: ["Raidītāji", "Interfeisa moduļi", "Apsardzes pultis", "Retranslatori", "Win SC", "Defendex 2.0"]
}, {
  label: "Lejuplādēt"
}, {
  label: "Tehniskais atbalsts"
}, {
  label: "Par mums",
  items: ["Par kompāniju", "Partneri", "Jaunumi", "Kontakti"]
}];
function Nav() {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      background: "#fff",
      boxShadow: "var(--shadow-md)",
      position: "sticky",
      top: 0,
      zIndex: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1280px",
      margin: "0 auto",
      display: "flex",
      alignItems: "stretch",
      padding: "0 48px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      alignItems: "center",
      padding: "10px 0",
      marginRight: "40px",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "CORTEX",
    style: {
      height: "50px",
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      alignItems: "stretch",
      flex: 1,
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, NAV.map((n, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: "relative"
    },
    onMouseEnter: () => setOpen(i),
    onMouseLeave: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      padding: "0 16px",
      height: "72px",
      color: open === i ? "var(--cx-sky)" : "var(--cx-navy)",
      fontSize: "0.875rem",
      fontWeight: 600,
      cursor: "pointer",
      whiteSpace: "nowrap",
      borderBottom: "3px solid " + (open === i ? "var(--cx-sky)" : "transparent"),
      transition: "color .2s"
    }
  }, n.label, n.items && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.65rem",
      opacity: 0.5
    }
  }, "\u25BE")), n.items && open === i && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "100%",
      left: 0,
      background: "#fff",
      border: "1.5px solid var(--cx-bd2)",
      borderTop: "3px solid var(--cx-sky)",
      borderRadius: "0 0 12px 12px",
      minWidth: "240px",
      boxShadow: "var(--shadow-xl)",
      zIndex: 300
    }
  }, n.items.map((it, j) => /*#__PURE__*/React.createElement("a", {
    key: j,
    href: "#",
    style: {
      display: "block",
      padding: "11px 20px",
      color: "var(--cx-tx)",
      textDecoration: "none",
      fontSize: "0.855rem",
      fontWeight: 500,
      borderBottom: j < n.items.length - 1 ? "1px solid var(--cx-bd2)" : "none"
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = "var(--cx-ice)";
      e.currentTarget.style.color = "var(--cx-sky)";
      e.currentTarget.style.paddingLeft = "26px";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.color = "var(--cx-tx)";
      e.currentTarget.style.paddingLeft = "20px";
    }
  }, it)))))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      alignItems: "center",
      color: "var(--cx-tm)",
      padding: "0 12px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: "18px",
      height: "18px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "8px",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      background: "var(--cx-cyan)",
      color: "var(--cx-navy)",
      padding: "9px 22px",
      borderRadius: "6px",
      fontSize: "0.85rem",
      fontWeight: 700,
      textDecoration: "none",
      boxShadow: "var(--shadow-md)"
    }
  }, "Ieiet"))));
}
function Footer() {
  const cols = [{
    h: "Katalogs",
    links: ["RT4-5GP/GL", "RS-4000/RS-63", "Defendex 2.0", "Win SC"]
  }, {
    h: "Sistēmas",
    links: ["Globālais monitorings", "Retranslācijas tīkls", "Mazās sistēmas"]
  }, {
    h: "Uzstādītājiem",
    links: ["Portāls", "Lejuplādēt", "Atbalsts"]
  }, {
    h: "Uzņēmums",
    links: ["Par mums", "Partneri", "Kontakti"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--cx-ink)",
      padding: "64px 48px 28px",
      color: "rgba(255,255,255,.45)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1280px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2.2fr 1fr 1fr 1fr 1fr",
      gap: "40px",
      marginBottom: "48px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.png",
    alt: "CORTEX",
    style: {
      height: "48px",
      width: "auto",
      opacity: 0.9,
      marginBottom: "16px"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.81rem",
      lineHeight: 1.75,
      maxWidth: "240px",
      margin: 0
    }
  }, "Profesion\u0101las apsardzes monitoringa sist\u0113mas. Ra\u017Eo\u0161ana un atbalsts Latvij\u0101 kop\u0161 1992. gada."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      fontSize: "0.81rem"
    }
  }, /*#__PURE__*/React.createElement("span", null, "+371 67 505 603"), /*#__PURE__*/React.createElement("span", null, "info@cortex.lv"), /*#__PURE__*/React.createElement("span", null, "Liksnas iela 7, R\u012Bga, LV-1006"))), cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: "#fff",
      fontWeight: 600,
      fontSize: "0.74rem",
      textTransform: "uppercase",
      letterSpacing: "0.09em",
      marginBottom: "14px"
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0
    }
  }, c.links.map((l, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      marginBottom: "9px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "rgba(255,255,255,.4)",
      textDecoration: "none",
      fontSize: "0.8rem"
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,.07)",
      paddingTop: "22px",
      display: "flex",
      justifyContent: "space-between",
      fontSize: "0.73rem"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 SIA KORTEKS. Visas ties\u012Bbas aizsarg\u0101tas."))));
}
Object.assign(window, {
  Topbar,
  Nav,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

})();
