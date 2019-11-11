'use strict';

let test = require('tape');
let converter = require('./number-converter.js')

test('test converter pass', t => {
    let actual = converter(10);
    let expected = 'ten';

    t.equal(actual, expected);
    t.end();
});

test('test converter fail', t => {
    let actual = converter(10);
    let expected = 'one hundred';

    t.equal(actual, expected);
    t.end();
});