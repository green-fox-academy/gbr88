'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i: number = 1; i <= lineCount; i++) {
  let stars: string = "";
  for (let j: number = i; j < lineCount; j++) {
    stars += " ";
  }
  for (let k: number = 0; k < (i * 2) - 1; k++) {
    stars += "*";
  }
  console.log(stars);
}