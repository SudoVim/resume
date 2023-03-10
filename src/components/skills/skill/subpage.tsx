import React from "react";
import { useSelector } from "react-redux";
import { EssaySubpage } from "components/utils/subpage";
import { useParams } from "react-router-dom";
import { selectors } from "features";
import { Skill } from "./skill";

export function SkillSubpage() {
  const params = useParams();
  const skillsByKey = useSelector(selectors.skills.skillsByKey);

  const { skillKey } = params;
  if (!skillKey) {
    throw new Error(`skill ${skillKey} not found`);
  }

  const skill = skillsByKey[skillKey];
  if (!skill) {
    throw new Error(`skill ${skillKey} not found`);
  }

  return (
    <EssaySubpage
      title={skill.name}
      breadcrumbs={[
        {
          name: "Resume",
          to: "/",
        },
        {
          name: "Skills",
          to: "/skills",
        },
        {
          name: skill.name,
        },
      ]}
    >
      <Skill skillKey={skillKey} />
    </EssaySubpage>
  );
}
