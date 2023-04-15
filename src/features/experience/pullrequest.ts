const PULLREQUEST_DESCRIPTION = `
Lead many different development efforts in order to expand the PullRequest
product line and to ensure both the reliability and scalability of the service
as it grows and finds market fit.
`;

const PULLREQUEST_ESSAY = `
I first started at PullRequest in April of 2019. It was my first web services
company, and I got the job due to my infrastructure and testing work at IBM and
Texas Memory Systems. The company itself serves as a marketplace tying
customers who need code reviewed to subject matter experts who have experience
writing and reviewing code. Once at PullRequest, I had a handful of major
assignments with a smattering of smaller assignments spread throughout.

My first big project was to take the On-Premise Proxy and extend it to support
more code providers than just Bitbucket Server. The On-Premise Proxy is a
service running in a customer's secure network that facilitates the PullRequest
application without needing PullRequest to be able to talk to the code
provider. While working on this project, I added support for GitLab
Self-Managed, GitHub Enterprise, and Azure DevOps Server. All while I was
adding these services, I also worked on consolidating the provider interface
code between this proxy service and the web application into one service with a
grpc interface that I called providerservice. This is the code that is now used
for both our web application and our On-Premise Proxy. I also did the same for
our diff interface which deals with the code repositories directly. This
functionality was spun off into its own distributed service called diffservice.

Because I cannot be sated by simply working on a single service, I have also
contributed extensively to our web application and the customer and reviewer
web clients. The web application is written in PHP, in which I had no prior
experience. However, I learned fairly quickly the pitfalls of the language. I'm
still continuing to discover caveats that could cause problems.

In terms of the web clients, I already had experience with React and
JavaScript, but I was able to learn some useful utilities for extending React
in a more testable way like Redux and Redux Sagas. At this point, I wouldn't
consider starting a React project without those two, and I'm continuing to
improve their usage in our own product. In addition, I was able to learn
TypeScript in order to add more type safety, and honestly, to be able to find
issues before running the code using eslint.

I have always been good at integrating different services together. Toward that
end, I lead the design and implementation of our qualified.dev product, which
we used in order to facilitate technical screenings for software engineering
candidates for roles at our customers' companies. The service itself served as
the first "customer" service of our PullRequest application in that it had its
own authentication mechanism that would be used to interact with its own API.

For the above qualified.dev application, I also developed our integration with
the Greenhouse service so that customers can automatically send problems to
their candidates when they reach a certain stage of the pipeline. I also
developed the GitHub Marketplace integration for our PullRequest application.
Using the marketplace, customers can sign up for our code review services and
get billed through GitHub.

One of my largest projects at PullRequest was to take our Amazon Web Services
(AWS) infrastructure from a few static instances created through the management
console and turn it into an Infrastructure as Code (IaC) project. I was able to
devise a system that would automatically scale out and in instances when
needed, would deploy code, and would recycle instances once per day in order to
pull in security updates so that I can work on other projects and not bother
constantly maintaining it. If there were any issues, I would be notified of
them and would be able to act swiftly to fix the problem.
`;

export const pullrequest = {
  key: "pullrequest",
  company: "PullRequest",
  title: "Senior Software Engineer",
  tenure: "April 2019 - Acquired April 2022",
  description: PULLREQUEST_DESCRIPTION,
  responsibilities: [
    `ensured that any code that was shipped for the project was of the
highest quality`,
    `developed new products and integrations like the on-premise proxy and
Azure DevOps`,
    `developed and maintained our cloud infrastructure and its code stack`,
    `refactored much of the internal application code to be more scalable
and maintainable`,
  ],
  skills: ["typescript", "golang", "python", "linux", "docker", "aws"],
  essay: PULLREQUEST_ESSAY,
};
