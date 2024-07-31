import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherCardComponent } from './weather/weather-card/weather-card.component';
import { ForecastComponent } from './weather/forecast/forecast.component';
import { ForecastCardComponent } from './weather/forecast-card/forecast-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    ForecastComponent,
    ForecastCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
