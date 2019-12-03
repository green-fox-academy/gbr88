import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }

  getWeather() {
    let data;
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8c00b8045a08a472d2f7b2e664aa46b1';
    fetch(url)
    .then(response => response.json())
    .then(response => {
      data = response.coord;
      return data;
    });
    return data;
  }

}
