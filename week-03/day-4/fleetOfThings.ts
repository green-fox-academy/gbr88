'use strict';

import { Thing } from './thing';
import { Fleet } from './fleet';

class FleetOfThings {
  private fleets: Fleet[];

  constructor() {
    this.fleets = [];
  }

  addFleet(fleet: Fleet): void {
    this.fleets.push(fleet);
  }

  public print(): string {
    // something for each element fleet has and call thing{} and fleet{} getmethods to display data
  }
}

export { FleetOfThings };