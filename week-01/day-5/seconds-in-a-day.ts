'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let dayInSecs: number = 86400;
let currentTime: number = ((currentHours * 60 * 60) + (currentMinutes * 60) + currentSeconds);
let timeLeft: number = dayInSecs - currentTime;

console.log(timeLeft);