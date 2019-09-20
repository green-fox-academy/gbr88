'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function drawLine(mX: number, mY: number, lX: number, lY: number, color: string) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(mX, mY);
  ctx.lineTo(lX, lY);
  ctx.stroke();
}

let steps: number = canvas.width / 20;
let lines: number = canvas.width / steps;

let leftMX: number = 0;
let leftMY: number = 0;
let leftLX: number = 0;
let leftLY: number = canvas.height;

let rightMX: number = canvas.width;
let rightMY: number = 0;
let rightLX: number = canvas.width;
let rightLY: number = canvas.height;

for (let i: number = 1; i <= lines; i++) {
  drawLine(leftMX, leftMY, leftLX, leftLY, 'green');
  leftMY += steps; leftLX += steps;
  drawLine(rightMX, rightMY, rightLX, rightLY, 'purple');
  rightMX -= steps; rightLY -= steps; 
}