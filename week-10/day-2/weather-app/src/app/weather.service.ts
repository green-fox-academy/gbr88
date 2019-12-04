import { WeatherResponse } from './models/weather-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl: string = 'http://api.openweathermap.org/data/2.5/group?id=5809844,5117451,6356055,2643743,3054643&units=metric&APPID=8c00b8045a08a472d2f7b2e664aa46b1';

  constructor(private http: HttpClient) { }

  weatherData(): Observable<WeatherResponse> {

    return this.http
      .get<WeatherResponse[]>(this.weatherUrl)
      .pipe(map((result) => {
        return result['list']
      }));
  }

}