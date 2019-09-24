'use strict';
// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"
const fs = require('fs');

// manipulate the file if the filename is correct
writeInFile('my-file.txt');
// catches error
writeInFile('random file');

function writeInFile(fileName: string) {
  let targetFileName: string = 'my-file.txt'
  let myName: string = 'Csete Gábor'
  try {
    if (fileName != targetFileName) {
      throw 'error';
    } else fs.writeFileSync(targetFileName, myName, 'utf8');
  }
  catch (error) {
    console.log('Unable to write file: my-file.txt');
  }
}