import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'forecast-item',
  templateUrl: 'forecast-item.component.html'
})
export class ForecastItem implements OnInit{

  @Input('day') day;

  constructor() {}

  ngOnInit() {
    this.day.day.condition.lowertext = this.day.day.condition.text.toLowerCase();
  }
}
