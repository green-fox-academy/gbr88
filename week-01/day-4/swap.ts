'use strict';

/*
// Swap the values of these variables
let a: number = 123;
let b: number = 526;

console.log(a);
console.log(b);

*/

let a: number = 123;
let b: number = 526;
b = [a, a=b][0];

console.log(a);
console.log(b);