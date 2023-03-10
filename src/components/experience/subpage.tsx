import React from "react";
import { HC, HW, Subpage } from "components/utils";
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
        <HW width="800px">
          <ExperienceList />
        </HW>
      </HC>
    </Subpage>
  );
}
