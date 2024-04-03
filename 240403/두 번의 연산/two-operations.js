const fs = require('fs');
const input = fs.readFileSync(0).toString();

const a = parseInt(input);

let answer = a;

if (a%2 !== 0) {
    answer += 3
}
if (answer%3 == 0) {
    answer/=3
}

console.log(answer)