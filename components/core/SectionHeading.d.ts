import React from "react";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase eyebrow label, e.g. "Risinājumi". */
  label?: React.ReactNode;
  /** Section title (rendered as h2). */
  title?: React.ReactNode;
  /** Supporting sentence beneath the title. */
  subtitle?: React.ReactNode;
  /** Recolor for dark/navy sections. @default false */
  onDark?: boolean;
  /** @default "left" */
  align?: "left" | "center";
}

/** Eyebrow label + title + subtitle block that opens each page section. */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
