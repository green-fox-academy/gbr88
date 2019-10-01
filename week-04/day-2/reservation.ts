'use strict';

// Create a Reservation class by implementing all the features as required by the interface.
// Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.
// Also, the DOW is randomly ordered to the bookings from an array.
// Booking# 1WBA3OMU for THU

import { Reservationy } from './reservationy';

export class Reservation implements Reservationy {
  protected static _dowList: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  protected static _characterList: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  getDowBooking(): string {
    return Reservation._dowList[Math.floor(Math.random() * Reservation._dowList.length)];
  }
  getCodeBooking(): string {
    let randomCode: string[] = [];
    for (let i: number = 0; i < 8; i++) {
      randomCode.push(Reservation._characterList[Math.floor(Math.random() * Reservation._characterList.length)])
    }
    return randomCode.join('');
  };
}