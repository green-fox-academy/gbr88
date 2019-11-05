'use strict';

let nav = document.querySelector('nav');
let img = document.querySelector('.img-inspector');
let zoomed = 200;
let positionX = 0;
let positionY = 0;

nav.addEventListener('click', function(e) {
    if (e.target.attributes[1].value == 'in') {
        zoomed += 20;
        img.style.backgroundSize = `${zoomed}%`;
        console.log(e)
    }

    if (e.target.attributes[1].value == 'out') {
        zoomed -= 20;
        img.style.backgroundSize = `${zoomed}%`;
    }

    if (e.target.attributes[1].value == 'up') {
        positionY -= 10;
        img.style.backgroundPositionY = `${positionY}px`
    }

    if (e.target.attributes[1].value == 'down') {
        positionY += 10;
        img.style.backgroundPositionY = `${positionY}px`
    }

    if (e.target.attributes[1].value == 'left') {
        positionX -= 10;
        img.style.backgroundPositionX = `${positionX}px`
    }

    if (e.target.attributes[1].value == 'right') {
        positionX += 10;
        img.style.backgroundPositionX = `${positionX}px`
    }
});