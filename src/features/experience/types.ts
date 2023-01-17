export type Role = {
  name: string;
  tenure?: string;
  description?: string;
  responsibilities?: string[];
};

export type Experience = {
  key: string;
  company: string;
  tenure: string;
  description?: string;
  responsibilities?: string[];
  roles?: Role[];
};
