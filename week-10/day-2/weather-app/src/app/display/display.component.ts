import { Component, OnInit } from '@angular/core';
import { DisplayService } from './display.service';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  weather;

  constructor(service: DisplayService, http: HttpClient) {
    this.weather = 'nope ' + service.getWeather();
   }

  ngOnInit() {
    let obs = this.http.get('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8c00b8045a08a472d2f7b2e664aa46b1');
  }

}
