'use strict';

// Sum
// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// Follow these steps:
// Add a new test case
// Instantiate your class
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it
// Create different tests where you test your method with:
// an empyt list
// a list that has one element in it
// a list that has multiple elements in it
// Run them
// Fix your code if needed

import * as test from 'tape';
import { Sum } from './sum';

test('testing sum()', t => {
  let nums = new Sum();
  
  const actual: number = nums.sum([1,2,3]);
  const expected: number = 6;

  t.equal(actual, expected);
  t.end();
});

test('testing sum() with empty list', t => {
  let nums = new Sum();
  
  const actual: number = nums.sum([]);
  const expected: number = undefined;

  t.equal(actual, expected);
  t.end();
});

test('testing sum() with one element', t => {
  let nums = new Sum();
  
  const actual = nums.sum([1]);
  const expected = 1;

  t.equal(actual, expected);
  t.end();
});