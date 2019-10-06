'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let lineCount: number = 8;

for (let i: number = 1; i <= lineCount / 2; i++) {
  let line1: string = '% ';
  let line2: string = ' %';
  for (let j: number = 1; j < lineCount / 2; j++) {
    line1 += '% ';
    line2 += ' %';
  }
  console.log(line1 + '\n' + line2);
}