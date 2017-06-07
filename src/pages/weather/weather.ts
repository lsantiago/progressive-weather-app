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

  constructor(private weather: WeatherService,
              private navParams: NavParams) {}

  ngOnInit() {
    let place = this.navParams.get('place');

    this.weather.weather(place).subscribe(data => {
      this.current = data.current;
      this.location = data.location;
      
      this.weather.forecast(place, 7).subscribe(data => {
        this.forecast = data.forecast.forecastday;
        this.current.max_c = this.forecast[0].day.maxtemp_c;
        this.current.min_c = this.forecast[0].day.mintemp_c;
        this.current.astro = this.forecast[0].astro;
      });
    });
  }
}
