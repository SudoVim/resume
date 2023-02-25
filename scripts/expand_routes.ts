#!/usr/bin/env -S npx ts-node -O '{"module": "commonjs"}'

// NOTE: This script is a hack around GitHub pages giving a "404" error page
// when the user tries to access a route that doesn't explicitly have a page to
// render. I initially attempted to just copy my index.html file over to the
// 404.html file to override the error page. This fixed the issue, but GitHub
// is still returning a 404 status code. This project is my attempt at hacking
// out the entire router tree with the same "index.html" file that was built.

const fs = require('fs');
const path = require('path');

const BUILD_DIR = 'build/';
const INDEX_FILENAME = 'index.html';
const INDEX_FILEPATH = path.join(BUILD_DIR, INDEX_FILENAME);

function createCopy(destPath: string, filename?: string) {
  const dir = path.join(BUILD_DIR, destPath);
  fs.mkdirSync(dir, { recursive: true });
  const destFilepath = path.join(dir, filename || INDEX_FILENAME);
  fs.copyFile(INDEX_FILEPATH, destFilepath, (err: any) => {
    if (err) {
      throw err;
    }

    console.log(`Created ${destFilepath}`);
  });
}
createCopy('.', '404.html');
createCopy('summary');

const { skills } = require('../src/features/skills');
createCopy('skills');
for (const skill of skills) {
  createCopy(path.join('skills', skill.key));
}

const { experience } = require('../src/features/experience');
createCopy('experience');
for (const singleExperience of experience) {
  createCopy(path.join('experience', singleExperience.key));
}

createCopy('mastermind');
createCopy('education');
