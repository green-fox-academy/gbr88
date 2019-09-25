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

  constructor(hunger: number = 50, thirst: number = 50) {
    this._hunger = hunger;
    this._thirst = thirst;
  }

  public eat(): void {
    this._hunger -= 1;
  }

  public drink(): void {
    this._thirst -= 1;
  }

  public play(): void {
    this._hunger += 1;
    this._thirst += 1;
  }

  public status(): string {
    return `This animal has hunger: ${this._hunger} and thirst: ${this._thirst}`;
  }

  public hunger(): number {
    return this._hunger;
  }

  public thirst(): number {
    return this._thirst
  }
}

let animal1 = new Animal(10, 10);
console.log(animal1.status());
animal1.play();
console.log(animal1.status());
animal1.eat();
animal1.drink();
console.log('This animal has thirst: ' + animal1.hunger());