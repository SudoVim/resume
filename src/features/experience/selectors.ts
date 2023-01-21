import { experience } from "./experience";
import { createSelector } from "reselect";
import { Experience } from "./types";

const experienceKeys = createSelector((): string[] =>
  experience.map((exp) => exp.key)
);

const experienceByKey = createSelector((): Record<string, Experience> => {
  const ret: Record<string, Experience> = {};
  for (const exp of experience) {
    ret[exp.key] = exp;
  }

  return ret;
});

export const selectors = {
  experienceKeys,
  experienceByKey,
};
