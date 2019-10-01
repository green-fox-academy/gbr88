'use strict';

// Extend Helicopter class from Vehicle
// implement your Flyable interface

import { Vehicle } from './vehicle';
import { Flyable } from './flyable';

export class Helicopter extends Vehicle implements Flyable {
  land(): void { };
  fly(): void { };
  takeOff(): void { };
}