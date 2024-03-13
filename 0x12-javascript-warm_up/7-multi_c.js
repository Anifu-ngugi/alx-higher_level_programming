#!/usr/bin/node
const argum = parseInt(process.argv[2])
if (!argum){
console.log('Missing number of occurences');
} else {
  for(let i = 0; i < argum; i++) {
     console.log('C is fun');
 }
}
