'use strict';

let button = document.querySelector('button');

// button.addEventListener('click', function() {
//     console.log(event.timeStamp);
//     button.disabled = true;
// });

let counter = 0;

button.addEventListener('click', function() {
    if (counter <= 0) {
        console.log(event.timeStamp);
        counter++;
    }
});