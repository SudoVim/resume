import React from "react";
import { HC, Subpage } from "components/utils";
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
      <HC>
        <ExperienceList />
      </HC>
    </Subpage>
  );
}
