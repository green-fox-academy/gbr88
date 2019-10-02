'use strict';

// Count Letters
// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys,
// and numbers as values that shows how many occurrences there are.
// Create a test for that.

export function letterCount(string: string): any {
  let dictionary: any = {};

  string.toLocaleLowerCase().replace(/\s/g, '').split('').sort().forEach(function (letter) {
    if (!dictionary[letter]) { dictionary[letter] = 0; }
    dictionary[letter]++;
  });

  return dictionary;
}