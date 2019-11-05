'use strict';

let h1 = document.querySelector('h1');

document.defaultView.addEventListener('keyup', function() {
    h1.innerHTML = "Last pressed key code is: " + event.keyCode;
});