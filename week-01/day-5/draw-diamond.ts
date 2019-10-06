'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let half: number = (lineCount + 1) / 2;

for (let i: number = half - 1; i > -half; i--) {
  let stars: string = '';
  for (let j: number = half - Math.abs(i); j < half; j++) {
    stars += ' '
  }
  for (let k: number = 0; k < 2 * (half - Math.abs(i)) - 1; k++) {
    stars += "*";
  }
  console.log(stars);
}