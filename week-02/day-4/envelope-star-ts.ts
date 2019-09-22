'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// constans
const steps: number = canvas.width / 20; // change value here for line density
const lines: number = (canvas.width / 2) / steps;

// starting values
const upperLeft = {
  startMX: canvas.width / 2,
  startMY: canvas.height / 2,
  startLX: canvas.width / 2,
  startLY: 0,
  color: 'green'
}

const upperRight = {
  startMX: canvas.width / 2,
  startMY: canvas.height / 2,
  startLX: canvas.width / 2,
  startLY: 0,
  color: 'green'
}

const lowerLeft = {
  startMX: canvas.width / 2,
  startMY: canvas.height / 2,
  startLX: canvas.width / 2,
  startLY: canvas.height,
  color: 'green'
}

const lowerRight = {
  startMX: canvas.width / 2,
  startMY: canvas.height,
  startLX: canvas.width / 2,
  startLY: canvas.height / 2,
  color: 'green'
}

// draws the envelop star
for (let i: number = 0; i <= lines; i++) {
  drawUpperLeft();
  drawUpperRight();
  drawLowerLeft();
  drawLowerRight();
}

// functions
function drawUpperLeft() {
  drawLine(upperLeft.startMX, upperLeft.startMY, upperLeft.startLX, upperLeft.startLY, upperLeft.color);
  upperLeft.startMX -= steps;
  upperLeft.startLY += steps;
}

function drawUpperRight() {
  drawLine(upperRight.startMX, upperRight.startMY, upperRight.startLX, upperRight.startLY, upperRight.color);
  upperRight.startMX += steps;
  upperRight.startLY += steps;
}

function drawLowerLeft() {
  drawLine(lowerLeft.startMX, lowerLeft.startMY, lowerLeft.startLX, lowerLeft.startLY, lowerLeft.color);
  lowerLeft.startMX -= steps;
  lowerLeft.startLY -= steps;
}

function drawLowerRight() {
  drawLine(lowerRight.startMX, lowerRight.startMY, lowerRight.startLX, lowerRight.startLY, lowerRight.color);
  lowerRight.startMY -= steps;
  lowerRight.startLX += steps;
}

// helpers
function drawLine(mX: number, mY: number, lX: number, lY: number, color: string) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(mX, mY);
  ctx.lineTo(lX, lY);
  ctx.stroke();
}