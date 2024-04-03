const fs = require('fs');
const input = fs.readFileSync(0).toString();

const a = parseInt(input);

if (a%3 == 0) {
    console.log('YES')
} else {
    console.log('NO')
};
if (a%5 == 0) {
    console.log('YES')
} else {
    console.log('NO')
};