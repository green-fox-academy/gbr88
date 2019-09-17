'use strict';

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

let toReplace: RegExp = /dishwasher/gi;

let replacement: string = 'galaxy';


console.log(example.replace(toReplace, 'galaxy'));

export = example;