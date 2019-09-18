'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas


function drawLine(x: number, y: number) {
  ctx.beginPath();
  ctx.moveTo(x, y)
  ctx.lineTo(canvas.width / 2, canvas.height / 2)
  ctx.stroke();
}

// Draw at least 3 lines with that function using a loop.

for (let y: number = 0; y <= canvas.height; y += canvas.height / 2) {
  drawLine(0, y);
}