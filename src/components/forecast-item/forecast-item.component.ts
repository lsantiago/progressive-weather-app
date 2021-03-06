import { Component, OnInit, Input } from '@angular/core';

import { ConditionsService } from '../../services/conditions.service';

import * as dateFns from 'date-fns';

@Component({
  selector: 'forecast-item',
  templateUrl: 'forecast-item.component.html'
})
export class ForecastItem implements OnInit {

  @Input('day') day;
  @Input('hour') hour;

  constructor(private conditions: ConditionsService) { }

  ngOnInit() {
    if (this.day) {
      const parts = this.day.date.split('-');
      const date = new Date(parts[0], parts[1] - 1, parts[2]);
      this.getDay(date);
    } else {
      this.hour.hour = this.hour.time.split(' ')[1];
      this.hour.img = 'assets/imgs/' + this.isDay(this.hour.is_day) + '/' +
        this.conditions.getDataFromCode(this.hour.condition.code).icon + '.png';
    }
  }

  isDay(day) {
    return day === 1 ? 'day' : 'night';
  }

  getDay(date) {
    if (dateFns.isToday(date)) {
      this.day.datetext = 'Today';
    } else if (dateFns.isTomorrow(date)) {
      this.day.datetext = 'Tomorrow';
    } else if (dateFns.isMonday(date)) {
      this.day.datetext = 'Monday';
    } else if (dateFns.isTuesday(date)) {
      this.day.datetext = 'Tuesday';
    } else if (dateFns.isWednesday(date)) {
      this.day.datetext = 'Wednesday';
    } else if (dateFns.isThursday(date)) {
      this.day.datetext = 'Thursday';
    } else if (dateFns.isFriday(date)) {
      this.day.datetext = 'Friday';
    } else if (dateFns.isSaturday(date)) {
      this.day.datetext = 'Saturday';
    } else if (dateFns.isSunday(date)) {
      this.day.datetext = 'Sunday';
    }
  }
}
