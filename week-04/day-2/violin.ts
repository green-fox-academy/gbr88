'use strict';

// StringedInstrument has descendant, namely:
// Violin (4 strings, 'Screech')

import { StringedInstrument } from './stringed-instrument';

export class Violin extends StringedInstrument {

  constructor(strings: number = 4) {
    super('Violin', strings);
  }

  sound(): string {
    return 'Screech';
  }
}