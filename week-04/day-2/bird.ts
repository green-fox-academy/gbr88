'use strict';

import { Animal } from './animal'

export class Bird extends Animal {
  constructor(name: string, age?: number, gender?: string) {
    super(name, age, gender);
  }

  breed(): string {
    return 'laying eggs.';
  };
}