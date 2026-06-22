import React from "react";
import { BadgeTone } from "../core/Badge";

export interface ProductCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** Model name shown large over the photo, e.g. "RT4-5GP/4". */
  model: string;
  /** Product title / category line. */
  title: string;
  description?: string;
  /** Product photo URL (navy-overlaid). */
  image?: string;
  /** Corner flag text, e.g. "Populārs". */
  badge?: string;
  /** @default "cyan" */
  badgeTone?: BadgeTone;
  /** Spec chips. */
  tags?: string[];
  href?: string;
}

/**
 * Catalog product tile — overlaid photo header + specs.
 * @startingPoint section="Marketing" subtitle="Catalog product tile" viewport="320x300"
 */
export function ProductCard(props: ProductCardProps): JSX.Element;
