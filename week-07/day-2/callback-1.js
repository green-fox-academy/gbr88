'use strict';

// The mapWith() function should iterate over the given array and call the callback function on every element.
// It stores the callback return values in the output.
// The mapWith() should return with the output array.

const mapWith = (array, callback) => {
    let output = [];
    array.forEach(e => {
        output.push(callback(e))
    });
    return output;
}

const addOne = (number) => {
    return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (string) => {
    return string.replace(/(.)./g, '$1');
    //can use forloop to concat characters together where the even ones are exlucded, but that is the longer "*** solution"
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']