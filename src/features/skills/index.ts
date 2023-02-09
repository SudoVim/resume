import { Skill } from "./skill";
import { languages } from "./languages";
import { devops } from "./devops";
import { createSelector } from "@reduxjs/toolkit";

export const skills: Skill[] = [...languages, ...devops];

const skillsByKey = createSelector(() => {
  const ret: Record<string, Skill> = {};
  for (const skill of skills) {
    ret[skill.key] = skill;
  }

  return ret;
});

export const selectors = {
  skillsByKey,
};
