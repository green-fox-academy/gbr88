import { Component, OnInit } from '@angular/core';
import { DisplayService } from './display.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  response: any;
  constructor(private http: HttpClient) {
   }

  ngOnInit() {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8c00b8045a08a472d2f7b2e664aa46b1')
    .subscribe((response) => this.response = response);
  }

}
