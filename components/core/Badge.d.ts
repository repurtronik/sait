import React from "react";

export type BadgeTone =
  | "cyan" | "sky" | "indigo" | "soft"
  | "success" | "warning" | "danger" | "onDark";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** Color tone. @default "cyan" */
  tone?: BadgeTone;
  /** Prefix a status dot. @default false */
  dot?: boolean;
}

/** Small uppercase status pill (product flags, live/operational markers). */
export function Badge(props: BadgeProps): JSX.Element;
