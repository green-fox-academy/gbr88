'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// constans
const position = {
  startX: canvas.width / 2,
  startY: 0,
  size: 20
}

let hexas: number = 10;
let counter: number = 1;

for (let i: number = 0; i < hexas; i++) {
  if (counter % 2 == 0) {
    position.startX += position.size * 1.5;
    drawHexes();
  } else {
    position.startX = canvas.width / 2;
    drawHexes();
  }
  counter++;
}

function drawHexes() {
  drawHexagon(position.size, position.startX, position.startY);
  position.startY += (position.size * (Math.sqrt(3)));
}

// helpers
function drawHexagon(size: number, startX: number, startY: number) {
  // first line at top "_"
  ctx.beginPath();
  ctx.moveTo(startX - size / 2, startY);
  ctx.lineTo((startX - size / 2) + size, startY);
  ctx.stroke();
  // second line from top to right "\"
  ctx.beginPath();
  ctx.moveTo((startX - size / 2) + size, startY);
  ctx.lineTo((startX - size / 2) + size + size / 2, startY + size * ((Math.sqrt(3)) / 2));
  ctx.stroke();
  // third line from top right to bottom right "/"
  ctx.beginPath();
  ctx.moveTo((startX - size / 2) + size + size / 2, startY + size * ((Math.sqrt(3)) / 2));
  ctx.lineTo((startX - size / 2) + size, size * ((Math.sqrt(3)) / 2) + startY + size * ((Math.sqrt(3)) / 2));
  ctx.stroke();
  // fourth line from bottom right to bottom "_"
  ctx.beginPath();
  ctx.moveTo((startX - size / 2) + size, size * ((Math.sqrt(3)) / 2) + startY + size * ((Math.sqrt(3)) / 2));
  ctx.lineTo((startX - size / 2), startY + size * ((Math.sqrt(3)) / 2) + size * ((Math.sqrt(3)) / 2));
  ctx.stroke();
  // fifth line from bottom to bottom left "\"
  ctx.beginPath();
  ctx.moveTo((startX - size / 2), startY + size * ((Math.sqrt(3)) / 2) + size * ((Math.sqrt(3)) / 2));
  ctx.lineTo((startX - size / 2) - size / 2, startY + size * ((Math.sqrt(3)) / 2));
  ctx.stroke();
  // sixth line from bottom left to top left "/"
  ctx.beginPath();
  ctx.moveTo((startX - size / 2) - size / 2, startY + size * ((Math.sqrt(3)) / 2));
  ctx.lineTo((startX - size / 2), startY);
  ctx.stroke();
}