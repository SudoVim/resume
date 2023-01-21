import React from "react";
import { useSelector } from "react-redux";
import { Subpage, HorizontalCenter, HorizontalWidth } from "components/utils";
import { useParams } from "react-router-dom";
import { selectors } from "features";
import { Experience } from "./experience";

export function ExperienceSubpage() {
  const params = useParams();
  const experienceByKey = useSelector(selectors.experience.experienceByKey);

  const { experienceKey } = params;
  if (!experienceKey) {
    return null;
  }

  const experience = experienceByKey[experienceKey];
  if (!experience) {
    return null;
  }

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
      <HorizontalCenter>
        <HorizontalWidth width="800px">
          <Experience experienceKey={experienceKey} />
        </HorizontalWidth>
      </HorizontalCenter>
    </Subpage>
  );
}
