'use strict';

// 1) replace the list items' content with items from this list: ['apple', 'banana', 'cat', 'dog']
// 2) change the < ul > element's background color to 'limegreen'
// -use css class to change the color instead of the style property

let list = ['apple', 'banana', 'cat', 'dog'];

let replaced = document.querySelectorAll('li');

for (let i = 0; i < list.length; i++) {
    replaced[i].innerHTML = list[i];
};

document.getElementsByTagName('ul')[0].className = "limegreen";