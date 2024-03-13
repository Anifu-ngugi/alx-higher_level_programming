#!/usr/bin/node
const process = require('process');
const argum1 = process.argv[2];
if (argum1 === undefined) {
  console.log('No argument');
} else {
  console.log(argum1);
}
