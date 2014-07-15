#!/usr/bin/env node

// Useful things
var args = require('minimist')(process.argv.slice(2));
var colours = require('./colours');

// These are the things shaq can do
var skillz = require('./skillz')(colours);

if (args.help || args.h) {
  skillz.help();
}
else {
  skillz.sayHi();
}
