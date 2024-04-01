const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (a>b) {
    console.log(a*b);
} else {
    console.log(Math.floor(b/a));
}