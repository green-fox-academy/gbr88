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

  constructor(private http: HttpClient) { }

  weatherData(input:string,unit:string): Observable<WeatherResponse> {

    return this.http
      .get<WeatherResponse[]>(environment.serviceApiUrl + input + unit + environment.serviceApiId)
      .pipe(map((result) => {
        return result['list'];
      }));
  }

}