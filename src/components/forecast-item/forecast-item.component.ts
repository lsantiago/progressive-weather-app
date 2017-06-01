import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'forecast-item',
  templateUrl: 'forecast-item.component.html'
})
export class ForecastItem implements OnInit{

  @Input('hour') hour;

  constructor() {}

  ngOnInit() {
    let utcSeconds = this.hour.time_epoch;
    let date = new Date(0);
    date.setUTCSeconds(utcSeconds);
    this.hour.hour = date.getHours();
  }
}
