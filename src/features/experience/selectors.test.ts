import { describe, it, expect } from "vitest";
import { selectors } from "./selectors";

describe("test selectors.experienceKeys", () => {
  it("has no experiences", () => {
    const experience = [];
    const experienceKeys = selectors.experienceKeys.resultFunc(experience);
    expect(experienceKeys).toEqual([]);
  });
  it("organizes experience properly", () => {
    const experience = [
      {
        key: "some-key",
      },
    ];
    const experienceKeys = selectors.experienceKeys.resultFunc(experience);
    expect(experienceKeys).toEqual(["some-key"]);
  });
});

describe("test selectors.experienceByKey", () => {
  it("has no experiences", () => {
    const experience = [];
    const experienceKeys = selectors.experienceByKey.resultFunc(experience);
    expect(experienceKeys).toEqual({});
  });
  it("organizes experiences properly", () => {
    const experience = [{ key: "some-key" }, { key: "some-other-key" }];
    const experienceByKey = selectors.experienceByKey.resultFunc(experience);
    expect(experienceByKey).toEqual({
      "some-key": { key: "some-key" },
      "some-other-key": { key: "some-other-key" },
    });
  });
});

describe("test selectors.skillsByExperienceKey", () => {
  it("has no experiences", () => {
    const experience = [];
    const skillsByKey = {};
    const skillsByExperienceKey = selectors.skillsByExperienceKey.resultFunc(
      experience,
      skillsByKey,
    );
    expect(skillsByExperienceKey).toEqual({});
  });
  it("has no skills", () => {
    const experience = [{ key: "some-key" }];
    const skillsByKey = {};
    const skillsByExperienceKey = selectors.skillsByExperienceKey.resultFunc(
      experience,
      skillsByKey,
    );
    expect(skillsByExperienceKey).toEqual({});
  });
  it("throws an error if the desired skill does not exist", () => {
    const experience = [
      {
        key: "some-key",
        skills: ["some-skill"],
      },
    ];
    const skillsByKey = {};
    expect(() => {
      selectors.skillsByExperienceKey.resultFunc(experience, skillsByKey);
    }).toThrow("Skill some-skill not found in experience some-key.");
  });
  it("organizes the skills properly", () => {
    const experience = [
      {
        key: "some-key",
        skills: ["some-skill"],
      },
      {
        key: "some-other-key",
        skills: ["some-skill"],
      },
    ];
    const skillsByKey = {
      "some-skill": { skill: "data" },
    };
    const skillsByExperienceKey = selectors.skillsByExperienceKey.resultFunc(
      experience,
      skillsByKey,
    );
    expect(skillsByExperienceKey).toEqual({
      "some-key": [{ skill: "data" }],
      "some-other-key": [{ skill: "data" }],
    });
  });
});
