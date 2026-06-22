import React from "react";

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon node (e.g. a Lucide <i data-lucide> or inline SVG). */
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Translucent-on-navy variant for tech sections. @default false */
  onDark?: boolean;
}

/** Icon + title + description tile for solutions and app-feature grids. */
export function FeatureCard(props: FeatureCardProps): JSX.Element;
