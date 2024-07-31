import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IList } from 'src/app/shared/model/forecast.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  @Input() forecastOneDay!: IList[];
  @Input() selectedForecast!: IList[];
  @Input() isShowMoreInfo!: boolean;
  @Input() dayWeek!: string;
  @Output() isShowMoreInfoChange = new EventEmitter<boolean>();
  @Output() selectedForecastChange = new EventEmitter<IList[]>();
  @Output() dayWeekChange = new EventEmitter<string>();
  day!: string;
  date!: number;
  month!: string;
  temp!: number;
  icon!: string;
  description!: string;

  constructor() {}

  ngOnInit(): void {
    this.getDate(this.forecastOneDay[0]?.dt);
  }

  public showMoreInfo() {
    this.selectedForecast = this.forecastOneDay.slice(0);
    this.isShowMoreInfo = true;
    this.dayWeek = this.day;
    this.isShowMoreInfoChange.emit(this.isShowMoreInfo);
    this.selectedForecastChange.emit(this.selectedForecast);
    this.dayWeekChange.emit(this.day);
  }

  public getDate(ms: number) {
    this.description =
      this.forecastOneDay[
        Math.floor(this.forecastOneDay.length / 2)
      ]?.weather[0].main;
    this.icon = `http://openweathermap.org/img/w/${
      this.forecastOneDay[Math.floor(this.forecastOneDay.length / 2)]
        ?.weather[0].icon
    }.png`;
    this.temp = Math.round(
      this.forecastOneDay[Math.floor(this.forecastOneDay.length / 2)]?.main.temp
    );
    let date = new Date(ms * 1000);
    let day = date.getDay();
    switch (day) {
      case 1:
        this.day = 'Monday';
        break;
      case 2:
        this.day = 'Tuesday';
        break;
      case 3:
        this.day = 'Wednesday';
        break;
      case 4:
        this.day = 'Thursday';
        break;
      case 5:
        this.day = 'Friday';
        break;
      case 6:
        this.day = 'Saturday';
        break;
      case 0:
        this.day = 'Sunday';
        break;
      default:
        break;
    }
    this.date = date.getDate();
    let month = date.getMonth();
    switch (month) {
      case 1:
        this.month = 'February';
        break;
      case 2:
        this.month = 'March';
        break;
      case 3:
        this.month = 'April';
        break;
      case 4:
        this.month = 'May';
        break;
      case 5:
        this.month = 'June';
        break;
      case 6:
        this.month = 'July';
        break;
      case 7:
        this.month = 'August';
        break;
      case 8:
        this.month = 'September';
        break;
      case 9:
        this.month = 'October';
        break;
      case 10:
        this.month = 'November';
        break;
      case 11:
        this.month = 'December';
        break;
      case 0:
        this.month = 'January';
        break;
      default:
        break;
    }
  }
}
