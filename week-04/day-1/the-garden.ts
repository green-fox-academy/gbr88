'use strict';

// The Garden
// is able to hold unlimited amount of flowers or trees
// when watering it should only water those what needs water with equally divided amount amongst them
// eg. watering with 40 and 4 of them need water then each gets watered with 10

import { Plant } from './the-plant';

export class Garden {
  protected _plants: Plant[];

  constructor() {
    this._plants = [];
  }

  addPlant(plant: Plant): void {
    this._plants.push(plant);
  }

  waterAll(amount: number): void {
    this._plants.forEach(element => element.watering((amount / this._plants.length)));
  }

  statusAll(): void {
    this._plants.forEach(element => element.status())
  }
}