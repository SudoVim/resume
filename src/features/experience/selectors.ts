import { experience } from "./experience";
import { createSelector } from "reselect";
import { Experience } from "./types";
import { selectors as skillsSelectors } from "../skills";
import { Skill, SkillsByKey } from "../skills/types";
import { State } from "../types";

function getExperience(state: State) {
  return experience;
}

const getExperienceKeys = createSelector(
  getExperience,
  (experience: Experience[]): string[] => experience.map((exp) => exp.key),
);

const getExperienceByKey = createSelector(
  getExperience,
  (experience: Experience[]): Record<string, Experience> => {
    const ret: Record<string, Experience> = {};
    for (const exp of experience) {
      ret[exp.key] = exp;
    }

    return ret;
  },
);

const getSkillsByExperienceKey = createSelector(
  getExperience,
  skillsSelectors.skillsByKey,
  (
    experience: Experience[],
    skillsByKey: SkillsByKey,
  ): Record<string, Skill[]> => {
    const ret: Record<string, Skill[]> = {};
    for (const exp of experience) {
      const { key, skills } = exp;
      if (!skills) {
        continue;
      }

      ret[key] = skills.map((skillKey) => {
        const skill = skillsByKey[skillKey];
        if (!skill) {
          throw new Error(`Skill ${skillKey} not found in experience ${key}.`);
        }

        return skill;
      });
    }

    return ret;
  },
);

function getSkillsForExperienceKey(state: State, experienceKey: string) {
  const skillsByExperienceKey = getSkillsByExperienceKey(state);
  return skillsByExperienceKey[experienceKey];
}

export const selectors = {
  experienceKeys: getExperienceKeys,
  experienceByKey: getExperienceByKey,
  skillsByExperienceKey: getSkillsByExperienceKey,
  skillsForExperienceKey: getSkillsForExperienceKey,
};
