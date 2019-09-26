'use strict';

// You have a `DiceSet` class which has a list for 6 dice
// You can roll all of them with roll()
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dice until all of the dice are 6

class DiceSet {
  dice: number[];
  readonly numOfDices: number = 6;

  roll(): number[] {
    this.dice = [];
    for (let i = 0; i < this.numOfDices; i++) {
      this.dice.push(Math.floor(Math.random() * 6 + 1));
    }
    return this.dice;
  }

  reroll(index?: number): void {
    if (index === undefined) {
      for (let i = 0; i < this.numOfDices; i++) {
        this.dice[i] = Math.floor(Math.random() * 6 + 1);
      }
    } else {
      this.dice[index] = Math.floor(Math.random() * 6 + 1);
    }
  }

  getCurrent(index?: number): number[] | number {
    if (index === undefined) {
      for (let i = 0; i < this.numOfDices; i++) {
        return this.dice;
      }
    } else {
      return this.dice[index];
    }
  }
}

let diceSet = new DiceSet();

diceSet.roll();

function allSix(diceSet: DiceSet): boolean {
  for (let i: number = 0; i < diceSet.dice.length; i++) {
    if (diceSet.dice[i] !== 6) {
      return false;
    }
  }
  return true;
};

let counter: number = 0;

while (!allSix(diceSet)) {
  diceSet.reroll();
  counter++;
}

console.log('Number of rerolls with all dices until all sixes: ' + counter);

diceSet.roll();

let counter2: number = 0;

while (!allSix(diceSet)) {
  for (let j: number = 0; j < diceSet.dice.length; j++) {
    if (diceSet.dice[j] !== 6) {
      diceSet.reroll(j);
    }
    counter2++;
  }
}

console.log('Number of rerolls with single dices that not sixes until they all are: ' + counter2);