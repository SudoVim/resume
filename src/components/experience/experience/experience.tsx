import React from "react";
import { useSelector } from "react-redux";
import { Link, Column, EventTitle, Essay } from "components/utils";
import { Role } from "./role";
import { selectors } from "features";
import { Responsibilities } from "./responsibilities";
import { Skills } from "components/skills";
import { State } from "features/types";

type Props = {
  experienceKey: string;
  showSkills?: boolean;
};

export function Experience({ experienceKey, showSkills }: Props) {
  const experience = useSelector(selectors.experience.experienceByKey)[
    experienceKey
  ];
  const skills = useSelector((state: State) =>
    selectors.experience.skillsForExperienceKey(state, experienceKey)
  );
  if (!experience) {
    throw new Error(`experience ${experienceKey} not found`);
  }

  const { key, company, tenure, title, description, responsibilities, roles } =
    experience;
  return (
    <Column>
      <Link to={`/experience/${key}`}>
        <Column>
          <EventTitle event={company} tenure={tenure} bold />
          {title ? <EventTitle event={title} /> : null}
          {skills && showSkills ? <Skills skills={skills} /> : null}
        </Column>
      </Link>
      {description ? <Essay>{description}</Essay> : null}
      {responsibilities ? (
        <Responsibilities responsibilities={responsibilities} />
      ) : null}
      {roles?.map((role, i) => (
        <Role key={i} role={role} />
      ))}
    </Column>
  );
}
