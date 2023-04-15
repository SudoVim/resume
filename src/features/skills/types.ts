export type Skill = {
  key: string;
  name: string;
  description: string;
};

export type SkillsByKey = Record<string, Skill>;
