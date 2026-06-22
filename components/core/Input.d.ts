import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the input. */
  label?: string;
  /** Error message — turns the border red and shows the text below. */
  error?: string;
  /** Helper text below the field (hidden when `error` is set). */
  hint?: string;
}

/** Labelled text field with sky focus ring and error state, matching cortex.eu forms. */
export function Input(props: InputProps): JSX.Element;
