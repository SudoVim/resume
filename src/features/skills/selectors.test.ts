import { selectors } from "./selectors";

describe("test selectors.skillsByKey", () => {
  it("does nothing with no inputs", () => {
    const skills = [];
    const skillsByKey = selectors.skillsByKey.resultFunc(skills);
    expect(skillsByKey).toEqual({});
  });
  it("organizes the data properly", () => {
    const skills = [{ key: "skill-key" }, { key: "other-skill-key" }];
    const skillsByKey = selectors.skillsByKey.resultFunc(skills);
    expect(skillsByKey).toEqual({
      "skill-key": { key: "skill-key" },
      "other-skill-key": { key: "other-skill-key" },
    });
  });
});
