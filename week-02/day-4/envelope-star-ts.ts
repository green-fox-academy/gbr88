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
let lines: number = (canvas.width /2) / steps;

let lowerRightMX: number = canvas.width / 2;
let lowerRightMY: number = canvas.height;
let lowerRightLX: number = canvas.width / 2;
let lowerRightLY: number = canvas.height / 2;

for (let i: number = 0; i <= lines; i++) {
  drawLine(lowerRightMX, lowerRightMY, lowerRightLX, lowerRightLY, 'green');
  lowerRightMY -= steps; lowerRightLX += steps;
}

let upperRightMX: number = canvas.width / 2;
let upperRightMY: number = canvas.height / 2;
let upperRightLX: number = canvas.width / 2;
let upperRightLY: number = 0;

for (let i: number = 0; i <= lines; i++) {
  drawLine(upperRightMX, upperRightMY, upperRightLX, upperRightLY, 'green');
  upperRightMX += steps; upperRightLY += steps;
}