'use strict';

// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
  private _value: number;
  private _initialValue: number;

  constructor(value: number = 0) {
    this._value = value;
    this._initialValue = value;
  }

  public add(number?: number): void {
    if (number) {
      this._value += number
    } else {
      this._value += 1;
    }
  }

 public get(): string{
   return `The current value is ${this._value}.`;
 }

  public reset(): void {
    this._value = this._initialValue;
  }
}

let counter1 = new Counter();
let counter2 = new Counter(10);

console.log('Creating counter1 at default value. ' + counter1.get());
console.log('Creating counter2 with a vaule. ' + counter2.get());

counter1.add();
counter2.add(10);

console.log('Using add() on counter1. ' + counter1.get());
console.log('Using add(number) on counter2. ' + counter2.get());

counter1.reset();
counter2.add();

console.log('Using reset() on counter1. ' + counter1.get());
console.log('Using add() on counter2. ' + counter2.get());