'use strict';

// 1. store the element that says 'The King' in the 'king' variable.
// console.log it.
let king = document.querySelector('#b325');
console.log(king);

// 2. store 'The Businessman' and 'The Lamplighter'
// in the 'businessLamp' variable.
// console.log each of them.
let businessLamp = document.querySelectorAll('.big').forEach(e => {
    console.log(e.textContent);
});

// 3. store 'The King' and 'The Conceited Man'
// in the 'conceitedKing' variable.
// alert them one by one.
let conceitedKing = document.querySelectorAll('#b325,.b326').forEach(e => {
    alert(e.textContent);
});

// 4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
// in the 'noBusiness' variable.
// console.log each of them.
let noBusiness = document.querySelectorAll('.asteroid:not(p)').forEach(e => {
    console.log(e.textContent);
});