'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// constans
const lines: number = 20; // change value for line density
const steps: number = canvas.width / lines;

// starting points
const left = {
  startMX: 0,
  startMY: canvas.height,
  startLX: canvas.width / 2,
  startLY: 0
}

const right = {
  startMX: canvas.width,
  startMY: canvas.height,
  startLX: canvas.width / 2,
  startLY: 0
}

const line = {
  startMX: 0,
  startMY: canvas.height,
  startLX: canvas.width,
  startLY: canvas.height
}

// draws the pyramid of triangles
for (let i: number = 1; i <= lines; i++) {
  drawLeft();
  drawLine();
  drawRight();
}

// functions
function drawLeft() {
  drawSingleLine(left.startMX, left.startMY, left.startLX, left.startLY)
  left.startMX += steps;
  left.startLX += steps / 2;
  left.startLY += steps;
}

function drawRight() {
  drawSingleLine(right.startMX, right.startMY, right.startLX, right.startLY)
  right.startMX -= steps;
  right.startLX -= steps / 2;
  right.startLY += steps;
}

function drawLine() {
  drawSingleLine(line.startMX, line.startMY, line.startLX, line.startLY)
  line.startMX += steps / 2;
  line.startMY -= steps;
  line.startLX -= steps / 2;
  line.startLY -= steps;
}

// helpers
function drawSingleLine(mX: number, mY: number, lX: number, lY: number) {
  ctx.beginPath();
  ctx.moveTo(mX, mY);
  ctx.lineTo(lX, lY);
  ctx.stroke();
}