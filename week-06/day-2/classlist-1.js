'use strict';

// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
if (document.querySelectorAll('p')[3].className == 'dolphin') {
    document.getElementsByClassName('apple')[0].textContent = 'pear';
};

// If the first p has an 'apple' class, replace cat's content with 'dog'
if (document.querySelectorAll('p')[0].className == 'apple') {
    document.getElementsByClassName('cat')[0].textContent = 'dog';
}

// Make apple red by adding a .red class
document.querySelectorAll('p')[0].classList += " red";

// Make balloon less balloon-like (change its shape)
document.getElementsByClassName('balloon')[0].style.borderRadius = "2%";