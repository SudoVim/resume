const LINUX_DESCRIPTION = `
I hadn't really touched Linux (or UNIX) until I started working at Texas Memory
Systems. Until then, I knew how to use Putty to SSH into the Solaris systems at
UT. Once in, I knew a few console commands, but more importantly, I knew how to
launch the Cadence suite of tools, which ran very slowly remotely.

Once at TMS, Linux was ubiquitous. When I started, we each had RedHat 5
workstations connected to the company intranet. We didn't have laptops. Or
internet at our desks. Funny enough, each workstation was like every other one,
and anybody could log into anybody else's as the company's Active Directory was
used as the authentication source.

At any rate, once immersed in the operating system, you learn pretty quickly.
At this point, I can hardly use anything else. I've been forced to use MacOS at
HackerOne, but it's a small shim layer between me and the terminal or web
browser that I need to do my job. If I had my way, I'd just run these
applications in Linux.

At TMS, and then IBM, I learned all the ins and outs of the operating system
and the services therein - systemd, rsyslogd, etc. I had even created my
own installation media for a project by building my own boot image that could
partition the drive, copy my .rpm files over, install a release using yum, and
reboot the system into the installed release. And if the user got into trouble,
I had created my own recovery media using dracut that would simply blow away
all but the .rpm files and user data and re-install the system files all over
again.

All of this is more advanced stuff, but what's more relevant today with
containerized builds and cloud instances is to simply get an existing Linux
distribution to run your code. Easy.
`;

const DOCKER_DESCRIPTION = `
Docker is a tool that I've been using since its infancy. Before we started
using Docker, we were using chroot in order to build binaries against our
system's environment. These binaries had to be downloaded from our fileserver,
which typically took a very long time. In addition, it had way more stuff than
was really needed.

One of our engineers at IBM had started playing with Docker, and it caught on
very quickly. Rather than download these all of the build files that we needed,
we simply had to download piecemeal docker images, which were all layered on
top of each other. If the build image was updated, the update would simply be
a new layer - drastically cutting down on what needed downloading.

Now, Docker is heavily used on the HackerOne Code Review team. Not only are our
builds completed using Docker wrapped in in GitHub Actions, our development
environment also uses the tool. However, rather than download piecemeal
updates like at IBM, we simply build our own development environments against
our Dockerfile. It's much easier when you don't have to build your own
operating system from scratch.
`;

const AWS_DESCRIPTION = `
I've used Amazon Web Services (AWS) very extensively at PullRequest and now
HackerOne. I took our old infrastructure, which was comprised of a few static
instances that had been running for years and turned it into an Infrastructure
as Code (IaC) project that gets deployed automatically and ensures that
instances don't live too long and receive security updates periodically.
`;

export const devops = [
  {
    key: "linux",
    name: "Linux",
    description: LINUX_DESCRIPTION,
  },
  {
    key: "docker",
    name: "Docker",
    description: DOCKER_DESCRIPTION,
  },
  {
    key: "aws",
    name: "AWS",
    description: AWS_DESCRIPTION,
  },
];
