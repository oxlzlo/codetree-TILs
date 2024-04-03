const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const aAge = Number(input[0].split(' ')[0]);
const aGender = input[0].split(' ')[1];
const bAge = Number(input[1].split(' ')[0]);
const bGender = input[1].split(' ')[1];

if ((aAge>=19 && aGender=='M') || (bAge>=19 && bGender=='M')) {
    console.log(1)
} else {
    console.log(0)
}