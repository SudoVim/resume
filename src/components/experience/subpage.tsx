import React from "react";
import { Subpage } from "components/utils/subpage";
import { Experience } from "./experience";

export function ExperienceSubpage() {
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
      <Experience />
    </Subpage>
  );
}
