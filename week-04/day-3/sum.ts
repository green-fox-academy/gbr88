'use strict';

// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list

export class Sum {

  sum(list: number[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < list.length; i++) {
      sum += list[i];
    }
    if (sum === 0) {
      return undefined;
    } else {
      return sum;
    }
  }
}