import { Component, OnInit, Input } from '@angular/core';
import { WeatherResponse } from '../models/weather-response';

@Component({
  selector: 'app-info-panel-forecast',
  templateUrl: './info-panel-forecast.component.html',
  styleUrls: ['./info-panel-forecast.component.css']
})
export class InfoPanelForecastComponent implements OnInit {
  @Input() response: WeatherResponse;

  constructor() { }

  ngOnInit() {
  };
}
