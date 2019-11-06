'use strict';

let pets = document.getElementById('pets');
let votes = document.getElementById('votes');
let options = document.getElementById('options');

options.children[0].disabled = true;
options.children[1].disabled = true;


pets.addEventListener('change', function() {
    if (pets.children[0].checked == true || pets.children[1].checked == true) {
        options.children[1].disabled = false;
    } else {
        options.children[1].disabled = true;
    }
    if (pets.children[2].checked == true && votes.children[1].checked == true) {
        options.children[1].disabled = false;
        options.children[0].disabled = true;
    }
});

votes.addEventListener('change', function() {
    if (votes.children[0].checked == true) {
        options.children[0].disabled = false;
    }
    if (votes.children[1].checked == true) {
        options.children[0].disabled = true;
    }
    if (pets.children[2].checked == true && votes.children[0].checked == true) {
        options.children[0].disabled = false;
        options.children[1].disabled = true;
    }
    if (pets.children[2].checked == true && votes.children[1].checked == true) {
        options.children[0].disabled = true;
        options.children[1].disabled = false;
    }

});

options.addEventListener('click', function(e) {
    if (pets.children[2].checked == true) {
        alert('Sigh, we still added you to the cat facts list');
    } else {
        alert(`Thank you, you've successfully signed up for cat facts`);
    }
});