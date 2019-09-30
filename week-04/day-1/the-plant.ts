'use strict';

// The Garden
// is able to hold unlimited amount of flowers or trees
// when watering it should only water those what needs water with equally divided amount amongst them
// eg. watering with 40 and 4 of them need water then each gets watered with 10

// The Tree
// needs water if its current water amount is less then 10
// when watering it the tree can only absorb the 40% of the water
// eg. watering with 10 the tree's amount of water should only increase with 4

// The Flower
// needs water if its current water amount is less then 5
// when watering it the flower can only absorb the 75% of the water
// eg. watering with 10 the flower's amount of water should only increase with 7.5

export class Plant {
  protected _waterAmount: number;
  protected _absorb: number;
  protected _color: string;
  protected _limit: number;
  protected _plantType: string;

  constructor(color: string, type: string, limit: number, absorb: number) {
    this._color = color;
    this._plantType = type;
    this._limit = limit;
    this._absorb = absorb;
    this._waterAmount = 0;
  }

  needsWater(): boolean {
    return this._waterAmount < this._limit
  }

  watering(number: number): void {
    this._waterAmount += number * this._absorb;
  }

}