'use strict';

// Mentor
// Create a Mentor class that has the same fields and methods as the Person class, and has the following additional

// fields:
// level: the level of the mentor (junior / intermediate / senior)
// methods:

// getGoal(): prints out 'My goal is: Educate brilliant junior software developers.'
// introduce(): 'Hi, I'm name, a age year old gender level mentor.'
// The Mentor class has the following constructors:

// Mentor(name, age, gender, level)
// Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate

import { Person } from './person';

export class Mentor extends Person {
  protected _level: string;

  constructor(name?: string, age?: number, gender?: string, level: string = 'intermediate') {
    super(name, age, gender);
    this._level = level;
  }

  getGoal(): void {
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  introduce(): void {
    console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + " " + this._level + " mentor.");
  }
}