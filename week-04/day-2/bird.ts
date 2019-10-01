'use strict';

import { Animal } from './animal';
import { Flyable } from './flyable';

export class Bird extends Animal implements Flyable {
  constructor(name: string, age?: number, gender?: string) {
    super(name, age, gender);
  }

  breed(): string {
    return 'laying eggs.';
  };

  fly(): void{};
  land(): void{};
  takeOff(): void{};
}