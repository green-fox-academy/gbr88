'use strict';

// The Flower
// needs water if its current water amount is less then 5
// when watering it the flower can only absorb the 75% of the water
// eg. watering with 10 the flower's amount of water should only increase with 7.5

export class Flower {
  protected _waterAmount: number;
  protected _needWater: boolean;

  constructor(amount: number = 0) {
    this._waterAmount = amount;
    if (this._waterAmount < 5) {
      this._needWater = true;
    } else {
      this._needWater = false;
    }
  }

  watering(number: number): void {
    this._waterAmount += number * 0.75
  }

  needsWater(): boolean {
    if (this._waterAmount < 5) {
      this._needWater = true;
    } else {
      this._needWater = false;
    }
    return this._needWater;
  }
}

let f = new Flower();
console.log(f);
console.log(f.needsWater());
f.watering(5);
console.log(f);
f.watering(10);
console.log(f);
console.log(f.needsWater());