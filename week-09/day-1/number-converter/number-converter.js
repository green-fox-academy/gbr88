'use strict';

function converter(number) {

    let list19 = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }

    let list10s = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }

    let list100 = 'hundred'

    let temp = [];
    temp.push(number);
    let length = temp[0].toString().split('');
    console.log(length);

    // let rest = number % 10;
    // let divided = Math.floor(number / 10);
    // let hundred = number
    // if (number <= 19) {
    //     return Object.values(list19[number]).join('');
    // } else {
    //     return (`${Object.values(list10s[divided]).join('')}-${Object.values(list19[rest]).join('')}`);
    // };



}

module.exports = converter;

converter(212);