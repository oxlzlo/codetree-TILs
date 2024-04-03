const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().split(' ');

if (a>=b) {
    console.log(1)
} else {
    console.log(0)
}

if (a>b) {
    console.log(1)
} else {
    console.log(0)
}

if (a<=b) {
    console.log(1)
} else {
    console.log(0)
}

if (a<b) {
    console.log(1)
} else {
    console.log(0)
}