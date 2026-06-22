import React from "react";

/**
 * CORTEX Input — labelled text field matching the site forms.
 * Sky focus ring, hairline border, optional error state.
 */
export function Input({
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

  return (
    <div style={{ marginBottom: "var(--sp-lg, 24px)" }}>
      {label && (
        <label
          htmlFor={fieldId}
          style={{
            display: "block",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "var(--fs-base, 0.92rem)",
            color: "var(--cx-tx, #1A1A2E)",
            marginBottom: "var(--sp-sm, 8px)",
          }}
        >
          {label}
        </label>
      )}
      <input
        id={fieldId}
        type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: "100%",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--fs-base, 0.92rem)",
          color: "var(--cx-tx, #1A1A2E)",
          padding: "12px 16px",
          background: "var(--cx-white, #fff)",
          border: `1px solid ${
            error ? "var(--cx-danger, #DC2626)" : focus ? "var(--cx-sky, #2196F3)" : "var(--cx-bd2, #E1F0FB)"
          }`,
          borderRadius: "var(--r-md, 8px)",
          outline: "none",
          boxShadow: focus && !error ? "0 0 0 3px var(--focus-ring, rgba(33,150,243,0.18))" : "none",
          transition: "border-color var(--t-fast,150ms), box-shadow var(--t-fast,150ms)",
          ...style,
        }}
        {...rest}
      />
      {error && (
        <div style={{ color: "var(--cx-danger, #DC2626)", fontSize: "var(--fs-sm, 0.82rem)", marginTop: "var(--sp-xs, 4px)" }}>
          {error}
        </div>
      )}
      {hint && !error && (
        <div style={{ color: "var(--cx-tm, #546E7A)", fontSize: "var(--fs-sm, 0.82rem)", marginTop: "var(--sp-xs, 4px)" }}>
          {hint}
        </div>
      )}
    </div>
  );
}
