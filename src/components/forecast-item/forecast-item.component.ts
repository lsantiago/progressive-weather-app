import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'forecast-item',
  templateUrl: 'forecast-item.component.html'
})
export class ForecastItem implements OnInit{

  @Input('hour') hour;

  constructor() {}

  ngOnInit() {
    let hour = this.hour.time.split(' ')[1];
    this.hour.hour = hour;
  }
}
