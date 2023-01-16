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

export const languages = [
  {
    key: "python",
    name: "Python",
    description: PYTHON_DESCRIPTION,
  },
];
