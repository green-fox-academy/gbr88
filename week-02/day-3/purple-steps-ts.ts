'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function drawSquare(size: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(size, size, size, size);
  ctx.strokeRect(size, size, size, size);
  ctx.translate(size, size);
}

let size: number = 10;
let color: string = 'rgb(177,69,243)';

for (let i: number = 1; i < 20 ; i++) {
  drawSquare(size, color);
}