const fs = require('fs');
const input = fs.readFileSync(0).toString();

const y = parseInt(input);

if (y%4 === 0) {
    if (y%100 === 0 && y%400 !== 0) {
        return console.log(false)
    }
    return console.log(true)
} else {
    return console.log(false)
}