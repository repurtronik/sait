import React from "react";

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The big number, e.g. "10 000+", "24/7", "1992". */
  value: React.ReactNode;
  /** Muted uppercase caption beneath. */
  label: React.ReactNode;
  /** Cyan number + faded label, for dark sections. @default false */
  onDark?: boolean;
  /** @default "center" */
  align?: "left" | "center" | "right";
}

/** Headline metric — big black number over an uppercase label. */
export function Stat(props: StatProps): JSX.Element;
