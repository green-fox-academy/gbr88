'use strict';

// The Tree
// needs water if its current water amount is less then 10
// when watering it the tree can only absorb the 40% of the water
// eg. watering with 10 the tree's amount of water should only increase with 4

// The Flower
// needs water if its current water amount is less then 5
// when watering it the flower can only absorb the 75% of the water
// eg. watering with 10 the flower's amount of water should only increase with 7.5

export abstract class Plant {
  protected _waterAmount: number;
  protected _absorb: number;
  protected _color: string;
  protected _limit: number;

  constructor(color: string, limit: number, absorb: number) {
    this._color = color;
    this._limit = limit;
    this._absorb = absorb;
    this._waterAmount = 0;
  }

  abstract getType(): string;

  needsWater(): boolean {
    return this._waterAmount < this._limit
  }

  watering(number: number): void {
    if (this._waterAmount < this._limit) {
      this._waterAmount += number * this._absorb
    };
  }

  status(): void {
    if (this.needsWater()) {
      console.log('The ' + this._color + ' ' + this.getType() + ' needs water');
    } else console.log('The ' + this._color + ' ' + this.getType() + ' doesnt need water');
  }
}