'use strict';
// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

var ai:number[] = [3, 4, 5, 6, 7];
var sum: any = (x, y) => x + y;

console.log(ai.reduce(sum));