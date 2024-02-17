import React from "react";
import { Subpage } from "components/utils/subpage";
import { Props } from "./subpage";
import { HorizontalCenter } from "../horizontal";

export function EssaySubpage(props: Props) {
  const children = <HorizontalCenter>{props.children}</HorizontalCenter>;
  return <Subpage {...props}>{children}</Subpage>;
}
