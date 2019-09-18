'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

let sizeX: number = 20;
let sizeY: number = 20;

for (let i: number = 0; i < canvas.height; i++) {
  for (let j: number = 0; j < canvas.width; j++) {
    if (j % 2 === 0 && i % 2 === 1 || j % 2 === 1 && i % 2 === 0) {
      ctx.fillRect(i * sizeX, j * sizeY, sizeX, sizeY);
    }
  }
}