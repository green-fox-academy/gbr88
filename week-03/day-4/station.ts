'use strict';

import { Car } from './car';

export class Station {
  private _gasAmount: number;

  constructor(gasAmount: number = 10000) {
    this._gasAmount = gasAmount;
  }

  public refill(car: Car): void {
    car.gasAmount += car.capacity;
    this._gasAmount -= car.capacity;
  }

  public get gasAmount(): number {
    return this._gasAmount;
  }

  public status(): void {
    console.log("The station's gas amount is: " + this._gasAmount);
  }
}