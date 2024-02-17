import React from "react";
import { Subpage, HC } from "components/utils";
import { Education } from "./education";

export function EducationSubpage() {
  return (
    <Subpage
      title="Education"
      breadcrumbs={[
        {
          name: "Resume",
          to: "/",
        },
        {
          name: "Education",
        },
      ]}
    >
      <HC>
        <Education />
      </HC>
    </Subpage>
  );
}
