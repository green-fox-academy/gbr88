'use strict';

// The Tree
// needs water if its current water amount is less then 10
// when watering it the tree can only absorb the 40% of the water
// eg. watering with 10 the tree's amount of water should only increase with 4

import { Plant } from './the-plant';

export class Tree extends Plant {
  protected _waterAmount: number;

  constructor(color: string, type: string) {
    super(color, type, 10, 0.4)
  }
}