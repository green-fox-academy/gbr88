'use strict';

// Create a timeout that will set the display to "Bomb exploded" in 10 seconds
// If you click on the button set the display to "Bomb defused" and stop the timeout
// Extra: create an interval which will update the remaining seconds in the display

let counter = 10;

let button = document.getElementsByTagName('button');
let display = document.getElementsByClassName('display');

let displayCounter = setInterval(function() {
    if (counter == 0) {
        clearInterval(displayCounter);
        display[0].textContent = 'Bomb exploded';
    } else {
        display[0].textContent = counter;
    }
    counter--;
}, 1000);

button[0].addEventListener("click", function() {
    clearInterval(displayCounter);
    display[0].textContent = 'Bomb defused';
});