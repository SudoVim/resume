import React from "react";
import { Typography } from "@mui/material";
import { Responsibilities } from "./responsibilities";
import { Role as RoleType } from "features/experience/types";
import { EventTitle } from "components/utils";

type Props = {
  role: RoleType;
};

export function Role({ role }: Props) {
  const { name, tenure, description, responsibilities } = role;
  return (
    <>
      <EventTitle event={name} tenure={tenure} />
      {description ? (
        <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
          {description}
        </Typography>
      ) : null}
      {responsibilities ? (
        <Responsibilities responsibilities={responsibilities} />
      ) : null}
    </>
  );
}
