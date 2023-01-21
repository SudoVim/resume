import React from "react";
import { Subpage } from "components/utils/subpage";
import { Props } from "./subpage";
import { HorizontalCenter, HorizontalWidth } from "../horizontal";

export function EssaySubpage(props: Props) {
  const children = (
    <HorizontalCenter>
      <HorizontalWidth width="600px">{props.children}</HorizontalWidth>
    </HorizontalCenter>
  );
  return <Subpage {...props}>{children}</Subpage>;
}
