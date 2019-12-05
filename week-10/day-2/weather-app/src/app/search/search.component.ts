import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private svc: WeatherService) {}

  ngOnInit() {
  }

// search() {
//     this.svc.weatherData(this.inputText, this.unit).subscribe((response) => {
//       this.toDisplay = response;
//     });
//   }

}
