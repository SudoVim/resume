import React from "react";
import { experience } from "features/experience";
import { Item } from "./item";
import { Column } from "components/utils";

export function ExperienceList() {
  return (
    <Column>
      {experience.map((exp) => (
        <Item key={exp.key} experience={exp} />
      ))}
    </Column>
  );
}
