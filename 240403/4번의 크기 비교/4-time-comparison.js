const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const a = input.shift()
const [b, c, d, e] = input.toString().split(' ');

console.log(a > b ? 1 : 0);
console.log(a > c ? 1 : 0);
console.log(a > d ? 1 : 0);
console.log(a > e ? 1 : 0);