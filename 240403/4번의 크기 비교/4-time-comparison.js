const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const a = input.shift()
const nums = input.toString().split(' ');

const b = Number(nums[0]);
const c = Number(nums[1]);
const d = Number(nums[2]);
const e = Number(nums[3]);

console.log(a > b ? 1 : 0);
console.log(a > c ? 1 : 0);
console.log(a > d ? 1 : 0);
console.log(a > e ? 1 : 0);