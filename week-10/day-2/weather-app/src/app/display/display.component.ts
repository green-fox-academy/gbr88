import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  toDisplay: any;
  cityIds: number[] = [5809844, 5117451, 6356055, 2643743, 3054643];
  unit: string = '&units=metric';
  inputText: string;

  constructor(private svc: WeatherService) {
  }

  ngOnInit() {
    this.svc.weatherData(this.cityIds.toString(), this.unit).subscribe((response) => {
      this.toDisplay = response;
    });
  }

  search() {
    this.svc.weatherData(this.inputText, this.unit).subscribe((response) => {
      this.toDisplay = response;
    });
  }

}
