const IBM_FLASHSYSTEMS_DESCRIPTION = `
IBM acquired Texas Memory Systems and the Texas Memory Systems team. Here, I
worked in all aspects of the day-to-day at IBM FlashSystems and succeeded at
not only improving the product itself but also our core infrastructure, release
cycles, and regression testing.
`;

export const ibm_flashsystems = {
  key: "ibm_flashsystems",
  company: "IBM FlashSystems",
  tenure: "January 2013 - April 2019",
  description: IBM_FLASHSYSTEMS_DESCRIPTION,
  skills: ["c", "python", "linux", "docker"],
  roles: [
    {
      name: "Senior Software Infrastructure Engineer",
      tenure: "February 2014 - April 2019",
      responsibilities: [
        `designed and implemented distributed system for digesting and
analyzing product debug data`,
        `architected management software infrastructure for FlashSystems and
communicated their effective use through code review and documentation`,
        `created and organized release cycles around new features and bugs to
tighten the feedback loop between test and development`,
        `drove integration efforts in order to use FlashSystem as a component
of larger products`,
      ],
    },
    {
      name: "Software Engineer - DevOps",
      tenure: "January 2013 - February 2014",
      responsibilities: [
        "constructed automated build pipeline",
        `created and maintained distributed, scalable test engine for which I
received an award`,
        "designed and implemented an expandable, flexible, testing harness",
      ],
    },
  ],
};
