import React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

/** Compact technical spec chip (e.g. "GSM/LTE", "4G") on a tinted ice background. */
export function Tag(props: TagProps): JSX.Element;
