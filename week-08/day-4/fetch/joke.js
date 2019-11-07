'use strict';

let div = document.querySelector('div');
let button = document.querySelector('button');

const URL = 'http://api.icndb.com/jokes/random';

button.addEventListener('click', function() {
    fetch(URL)
        .then(response => response.json())
        .then(myJson => div.innerText = myJson.value.joke);
});