'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function drawHex(size: number, startX: number, startY: number) {

  ctx.beginPath();
  ctx.moveTo(startX - size / 2, startY);
  ctx.lineTo((startX - size / 2) + size, startY);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo((startX - size / 2) + size, startY);
  ctx.lineTo((startX - size / 2) + size + size / 2, startY + size * ((Math.sqrt(3)) / 2));
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo((startX - size / 2) + size + size / 2, startY + size * ((Math.sqrt(3)) / 2));
  ctx.lineTo((startX - size / 2) + size, size * ((Math.sqrt(3)) / 2) + startY + size * ((Math.sqrt(3)) / 2));
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo((startX - size / 2) + size, size * ((Math.sqrt(3)) / 2) + startY + size * ((Math.sqrt(3)) / 2));
  ctx.lineTo((startX - size / 2), startY + size * ((Math.sqrt(3)) / 2) + size * ((Math.sqrt(3)) / 2));
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo((startX - size / 2), startY + size * ((Math.sqrt(3)) / 2) + size * ((Math.sqrt(3)) / 2));
  ctx.lineTo((startX - size / 2) - size / 2, startY + size * ((Math.sqrt(3)) / 2));
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo((startX - size / 2) - size / 2, startY + size * ((Math.sqrt(3)) / 2));
  ctx.lineTo((startX - size / 2), startY);
  ctx.stroke();
}

drawHex(100, 200, 20)