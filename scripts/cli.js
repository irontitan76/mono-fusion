#!/usr/bin/env node
const lint = require('./lint.js');
const test = require('./test.js');

const spawn = require('child_process').spawn

const [,, ...args] = process.argv;

if (args[0] === 'run') {
  const child = spawn(`cd sites/ && npm run dev:${args[0]}`, { shell: true, stdio: 'inherit' });

  child.on('exit', function (exitCode) {
    console.info("Child exited with code: " + exitCode);
  });
}

if (args[0] === 'lint') {
  lint.linter();
}

if (args[0] === 'test') {
  test.tester();
}