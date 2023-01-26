import React from "react";
import { Subpage, ExternalLink } from "components/utils";
import { Mastermind } from "./mastermind";

export function MastermindSubpage() {
  return (
    <Subpage
      title={
        <ExternalLink href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">
          Mastermind
        </ExternalLink>
      }
      breadcrumbs={[
        {
          name: "Resume",
          to: "/",
        },
        {
          name: "Mastermind",
        },
      ]}
    >
      <Mastermind />
    </Subpage>
  );
}
