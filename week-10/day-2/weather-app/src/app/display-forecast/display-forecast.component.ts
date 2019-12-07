import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { WeatherService } from '../weather.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-display-forecast',
  templateUrl: './display-forecast.component.html',
  styleUrls: ['./display-forecast.component.css']
})
export class DisplayForecastComponent implements OnInit {
  toDisplay: any;
  selectedId: any;
  constructor(private svc: WeatherService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedId = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        params.get('id'))
    );
  
    // console.log(this.selectedId.destination.destination._value.id);
    this.svc.weatherData(environment.searchFormula[2], this.selectedId.destination.destination._value.id, environment.unit).subscribe((response) => {
      this.toDisplay = [response];
    });
  }

}
