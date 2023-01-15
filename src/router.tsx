import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Resume } from "components/resume";
import { SummarySubpage } from "components/resume/body/summary";
import { SkillsSubpage } from "components/resume/body/skills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        element: <SkillsSubpage />,
      },
    ],
  },
]);
