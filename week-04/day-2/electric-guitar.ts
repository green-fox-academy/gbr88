'use strict';

// StringedInstrument has descendant, namely:
// Electric Guitar (6 strings, 'Twang')

import { StringedInstrument } from './stringed-instrument'

export class ElectricGuitar extends StringedInstrument {

  constructor(strings: number = 6) {
    super('Electric Guitar', strings);
  }

  sound(): string {
    return 'Twang';
  }
}