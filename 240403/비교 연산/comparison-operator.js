const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().split(' ');

console.log(a >= b ? 1 : 0);
console.log(a > b ? 1 : 0);
console.log(a <= b ? 1 : 0);
console.log(a < b ? 1 : 0);
console.log(a == b ? 1 : 0);
console.log(a != b ? 1 : 0);