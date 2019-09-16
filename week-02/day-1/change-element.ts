'use strict';
// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

var numList:number[] = [1, 2, 3, 8, 5, 6];



var test:number[] = numList.map(x => x / 2);

console.log(test[3]);