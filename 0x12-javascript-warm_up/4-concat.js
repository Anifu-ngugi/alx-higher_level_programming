#!/usr/bin/node
const process = require('process');
const [, , arg1, arg2] = process.argv;
if (arg1 === undefined) {
  console.log('undefined is undefined');
} else {
  console.log(`${arg1} is ${arg2}`);
}
