import { Component, Input, OnInit } from '@angular/core';
import { IList } from 'src/app/shared/model/forecast.model';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss'],
})
export class ForecastCardComponent implements OnInit {
  @Input() forecastHourly!: IList;
  @Input() day!: string;
  @Input() curOffSet!: number;

  constructor() {}

  ngOnInit(): void {}

  public getTemp(temp: number) {
    return Math.round(temp);
  }

  public getDate(ms: number) {
    let date = new Date((ms + this.curOffSet) * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  }

  public getIcon(iconName: string): string {
    return `http://openweathermap.org/img/w/${iconName}.png`;
  }
}
