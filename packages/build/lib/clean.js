#! /usr/bin/env node
const { resolve } = require('path');
const chalk = require('chalk');
const execa = require('execa');
const Listr = require('listr');

const root = resolve(__dirname, '..', '..', '..');
const config = resolve(__dirname, '..', '..', 'system', 'prettier.config.js');
const prettier = `${root}/node_modules/.bin/prettier`;

function parseArguments() {
  const [, , ...args] = process.argv;

  if (!args) return null;

  return args[0] === 'all' ? `${root}/**/*` : args[0];
}

function fail(message) {
  throw new Error(`[ ${chalk.red('error')} ] ${message}`);
}

const steps = new Listr(
  [
    {
      title: 'Prettifying Code',
      task: () => {
        if (!parseArguments()) {
          fail('No file argument given.');
        }

        return execa.stdout(prettier, [
          '--config',
          config,
          '--ignore-path',
          resolve('./.prettierignore'),
          '--write',
          parseArguments(),
        ]);
      },
    },
  ],
  { collapse: false }
);

steps.run().catch(() => null);
