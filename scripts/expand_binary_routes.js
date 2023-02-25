#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const BUILD_DIR = 'build/';
const INDEX_FILENAME = 'index.html';
const INDEX_FILEPATH = path.join(BUILD_DIR, INDEX_FILENAME);

function createCopy(destPath, filename) {
  const dir = path.join(BUILD_DIR, destPath);
  fs.mkdir(dir, (err) => {});

  const destFilepath = path.join(dir, filename || INDEX_FILENAME);
  fs.copyFile(INDEX_FILEPATH, destFilepath, (err) => {
    if (err) {
      throw err;
    }

    console.log(`Created ${destFilepath}`);
  });
}

createCopy('.', '404.html');
createCopy('summary');
