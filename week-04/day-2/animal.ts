'use strict';

// So we need an abstract Animal class

// it has name, age field
// it has getName() and breed() methods
// Have we got all fields and methods we should? What about gender?
// Any other? Write down at least 3 fields and/or methods that should be included in Animal.

// Let's think about the kinds of animals Mammals, Reptiles, Birdss etc.
// We need to define specific fields and methods for each.
// For example every Bird breed() from an egg, doesn't matter if it is a penguin or parrot or ostrich.
// Write down at least 2 of field and/or method what is common in each kind.

// Most of the Reptiles breed() by laying eggs too, it is common with Birds.

export abstract class Animal {
  protected _name: string;
  protected _age: number;
  protected _gender: string;

  constructor(name: string, age?: number, gender?: string) {
    this._name = name;
    this._age = age != undefined ? age : 1;
    this._gender = gender != undefined ? gender : 'female';
  }

  getName(): string {
    return this._name;
  };

  abstract breed(): string;

  getAge(): number {
    return this._age;
  };

  getGender(): string {
    return this._gender;
  };
}