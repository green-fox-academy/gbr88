'use strict';
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');


// using valid file name as argument to return requested data
numberOflines('my-file.txt');
// using invalid file name that does not exist to see catch works
numberOflines('this file does not exist.txt')

function numberOflines(Name: string) {
  let fileName: string = Name;
  try {
    let fileContent: string = fs.readFileSync(fileName, 'utf8');
    console.log(fileContent.split('\n').length);
  }
  catch (error) {
    console.log('0');
  }
}