'use strict';

function anagram(string1, string2) {
    let first = string1.toLowerCase().split('').sort().join('');
    let second = string2.toLowerCase().split('').sort().join('');
    return first === second;
};

module.exports = anagram;