import { WeatherResponse } from './../models/weather-response';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit {

  @Input() response: WeatherResponse;

  constructor() {
  }

  ngOnInit() {
  }

}
