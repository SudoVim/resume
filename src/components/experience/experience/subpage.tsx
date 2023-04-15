import React from "react";
import { useSelector } from "react-redux";
import { Subpage, HC, HW, Column, Essay } from "components/utils";
import { useParams } from "react-router-dom";
import { selectors } from "features";
import { Experience } from "./experience";

export function ExperienceSubpage() {
  const params = useParams();
  const experienceByKey = useSelector(selectors.experience.experienceByKey);

  const { experienceKey } = params;
  if (!experienceKey) {
    throw new Error(`experience ${experienceKey} not found`);
  }

  const experience = experienceByKey[experienceKey];
  if (!experience) {
    throw new Error(`experience ${experienceKey} not found`);
  }

  const { essay } = experience;
  return (
    <Subpage
      title={experience.company}
      breadcrumbs={[
        {
          name: "Resume",
          to: "/",
        },
        {
          name: "Experience",
          to: "/experience",
        },
        {
          name: experience.company,
        },
      ]}
    >
      <HC>
        <HW width="800px">
          <Column>
            <Experience experienceKey={experienceKey} showSkills />
            {essay ? <Essay>{essay}</Essay> : null}
          </Column>
        </HW>
      </HC>
    </Subpage>
  );
}
