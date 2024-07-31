import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IForecast } from '../model/forecast.model';
import { IWeather } from '../model/weather.model';

const API_KEY = '6974641d41d1c6ecec9e4811ad91c4e7'; // 6974641d41d1c6ecec9e4811ad91c4e7   &  d0ba4c8c7f39fb044c95318a05ddc6ca
const API_URL = 'https://api.openweathermap.org/data/2.5';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getWeatherByCity(city: string): Observable<IWeather> {
    return this.httpClient.get<IWeather>(
      `${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    // catch(this.handleError);
  }
  getForecastByCity(city: string): Observable<IForecast> {
    return this.httpClient.get<IForecast>(
      `${API_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
  }
  // private handleError(error: any) {
  //   // In a real world app, we might use a remote logging infrastructure
  //   let errMsg: string;
  //   errMsg = error.message ? error.message : error.toString();
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }
}
