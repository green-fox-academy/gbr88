'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

const semester: number = 17;
const workDays: number = 5;
const workHours: number = 6;
const weeklyHours: number = 52;
let codingHours: number = (semester * workDays * workHours);

console.log(codingHours);

let avgCodingHours: number = ((codingHours / semester) / weeklyHours) * 100;

let percentHours: number = Math.round(avgCodingHours);

console.log(percentHours + '% ' + '\(' + avgCodingHours + '\)');