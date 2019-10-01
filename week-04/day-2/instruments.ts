'use strict';

// We start with a base, abstract class Instrument.

// it reserves (e.g. protected) the name of the instrument
// it should provide a play() method.

export abstract class Instrument {
  protected _instrumentName: string;

  constructor(name: string) {
    this._instrumentName = name;
  }

  abstract play(): void;
}

// Next, we add another abstract class, StringedInstrument which extends Instrument. It

// introduces numberOfStrings and
// sound() method what's implementation is yet unknown
// but with the help of the sound() the play() method is fully implementable

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

// StingedInstrument has 3 descendants, namely:

// Electric Guitar (6 strings, 'Twang')
// Bass Guitar (4 strings, 'Duum-duum-duum')
// Violin (4 strings, 'Screech')

export class ElectricGuitar extends StringedInstrument {

  constructor(strings: number = 6) {
    super('Electric Guitar', strings);
  }

  sound(): string {
    return 'Twang';
  }
}

export class BassGuitar extends StringedInstrument {

  constructor(strings: number = 4) {
    super('Bass Guitar', strings);
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
}

export class Violin extends StringedInstrument {

  constructor(strings: number = 4) {
    super('Violin', strings);
  }

  sound(): string {
    return 'Screech';
  }
}