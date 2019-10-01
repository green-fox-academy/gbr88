'use strict';

// StringedInstrument has descendant, namely:
// Bass Guitar (4 strings, 'Duum-duum-duum')

import { StringedInstrument } from './stringed-instrument'

export class BassGuitar extends StringedInstrument {

  constructor(strings: number = 4) {
    super('Bass Guitar', strings);
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
}