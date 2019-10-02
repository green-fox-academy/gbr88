'use strict';

// Anagram
// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

export function anagram(string1: string, string2: string): boolean{
  let str1: string = string1.toLowerCase().split('').sort().join();
  let str2: string = string2.toLowerCase().split('').sort().join();

  return str1 === str2
};