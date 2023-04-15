import React from "react";
import { useSelector } from "react-redux";
import { Experience } from "./experience";
import { Column } from "components/utils";
import { selectors } from "features";

type Props = {
  showSkills?: boolean;
};

export function ExperienceList({ showSkills }: Props) {
  const experience = useSelector(selectors.experience.experienceKeys);
  return (
    <Column spacing={4}>
      {experience.map((expKey) => (
        <Experience
          key={expKey}
          experienceKey={expKey}
          showSkills={showSkills}
        />
      ))}
    </Column>
  );
}
