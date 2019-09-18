'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.

let x: number = 10;
let y: number = 10;
ctx.fillStyle = 'Green';
ctx.fillRect(canvas.width / 2 - x / 2, canvas.height / 2 - y / 2 , x, y);

// Enable it for more visual confirmation.
/*
ctx.strokeStyle = 'gray';
ctx.beginPath();
ctx.moveTo(0, canvas.height / 2);
ctx.lineTo(canvas.width, canvas.height / 2);
ctx.stroke();
ctx.strokeStyle = 'gray';
ctx.beginPath();
ctx.moveTo(canvas.width / 2, 0);
ctx.lineTo(canvas.width / 2, canvas.height);
ctx.stroke();
*/