'use strict';

// Next, we add another abstract class, StringedInstrument which extends Instrument.
// It introduces numberOfStrings and
// sound() method what's implementation is yet unknown
// but with the help of the sound() the play() method is fully implementable

import { Instrument } from './instrument';

export abstract class StringedInstrument extends Instrument {
  protected _numberOfStrings: number;

  constructor(name: string, strings: number) {
    super(name);
    this._numberOfStrings = strings;
  }

  abstract sound(): string;

  play(): void {
    console.log(this._instrumentName + ', a ' + this._numberOfStrings + '-stringed instrument that goes ' + this.sound());
  };
}