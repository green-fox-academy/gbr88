'use strict';

let test = require('tape');
let anagram = require('./anagram.js')

test('test anagramIfTrue', t => {
    let actual = anagram("alma", "mala");
    let expected = true;

    t.equal(actual, expected);
    t.end();
});

test('test anagramIfFalse', t => {
    let actual = anagram("alma", "mala");
    let expected = false;

    t.equal(actual, expected);
    t.end();
});