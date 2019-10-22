'use strict';

// Write the image's url to the console.
console.log(document.getElementsByTagName('img')[0].src);

// Replace the image with a picture of your favorite animal.
document.getElementsByTagName('img')[0].src = "//upload.wikimedia.org/wikipedia/en/6/6c/Donkey_%28Shrek%29.png";

// Make the link point to the Green Fox Academy website.
document.getElementsByTagName('a')[0].target = "_blank"; //made it to open in new window
document.getElementsByTagName('a')[0].href = "https://www.greenfoxacademy.com";

// Disable the second button.
document.getElementsByClassName('this-one')[0].disabled = true;

// Replace its text with 'Don't click me!'
document.querySelectorAll('button:not(.this-one)')[0].textContent = "Don't click me!";