'use strict';

let button = document.querySelector('button');
let counter = document.querySelectorAll('li');
let result = document.querySelector('.result');

button.addEventListener('click', function() {
    result.innerHTML = counter.length;
});