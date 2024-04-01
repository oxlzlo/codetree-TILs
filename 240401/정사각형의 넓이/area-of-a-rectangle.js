const fs = require('fs');
const input = fs.readFileSync(0).toString();

const n = parseInt(input);

if (n>=5) {
    console.log(n*n);
} else {
    console.log(n*n);
    console.log('tiny');
}