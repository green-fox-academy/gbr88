'use strict';

// Write a program that prints apple after 3 seconds.

writeApple();

function writeApple() {
    setTimeout(myApple, 3000);

    function myApple() {
        console.log('apple')
    };
};