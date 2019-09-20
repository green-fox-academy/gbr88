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

let mX: number = canvas.width / 2;
let mY: number = canvas.height;
let lX: number = canvas.width / 2;
let lY: number = canvas.height / 2;
let steps: number = canvas.width / 20;
let lines: number = (canvas.width /2) / steps;

for (let i: number = 1; i <= lines; i++) {
  drawLine(mX, mY, lX + steps, lY, 'green');
  mY -= steps; lX += steps;
}


