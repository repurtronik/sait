import React from "react";

/**
 * CORTEX Tag — compact spec chip with a tinted ice background.
 * Used for technical attributes: "GSM/LTE", "4G", "Paradox/NX/DSC".
 */
export function Tag({ children, style, ...rest }) {
  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
