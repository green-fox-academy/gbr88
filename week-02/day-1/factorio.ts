'use strict';
// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(input: number) {
  let value: number = 1;
  if (input < 0) {
    return;
  }
  else if (typeof input !== 'number') {
    return;
  }
  else if (input !== 0) {
    for (let i = input; i > 0; i--) {
      value *= i;
    }
  }
  return value;
}

let inputNumber: any = -5;

console.log(factorio(inputNumber)
  ? factorio(inputNumber)
  : "Please use positive number only or 0");