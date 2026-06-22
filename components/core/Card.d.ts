import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Use the pale frost fill (for cards sitting on white sections). @default false */
  tinted?: boolean;
  /** Enable the lift + cyan-border hover effect. @default true */
  hover?: boolean;
  /** Override the default padding. */
  padding?: string;
}

/**
 * Surface card — white, hairline border, soft shadow, hover lift.
 * @startingPoint section="Core" subtitle="Surface card with hover lift" viewport="700x240"
 */
export function Card(props: CardProps): JSX.Element;
