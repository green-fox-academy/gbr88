'use strict';

import { Car } from "./car";
import { Station } from "./station";

// Create a Station and a Car classes
// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

// for testing it

let car1 = new Car();
let station = new Station();

station.status();
car1.status();

station.refill(car1);

station.status();
car1.status();