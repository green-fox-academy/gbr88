'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size: number = 20;
let startX: number = canvas.width / 2;
let startY: number = 0;
let end: number = 0;

function drawHex(size: number, startX: number, startY: number, end: number) {


  ctx.beginPath();
  ctx.moveTo(startX - size / 2, startY);
  ctx.lineTo((startX - size / 2) + size, end);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo((startX - size / 2) + size, end);
  ctx.lineTo((startX - size / 2) + size + size / 2, end + size * ((Math.sqrt(3)) / 2));
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo((startX - size / 2) + size + size / 2, end + size * ((Math.sqrt(3)) / 2));
  ctx.lineTo((startX - size / 2) + size, end + size * ((Math.sqrt(3)) / 2) + end + size * ((Math.sqrt(3)) / 2));
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo((startX - size / 2) + size, end + size * ((Math.sqrt(3)) / 2) + end + size * ((Math.sqrt(3)) / 2));
  ctx.lineTo((startX - size / 2), startY + end + size * ((Math.sqrt(3)) / 2) + end + size * ((Math.sqrt(3)) / 2));
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo((startX - size / 2), startY + end + size * ((Math.sqrt(3)) / 2) + end + size * ((Math.sqrt(3)) / 2));
  ctx.lineTo((startX - size / 2) - size / 2, end + size * ((Math.sqrt(3)) / 2));
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo((startX - size / 2) - size / 2, end + size * ((Math.sqrt(3)) / 2));
  ctx.lineTo(startX - size / 2, startY);
  ctx.stroke();
}

drawHex(size, startX, startY, 0)