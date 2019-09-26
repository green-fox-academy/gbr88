'use strict';

export class Car {
  private _gasAmount: number;
  private _capacity: number;

  constructor(gasAmount: number = 0, capacity: number = 100) {
    this._gasAmount = gasAmount;
    this._capacity = capacity;
  }

  public get capacity(): number {
    return this._capacity;
  }

  public get gasAmount(): number {
    return this._gasAmount;
  }

  public set gasAmount(gasAmount: number) {
    this._gasAmount = gasAmount;
  }

  public status(): void {
    console.log("The car's status are Gas: " + this._gasAmount + " Capacity: " + this._capacity);
  }
}