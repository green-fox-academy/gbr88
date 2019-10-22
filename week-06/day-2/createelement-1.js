'use strict';

// Add an item that says 'The Green Fox' to the asteroid list.
let item1 = document.createElement('li');
item1.textContent = "The Green Fox";
document.getElementsByTagName('ul')[0].appendChild(item1);

// Add an item that says 'The Lamplighter' to the asteroid list.
let item2 = document.createElement('li');
item2.textContent = "The Lamplighter";
document.getElementsByTagName('ul')[0].appendChild(item2);

// Add a heading saying 'I can add elements to the DOM!' to the .container.
let item3 = document.createElement('h1');
item3.textContent = "I can add elements to the DOM!";
document.getElementsByClassName('container')[0].appendChild(item3);

// Add an image, any image, to the container.
let item4 = document.createElement('img');
item4.src = "//upload.wikimedia.org/wikipedia/en/6/6c/Donkey_%28Shrek%29.png";
document.getElementsByClassName('container')[0].appendChild(item4);