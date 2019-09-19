'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//Divide the canvas into 4/16/64 equal parts and repeat the line play pattern in each quarter

function drawLine(mX: number, mY: number, lX: number, lY: number, color: string) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(mX, mY);
  ctx.lineTo(lX, lY);
  ctx.stroke();
}

let steps: number = canvas.width / 20;

let leftMX: number = 0;
let leftMY: number = 0;
let leftLX: number = 0;
let leftLY: number = canvas.height;

let rightMX: number = canvas.width;
let rightMY: number = 0;
let rightLX: number = canvas.width;
let rightLY: number = canvas.height;

for (let i: number = 1; i <= canvas.height; i++) {
  drawLine(leftMX, leftMY, leftLX, leftLY, 'green');
  leftMY += steps; leftLX += steps;
  drawLine(rightMX, rightMY, rightLX, rightLY, 'purple');
  rightMX -= steps; rightLY -= steps; 
}