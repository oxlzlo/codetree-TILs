const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('-');

let x = input[1];
let y = input[2];

let newResult = [input[0], x, y] = [input[0], y, x];

console.log(newResult.join('-'))