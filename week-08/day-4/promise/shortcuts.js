'use strict';

// var promise1 = new Promise(function (fulfill, reject) {
//   fulfill('SECRET VALUE');
// });

var promise1 = Promise.resolve('SECRET VALUE');

// var promise2 = new Promise(function (fulfill, reject) {
//   reject(new Error('SECRET VALUE'));
// });

var promise2 = Promise.reject(new Error('SECRET VALUE')).catch();