'use strict';

let button = document.querySelector('button');
let p = document.querySelector('p');

button.addEventListener('click', function() {
    setTimeout(() => {
        p.innerHTML = '2 seconds ellapsed'
    }, 2000);
});