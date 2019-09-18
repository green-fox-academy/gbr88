'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let colors: string[] = ['Red', 'Green', 'Blue', 'Yellow'];
let sizeX: number = 10;
let sizeY: number = 10;
let startX: number = 5;
let startY: number = 5;

for (let i = 0; i < colors.length; i += 1) {
  ctx.fillStyle = colors[i];
  ctx.fillRect(startX += 20*i, startY, sizeX+ 20*i, sizeY+ 20*i);
}