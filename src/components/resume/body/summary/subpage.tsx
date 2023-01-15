import React from "react";
import { Subpage } from "components/utils/subpage";
import { Summary } from "./summary";

export function SummarySubpage() {
  return (
    <Subpage
      title="Summary"
      breadcrumbs={[
        {
          name: "Resume",
          to: "/",
        },
        {
          name: "Summary",
        },
      ]}
    >
      <Summary />
    </Subpage>
  );
}
