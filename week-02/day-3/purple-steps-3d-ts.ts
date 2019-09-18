'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

function drawSquare(start: number, size: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(start, start, size, size);
  ctx.strokeRect(start, start, size, size);
  ctx.translate(size, size);
}

let size: number = 10;
let start: number = 10;
let color: string = 'rgb(177,69,243)';

for (let i: number = 1; i < 7 ; i++) {
  drawSquare(start, size, color);
  size += size / 2;
}