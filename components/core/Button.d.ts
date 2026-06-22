import React from "react";

export type ButtonVariant = "cyan" | "primary" | "secondary" | "outline" | "ghost" | "white";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Visual style. `cyan` is the signature CTA; `outline`/`ghost` are for dark backgrounds. @default "cyan" */
  variant?: ButtonVariant;
  /** @default "md" */
  size?: ButtonSize;
  /** Render as a different element, e.g. "a". @default "button" */
  as?: "button" | "a";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
}

/**
 * CORTEX action button. Six brand variants, three sizes.
 * @startingPoint section="Core" subtitle="Buttons in every brand variant" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
