'use strict';

// The Flower
// needs water if its current water amount is less then 5
// when watering it the flower can only absorb the 75% of the water
// eg. watering with 10 the flower's amount of water should only increase with 7.5

import { Plant } from './the-plant';

export class Flower extends Plant {

  constructor(color: string, type: string) {
    super(color, type, 5, 0.75)
  }
}