'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// constans
const steps: number = canvas.width / 20; // change value for line density
const lines: number = canvas.width / steps;

// starting values
const left = {
  startMX: 0,
  startMY: 0,
  startLX: 0,
  startLY: canvas.height,
  color: 'green'
}

const right = {
  startMX: canvas.width,
  startMY: 0,
  startLX: canvas.width,
  startLY: canvas.height,
  color: 'purple'
}

// draws the lines
for (let i: number = 1; i <= lines; i++) {
  drawLeft();
  drawRight();
}

// functions
function drawLeft() {
  drawLine(left.startMX, left.startMY, left.startLX, left.startLY, left.color);
  left.startMY += steps;
  left.startLX += steps;
}

function drawRight() {
  drawLine(right.startMX, right.startMY, right.startLX, right.startLY, right.color);
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