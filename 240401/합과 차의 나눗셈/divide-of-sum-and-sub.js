const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const a = input[0];
const b = input[1];

console.log(Math.ceil((a+b)/(a-b)).toFixed(2))