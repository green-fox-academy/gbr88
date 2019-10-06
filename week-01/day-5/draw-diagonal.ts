
'use strict';

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let i: number = 1; i <= lineCount; i++) {
  let spaceLeft: string = '';
  let spaceRight: string = '';
  let border: string = '';
  for (let j: number = 2; j < i; j++) {
    spaceLeft += ' ';
  }
  for (let k: number = 1; k < lineCount - i; k++) {
    spaceRight += ' ';
  }
  for (let l: number = 1; l <= lineCount; l++) {
    border += '%';
  }
  if (i == 1 || i == lineCount) {
    console.log(border);
  } else {
    console.log('%' + spaceLeft + '%' + spaceRight + '%');
  }
}