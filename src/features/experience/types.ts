export type Role = {
  name: string;
  tenure?: string;
  description?: string;
  skills?: string[];
  responsibilities?: string[];
};

export type Experience = {
  key: string;
  company: string;
  tenure: string;
  title?: string;
  description?: string;
  responsibilities?: string[];
  roles?: Role[];
  essay?: string;
};
