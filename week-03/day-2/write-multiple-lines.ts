'use strict';
// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.
const fs = require('fs');


// checks for already existing file, so no errors, it will run
writeLines('my-file.txt', 'apple', 5);
// with wrong filename input, catch will work and will display no error
writeLines('thisfiledoesnotexists', 'apple', 5);

function writeLines(path: string, word: string, number: number) {
  let inputWords: string = '';

  for (let i: number = 1; i <= number; i++) {
    inputWords = inputWords.concat(word + '\r\n');
  }
  try {
    if (fs.existsSync(path) == true) {
      fs.writeFileSync(path, inputWords.trim(), 'utf8');
    } else throw 'error';
  }
  catch (error) {
    console.log();
  }
}