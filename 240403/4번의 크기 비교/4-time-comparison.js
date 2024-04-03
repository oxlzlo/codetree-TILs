const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const a = input.shift()
const [b, c, d, e] = input.toString().split(' ');

if (a > b) {
    console.log(1)
} else {
    console.log(0)
}

if (a > c) {
    console.log(1)
} else {
    console.log(0)
}

if (a > d) {
    console.log(1)
} else {
    console.log(0)
}

if (a > e) {
    console.log(1)
} else {
    console.log(0)
}