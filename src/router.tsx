import { createBrowserRouter, Outlet } from "react-router-dom";
import { App } from "./App";
import { Resume } from "components/resume";
import { SummarySubpage } from "components/summary";
import { SkillsSubpage } from "components/skills";
import { SkillSubpage } from "components/skills/skill";
import { ExperienceListSubpage } from "components/experience";
import { ExperienceSubpage } from "components/experience/experience";
import { EducationSubpage } from "components/education";
import { MastermindSubpage } from "components/mastermind";
import { Error } from "components/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Resume />,
      },
      {
        path: "summary",
        element: <SummarySubpage />,
      },
      {
        path: "skills",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <SkillsSubpage />,
          },
          {
            path: ":skillKey",
            element: <SkillSubpage />,
          },
        ],
      },
      {
        path: "experience",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <ExperienceListSubpage />,
          },
          {
            path: ":experienceKey",
            element: <ExperienceSubpage />,
          },
        ],
      },
      {
        path: "mastermind",
        element: <MastermindSubpage />,
      },
      {
        path: "education",
        element: <EducationSubpage />,
      },
    ],
  },
]);
