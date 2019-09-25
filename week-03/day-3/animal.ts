'use strict';

// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal {
  private _hunger: number;
  private _thirst: number;

  constructor(hunger?: number, thirst?: number,) {
    if (hunger) {
      this._hunger = hunger;
    } else {
      this._hunger = 50;
    }
    if (thirst) {
      this._thirst = thirst;
    } else {
      this._thirst = 50;
    }
  }

  public eat(): void {
    this._hunger -= 1;
  }

  public drink(): void {
    this._thirst -= 1;
  }

  public play(): void {
    this._hunger += 1, this._thirst += 1;
  }

  public status(): string {
    return `This animal has hunger: ${this._hunger} and thirst: ${this._thirst}`;
  }

}

let animal1 = new Animal();
console.log(animal1.status());
animal1.play();
console.log(animal1.status());
animal1.eat();
animal1.drink();
console.log(animal1.status());