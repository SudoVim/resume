import React from "react";
import { Responsibilities } from "./responsibilities";
import { Role as RoleType } from "features/experience/types";
import { EventTitle, Essay } from "components/utils";

type Props = {
  role: RoleType;
};

export function Role({ role }: Props) {
  const { name, tenure, description, responsibilities } = role;
  return (
    <>
      <EventTitle event={name} tenure={tenure} />
      {description ? <Essay>{description}</Essay> : null}
      {responsibilities ? (
        <Responsibilities responsibilities={responsibilities} />
      ) : null}
    </>
  );
}
