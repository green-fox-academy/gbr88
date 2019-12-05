import { environment } from './../environments/environment.prod';
import { WeatherResponse } from './models/weather-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  cityIds: number[] = [5809844, 5117451, 6356055, 2643743, 3054643];
  measurementType: string = '&units=metric'
  weatherUrl: string = environment.serviceApiUrl + this.cityIds.toString() + this.measurementType + environment.serviceApiId;

  constructor(private http: HttpClient) { }

  weatherData(): Observable<WeatherResponse> {

    return this.http
      .get<WeatherResponse[]>(this.weatherUrl)
      .pipe(map((result) => {
        return result['list']
      }));
  }

}