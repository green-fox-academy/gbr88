'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let cords1: number[][] = [[10, 10], [290, 10], [290, 290], [10, 290]];
let cords2: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function connectDots(cords: number[][]) {
  for (let i: number = 0; i <= cords.length; i++) {
    ctx.strokeStyle = 'Green';
    if (i < cords.length) {
      ctx.lineTo(cords[i][0], cords[i][1]);
      ctx.stroke();
    } else if (i === cords.length) {
      ctx.lineTo(cords[0][0], cords[0][1]);
      ctx.stroke();
    }
  } ctx.beginPath(); 
}

connectDots(cords1);
connectDots(cords2);