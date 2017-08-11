import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'weather-page',
  templateUrl: 'weather.html'
})
export class WeatherPage implements OnInit{

  current;
  astro;
  location;
  forecast;
  today;

  constructor(private weather: WeatherService,
              private navParams: NavParams) {}

  ngOnInit() {
    let place = this.navParams.get('place');
    this.weather.forecast(place, 7).subscribe(data => {
      this.current       = data.current;
      this.location      = data.location;
      this.forecast      = data.forecast.forecastday;
      this.today         = data.forecast.forecastday[0];
      this.astro         = data.forecast.forecastday[0].astro;
      this.current.max_c = data.forecast.forecastday[0].day.maxtemp_c;
      this.current.min_c = data.forecast.forecastday[0].day.mintemp_c;
    });
  }
}
