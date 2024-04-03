const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const a = input.shift()
const [b, c, d, e] = input.toString().split(' ');

a > b ? console.log(1) : console.log (0)
a > c ? console.log(1) : console.log (0)
a > d ? console.log(1) : console.log (0)
a > e ? console.log(1) : console.log (0)