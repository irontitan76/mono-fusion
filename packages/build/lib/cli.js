#!/usr/bin/env node
const lint = require('./lint.js');
const test = require('./test.js');

const spawn = require('child_process').spawn;

const [, , ...args] = process.argv;

switch (args[0]) {
  case 'run':
    run();
    break;
  case 'lint':
    lint.linter()
    break;
  case 'test':
    test.tester();
    break;
  case 'deploy':
    // deploy();
    break;
}

const run = () => {
  const child = spawn(`cd sites/ && npm run dev:${args[0]}`, {
    shell: true,
    stdio: 'inherit',
  });

  child.on('exit', function(exitCode) {
    console.info('Child exited with code: ' + exitCode);
  });
}
