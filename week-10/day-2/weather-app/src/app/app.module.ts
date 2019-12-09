import { WeatherService } from './weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { FormsModule } from '@angular/forms';
import { DisplayForecastComponent } from './display-forecast/display-forecast.component';
import { InfoPanelForecastComponent } from './info-panel-forecast/info-panel-forecast.component';

const appRoutes: Routes = [
  { path: '', component: DisplayComponent },
  { path: 'dashboard', component: DisplayComponent },
  { path: 'dashboard/:id', component: DisplayForecastComponent },
  { path: ':id', component: DisplayForecastComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    InfoPanelComponent,
    DisplayForecastComponent,
    InfoPanelForecastComponent,

  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
