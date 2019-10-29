'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

writeFruits();

function writeFruits() {

    var fruits = ['apple', 'pear', 'melon', 'grapes'];
    var time = [0, 1000, 3000, 5000]

    for (let i = 0; i < fruits.length; i++) {
        setTimeout(() => {
            console.log(fruits[i]);
        }, time[i])
    }
}