const fs = require('fs');
const input = fs.readFileSync(0).toString();

const n = Number(input);
let str = '';

for (let i=0; i<n; i++) {
    for (let j=1; j<=n; j++) {
        str += j;
    }
    str += '\n'
}

console.log(str)