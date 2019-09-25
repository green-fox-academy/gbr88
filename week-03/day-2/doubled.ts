'use strict';
// Create a method that decrypts duplicated-chars.txt
const fs = require('fs');

let txtContent: string = fs.readFileSync('duplicated-chars.txt', 'utf8');
let splittedTxt: string[] = txtContent.split('');

console.log(splittedTxt);