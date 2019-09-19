'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle = 'Black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawSquare(posX: number, posY: number, color: string, size: number) {
  ctx.fillStyle = color;
  ctx.fillRect(posX, posY, size, size);
}

for (let i: number = 1; i <= Math.random() * 200; i++) {
  let x: number = Math.floor(Math.random() * 255);
  drawSquare(Math.random() * canvas.width,
    Math.random() * canvas.height,
    `rgb(${x},${x},${x})`,
    Math.random() * 50);
}