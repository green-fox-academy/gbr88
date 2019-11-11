'use strict';

let test = require('tape');
let getIndex = require('./get-index.js')

test('test getIndex fail', t => {
    let actual = getIndex([1, 2, 3, 4, 5], 6);
    let expected = 6;

    t.equal(actual, expected);
    t.end();
});

test('test getIndex pass', t => {
    let actual = getIndex([1, 2, 3, 4, 5], 5);
    let expected = 4;

    t.equal(actual, expected);
    t.end();
});