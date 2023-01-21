import React from "react";
import { Subpage } from "components/utils/subpage";
import { ExperienceList } from "./list";

export function ExperienceListSubpage() {
  return (
    <Subpage
      title="Experience"
      breadcrumbs={[
        {
          name: "Resume",
          to: "/",
        },
        {
          name: "Experience",
        },
      ]}
    >
      <ExperienceList />
    </Subpage>
  );
}
