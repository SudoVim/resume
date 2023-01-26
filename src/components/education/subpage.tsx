import React from "react";
import { Subpage, HC, HW } from "components/utils";
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
        <HW width="800px">
          <Education />
        </HW>
      </HC>
    </Subpage>
  );
}
