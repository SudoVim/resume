import React from "react";
import { EssaySubpage } from "components/utils/subpage";
import { Summary } from "./summary";

export function SummarySubpage() {
  return (
    <EssaySubpage
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
    </EssaySubpage>
  );
}
