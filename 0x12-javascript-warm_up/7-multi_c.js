#!/usr/bin/node
const process = require('process')
const argum = parseInt(process.argv[2])
if (!argum){
console.log('Missing number of occurences');
}
for(let i = 0; i< argum; i++)
{
console.log('C is fun');
}

