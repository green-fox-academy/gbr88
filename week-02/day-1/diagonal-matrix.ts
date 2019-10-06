'use strict';

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let size = 4;
let arr: number[] = [];
let matrix: number[][] = [];

for (let i = 0; i < size; i++) {
  arr = [];
  matrix.push(arr);
  for (let j = 0; j < size; j++) {
    if (i == size - j - 1) {
      arr.push(1);
    } else {
      arr.push(0);
    };
  };
};

console.log(matrix.join('\n'));