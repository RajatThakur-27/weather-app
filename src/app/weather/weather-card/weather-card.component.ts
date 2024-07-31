import { Component, Input, OnInit } from '@angular/core';
import { IWeather } from 'src/app/shared/model/weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherToday!: IWeather;
  @Input() curOffSet!: number;

  constructor() {}

  ngOnInit(): void {}

  public getDate(ms: number, curOffSet: number) {
    let date = new Date((ms + curOffSet) * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  }

  public getTemp(temp: number) {
    return Math.round(temp);
  }

  public getIcon(iconName: string): string {
    return `http://openweathermap.org/img/w/${iconName}.png`;
  }

  public getCurrentDate() {
    let today = new Date();
    return `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;
  }
}
