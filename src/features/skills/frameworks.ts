const DJANGO_DESCRIPTION = `
I have over a decade of experience with Django, beginning a few years into my
tenure at Texas Memory Systems/IBM. There, I initiated the development of a
centralized webserver to orchestrate regression test runs and log their
outcomes. This project marked my first experience in leveraging a modern web
framework for application development. Impressively, the application I
developed continues to be utilized by the IBM FlashSystems group.

Since then, my portfolio has expanded to include numerous Django applications,
ranging from personal passion projects to the qualified.dev application
employed by PullRequest. Prior to its acquisition by HackerOne, qualified.dev
was instrumental for dozens of companies, facilitating their technical
assessments for prospective hires through integrations with platforms like
Greenhouse. Unfortunately, the application was phased out following a strategic
pivot by the business.
`;

const REACT_DESCRIPTION = `
In the latter part of my tenure at IBM, I began exploring emerging
technologies, including React—during a time when React necessitated the use of
class components, and lifecycle methods were integral to component logic.

Transitioning to PullRequest, my foundational React knowledge enabled me to
seamlessly integrate into the development of various client-facing
applications. Throughout my time there, I witnessed and contributed to the
evolution of our platform, adapting from classical React components to
embracing the efficiency and simplicity of React hooks.

Today, React has become an indispensable part of my web development toolkit.
Despite its imperfections, the addition of libraries like Redux and middleware
like Redux Sagas has significantly amplified its capabilities, making it an
exceptionally powerful framework for modern web development.
`;

export const frameworks = [
  {
    key: "django",
    name: "Django",
    description: DJANGO_DESCRIPTION,
  },
  {
    key: "react",
    name: "React",
    description: REACT_DESCRIPTION,
  },
];
