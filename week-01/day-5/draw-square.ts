'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let i: number = 1; i <= lineCount; i++) {
  let space: string = '';
  let border: string = '';
  for (let j: number = 1; j < lineCount - 1; j++) {
    space += ' ';
  }
  for (let k: number = 1; k <= lineCount; k++) {
    border += '%';
  }
  if (i == 1 || i == lineCount) {
    console.log(border);
  } else {
    console.log('%' + space + '%');
  }
}