'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let aEdge: number = 10;
let bEdge: number = 10;
let cEdge: number = 10;

let surfaceArea: number = 2*((aEdge * bEdge) + (aEdge * cEdge) + (bEdge * cEdge));
let volume: number = aEdge * bEdge * cEdge;

console.log('Surface Area: '+ surfaceArea + '\n' + 'Volume: ' + volume);