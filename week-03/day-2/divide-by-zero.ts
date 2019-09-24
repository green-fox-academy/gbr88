'use strict';
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


// divide by value that passes
tenDividedBy(2);
// divide by value that exception so catch will work
tenDividedBy(0);

function tenDividedBy(number: number) {
  try {
    if (number == 0) {
      throw 'error';
    } else console.log(10 / number);
  }
  catch (error) {
    console.log('fail');
  }
}