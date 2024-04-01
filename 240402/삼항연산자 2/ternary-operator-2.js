const fs = require('fs');
const a = fs.readFileSync(0).toString();

const answer = a == 1 ? 't' : 'f';

console.log(answer)