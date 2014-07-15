#!/usr/bin/env node

// Useful things
var args = require('minimist')(process.argv.slice(2));
var colours = require('./colours');
var program = require('commander');

// These are the things shaq can do
var skillz = require('./skillz')(colours);

program
  .version(require('../package.json').version)
  .option('hello', 'Say hello')
  .parse(process.argv);

if (program.hello) {
  skillz.hello();
} else {
  program.help();
}
