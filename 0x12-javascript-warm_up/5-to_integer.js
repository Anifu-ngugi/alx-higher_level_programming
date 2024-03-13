#!/usr/bin/node
const process = require('process');
const argum1 = process.argv[2];
if (process.argv.length === 2) {
  console.log('Not a number');
} else {
  console.log('My number:', parseInt(argum1));
}
