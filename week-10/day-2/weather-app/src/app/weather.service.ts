import { environment } from './../environments/environment.prod';
import { WeatherResponse } from './models/weather-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  weatherData(formula:string,input:string,unit:string): Observable<WeatherResponse> {

    return this.http
      .get<WeatherResponse>(environment.serviceApiUrl + formula + input + unit + environment.serviceApiId);
  }

}