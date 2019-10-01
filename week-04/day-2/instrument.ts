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