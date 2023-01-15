import React from "react";
import { Subpage } from "components/utils/subpage";
import { Skills } from "./skills";

export function SkillsSubpage() {
  return (
    <Subpage
      title="Skills"
      breadcrumbs={[
        {
          name: "Resume",
          to: "/",
        },
        {
          name: "Skills",
        },
      ]}
    >
      <Skills />
    </Subpage>
  );
}
