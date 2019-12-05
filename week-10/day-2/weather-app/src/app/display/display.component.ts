import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  toDisplay: any;
  inputText: string;

  constructor(private svc: WeatherService) {
  }

  ngOnInit() {
    this.svc.weatherData(environment.searchFormula[0],environment.cityIds.toString(), environment.unit).subscribe((response) => {
      this.toDisplay = response['list'];
    });
  }

  search() {
    this.svc.weatherData(environment.searchFormula[1],this.inputText, environment.unit).subscribe((response) => {
      this.toDisplay = [response];
    });
  }

}
