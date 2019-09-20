'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawLine(mX: number, mY: number, lX: number, lY: number) {
  ctx.beginPath();
  ctx.moveTo(mX, mY);
  ctx.lineTo(lX, lY);
  ctx.stroke();
}

let lines: number = 20;
let steps: number = canvas.width / lines;


let startLeftMX: number = 0;
let startLeftMY: number = canvas.height;
let startLeftLX: number = canvas.width / 2;
let startLeftLY: number = 0;

for (let i: number = 1; i <= lines; i++) {
  drawLine(startLeftMX, startLeftMY, startLeftLX, startLeftLY)
  startLeftMX += steps;
  startLeftLX += steps / 2;
  startLeftLY += steps;
}

let startRightMX: number = canvas.width;
let startRightMY: number = canvas.height;
let startRightLX: number = canvas.width / 2;
let startRightLY: number = 0;

for (let i: number = 1; i <= lines; i++) {
  drawLine(startRightMX, startRightMY, startRightLX, startRightLY)
  startRightMX -= steps;
  startRightLX -= steps / 2;
  startRightLY += steps;
}