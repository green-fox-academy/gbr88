'use strict';

// 1) Fill every paragraph with the last one's content.
// let lastContentTextContent = document.querySelector('.animals').textContent;
// document.querySelectorAll('p').forEach(e => {
//     e.textContent = lastContentTextContent;
// });

// 2) Do the same again, but you should keep the cat strong.
let lastContentInnerHTML = document.querySelector('.animals').innerHTML;
document.querySelectorAll('p').forEach(e => {
    e.innerHTML = lastContentInnerHTML;
});