const fs = require('fs');
const input = fs.readFileSync(0).toString();

const y = parseInt(input);

if (y%4 === 0) {
    if (y%100 === 0) {
        console.log(false)
    }
    if (y%100 === 0 && y%400 === 0) {
        console.log(true)
    }
    console.log(true)
} else {
    console.log(false)
}