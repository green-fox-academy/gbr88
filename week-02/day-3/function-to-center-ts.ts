'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

let startX: number = 0;
let startY: number = 0;
let endX: number = canvas.width;
let endY: number = canvas.height;


function drawLine(x: number, y: number) {
  ctx.beginPath();
  ctx.moveTo(x, y)
  ctx.lineTo(canvas.width / 2, canvas.height / 2)
  ctx.stroke();
}


for (let i: number = 0; i <= canvas.height; i += 20) {
  drawLine(startX, i);
}

for (let j: number = 20; j <= canvas.width; j += 20) {
  drawLine(j, startY);
}

for (let k: number = 20; k <= canvas.height; k += 20) {
  drawLine(endX, k);
}

for (let l: number = 20; l <= canvas.width -20; l += 20) {
  drawLine(l, endY);
}