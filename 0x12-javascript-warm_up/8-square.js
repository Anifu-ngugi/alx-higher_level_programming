#!/usr/bin/node
const argum = parseInt(process.argv[2]);
if (!argum) {
  console.log('Missing size');
} else {
  for (let i = 0; i < argum; i++) {
    let row = '';
    for (let j = 0; j < argum; j++) 
    row += 'X';
    console.log(row);
  }
}
