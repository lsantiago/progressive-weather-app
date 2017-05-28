import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'weather-page',
  templateUrl: 'weather.html'
})
export class WeatherPage implements OnInit{

  current;
  location;
  forecast;
  segmentSelected = 0;
  daySelected;
  
  constructor(private weather: WeatherService,
              private navParams: NavParams) {}

  ngOnInit() {
    let place = this.navParams.get('place');
    this.weather.weather(place).subscribe(data => {
      this.current = data.current;
      this.location = data.location;
    });

    this.weather.forecast(place, 3).subscribe(data => {
      this.forecast = data.forecast.forecastday;
    });
  }

  segmentChanged(event) {
    this.daySelected = this.forecast[event.value];
    console.log(this.daySelected);
  }

}
