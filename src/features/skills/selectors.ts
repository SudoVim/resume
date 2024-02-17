import { Skill, SkillsByKey } from "./types";
import { languages } from "./languages";
import { frameworks } from "./frameworks";
import { devops } from "./devops";
import { createSelector } from "@reduxjs/toolkit";
import { State } from "features/types";

export const skills: Skill[] = [...languages, ...frameworks, ...devops];

const getSkills = (state: State) => skills;

const getSkillsByKey = createSelector(getSkills, (skills: Skill[]) => {
  const ret: SkillsByKey = {};
  for (const skill of skills) {
    ret[skill.key] = skill;
  }

  return ret;
});

export const selectors = {
  skills: getSkills,
  skillsByKey: getSkillsByKey,
};
