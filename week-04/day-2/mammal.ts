'use strict';

import { Animal } from './animal'

export class Mammal extends Animal {
  constructor(name: string, age?: number, gender?: string) {
    super(name, age, gender);
  }

  breed(): string {
    return 'pushing miniature versions out.';
  };
}