'use strict';
// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
const fs = require('fs');

// copies the correct file, on true: console log
copyMyFile('my-file.txt', 'my-files-copy.txt');

function copyMyFile(source: string, destination: string) {

  fs.copyFile(source, destination, (error) => {
    if (error) throw error;
    console.log('The copy was successful!');
  });

}