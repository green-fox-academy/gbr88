import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  toDisplay: any;
  constructor(private svc: WeatherService) {
  }

  ngOnInit() {
    this.svc.weatherData().subscribe((response) => {
      this.toDisplay = response;
    });
  }

}
