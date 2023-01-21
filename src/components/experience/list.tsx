import React from "react";
import { useSelector } from "react-redux";
import { Experience } from "./experience";
import { Column } from "components/utils";
import { selectors } from "features";

export function ExperienceList() {
  const experience = useSelector(selectors.experience.experienceKeys);
  return (
    <Column>
      {experience.map((expKey) => (
        <Experience key={expKey} experienceKey={expKey} />
      ))}
    </Column>
  );
}
