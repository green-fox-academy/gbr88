'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// constans
let steps: number = canvas.width / 20; // change value for line density
let lines: number = canvas.width / steps;

// starting points
const left = {
  startMX: 0,
  startMY: 0,
  startLX: 0,
  startLY: canvas.height
}

const right = {
  startMX: canvas.width,
  startMY: 0,
  startLX: canvas.width,
  startLY: canvas.height
}

// draws the lines
for (let i: number = 1; i <= lines; i++) {
  drawLeft();
  drawRight();
}

// functions
function drawLeft() {
  drawLine(left.startMX, left.startMY, left.startLX, left.startLY, 'green');
  left.startMY += steps;
  left.startLX += steps;
}

function drawRight() {
  drawLine(right.startMX, right.startMY, right.startLX, right.startLY, 'purple');
  right.startMX -= steps;
  right.startLY -= steps; 
}

// helpers
function drawLine(mX: number, mY: number, lX: number, lY: number, color: string) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(mX, mY);
  ctx.lineTo(lX, lY);
  ctx.stroke();
}