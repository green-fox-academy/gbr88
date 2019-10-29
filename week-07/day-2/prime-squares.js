'use strict';

// generate 100 divs to the <section> element and add index numbers to it as the element's textContent
// Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
// Create a timer that keeps calling the prime validator function until it reaches the last element
// the timer should fire every 100ms
// the timer should stop when there are no more elements left to be colored

let squares = document.getElementsByTagName('section');
let counter = 1;

genereateDivs();

let divarray = document.querySelectorAll('div');

function genereateDivs() {
    for (let i = 2; i <= 100; i++) {
        let div = document.createElement('div');
        div.innerText = i;
        squares[0].appendChild(div);
    }
}

function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

let primeValidator = setInterval(function() {
    console.log(counter);
    if (counter > 100) {
        clearInterval(primeValidator);
    } else {
        if (!isPrime(counter)) {
            divarray[counter - 1].classList.add('not-prime');
        } else {
            divarray[counter - 1].classList.add('prime')
        };
        counter++;
    }

}, 100);