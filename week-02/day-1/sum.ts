'use strict';
// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function sum(input: number) {
  let sum: number = 0;
  if (input < 0) {
    for (let i = input; i <= 0; i++) {
      sum += i;
    }
  } else {
    for (let i: number = 0; i <= input; i++) {
      sum += i;
    }
  } return sum;
}

let givenNumber: number = -5;

console.log(sum(givenNumber));