'use strict';

// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

import { Sharpie } from './sharpie';

class SharpieSet {
  private _sharpie: Sharpie[];
  public _sharpieList: any[];

  addSharpie(sharpie: Sharpie): void {
    this._sharpieList = [];
    this._sharpieList.push(this._sharpie);
  }

}

let sharpieSet = new SharpieSet();
let sharpie1 = new Sharpie('red', 10);
let sharpie2 = new Sharpie('blue', 110);

sharpieSet.addSharpie(sharpie1);

console.log(sharpieSet);