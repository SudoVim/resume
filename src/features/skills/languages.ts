const PYTHON_DESCRIPTION = `
I taught myself Python in college during my Algorithms class and ended up
translating much of the work that I did for that class from Java, which is what
we were required to use, to Python. I just found it a much slicker and easier
to use language as it doesn't have near the same amount of hamfisted structure
as Java.

My knowledge of Python is what brought me to my first assignment at Texas
Memory Systems, which was to build out regressions tests. The testing platform
was written in Python using nose to run tests against a simulated version of
our embedded software stack.

Since then, and even after the acquisition by IBM, I expanded the testing
infrastructure into different components of the system and redesigned the
framework numerous times - culminating in a single Django web application
coordinating what I call "integration" tests against hundreds of our production
systems running different iterations of hardware and software and reporting
results from all of them.

Since IBM, I've continued to use Python for integration testing, data
analaysis, and for developing web applications using the Django framework.
`;

const GOLANG_DESCRIPTION = `
When I was hired by PullRequest, I had not used Golang (Go) at all, but my
first assignment was to expand the provider support of our on-premise proxy to
include on-premise code providers other than Bitbucket Server. While at
PullRequest, I not only expanded our on-premise proxy to support GitLab
Self-Managed, GitHub Enterprise, but also Azure DevOps Server.

In addition, I spun off much of the low-level functionality from our
application webserver into microservices written in Golang, all of which were
bits of functionality spun off of the on-premise proxy.

Since then, I've largely used the language to maintain those services as they
function very reliably and don't require much work except to support new
features.
`;

const TYPESCRIPT_DESCRIPTION = `
TypeScript is probably the "newest" of the languages that I've learned. I've
been using JavaScript in its various incarnations since my early days at Texas
Memory Systems from when I was maintaining our internal parts database to when
I was developing experimental React apps to compare errors from failure reports
across hundreds of systems.

It wasn't until I was working at PullRequest that I had started transitioning
away from JavaScript toward TypeScript. While TypeScript is strongly typed,
which is a huge benefit from the typical interpreted programming language, you
definitely start hitting the drawback of the rigid type definitions. The often
esoteric error messages don't help, either. What else did you expect from
Microsoft?

However, it's a huge step in the right direction for web clients, and it's a
necessecity when leveraging the powerful frameworks in the React family.
`;

const C_DESCRIPTION = `
No list of skills would be complete without C. While Basic for my TI-83+
calculator was technically my first programming language, and Java was a close
second during High School Computer Science, C was the language that I used most
during my time at The University of Texas at Austin.

In addition, it's one of the languages that I used most during my time at
Texas Memory Systems and IBM FlashSystems as the management stack of the
RamSan and then the FlashSystem were both written in C. And even the parts that
were written in Python had C under the hood in order to utilize shared
libraries and to increase the efficiency of our Python code.

I haven't written a line of C in years, but I miss it sometimes. The closest
that I get nowadays is Golang, but sometimes I yearn for the unfettered freedom
to shoot yourself in the foot that C offers.
`;

export const languages = [
  {
    key: "python",
    name: "Python",
    description: PYTHON_DESCRIPTION,
  },
  {
    key: "golang",
    name: "Go",
    description: GOLANG_DESCRIPTION,
  },
  {
    key: "typescript",
    name: "TypeScript",
    description: TYPESCRIPT_DESCRIPTION,
  },
  {
    key: "c",
    name: "C",
    description: C_DESCRIPTION,
  },
];
