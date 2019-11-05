'use strict';

let button = document.querySelector('button');
let p = document.querySelector('p');
let time = 5000;
let clicks = 0;

p.style.display = 'none';

let fiveSeconds = setTimeout(() => {
    p.innerHTML = "5 seconds elapsed and clicked 3 times";
}, 5000);

button.addEventListener('click', function() {
    clicks++;
    if (event.timeStamp < time) {
        clearInterval(fiveSeconds);
    }
    if (clicks >= 3 && event.timeStamp > time) {
        p.style.display = 'block';
    }
});