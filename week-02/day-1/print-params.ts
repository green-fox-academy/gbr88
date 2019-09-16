'use strict';
// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...args: any[]) {
  console.log(...args);
}

printParams(123, 'asdasd', true)