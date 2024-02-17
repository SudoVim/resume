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

At PullRequest and HackerOne, I've continued to use Python for integration
testing, data analaysis, and for developing the now-defunct qualified.dev
application using Django.
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
TypeScript represents the most recent addition to my programming language
repertoire. My journey with JavaScript dates back to my early days at Texas
Memory Systems, where I engaged in a range of projects from maintaining our
internal parts database to developing experimental React applications to
analyze errors across numerous systems.

My transition to TypeScript began at PullRequest. The shift from JavaScript's
flexibility to TypeScript's strong typing system marked a significant change in
my development process. TypeScript's static typing offers considerable
advantages, particularly in catching errors early and ensuring code
reliability—a stark contrast to the dynamic nature of traditional interpreted
languages. However, this transition was not without its challenges. The strict
type definitions in TypeScript sometimes led to rigid constraints, and the
cryptic error messages, a somewhat notorious aspect of Microsoft's tooling,
often added a layer of complexity to debugging.

Despite these hurdles, I've come to view TypeScript as an essential step
forward for developing robust web client applications. Its integration into the
React ecosystem, in particular, underscores its value in building scalable and
maintainable applications. The language's emphasis on type safety and
predictability is indispensable, especially when working with complex
frameworks within the React family.
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
