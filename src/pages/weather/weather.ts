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
  today;
  moonphases;

  constructor(private weather: WeatherService,
              private navParams: NavParams) {}

  ngOnInit() {
    let place = this.navParams.get('place');

    this.weather.weather(place).subscribe(data => {
      this.current = data.current;
      this.location = data.location;
    });

    this.weather.forecast(place, 7).subscribe(data => {
      this.forecast = data.forecast.forecastday;
      this.today = this.forecast[0];
      this.current.max_c = this.forecast[0].day.maxtemp_c;
      this.current.min_c = this.forecast[0].day.mintemp_c;
      this.current.astro = this.forecast[0].astro;
    });

    this.weather.moonphases('6/12/2017', 4).subscribe(data => {
      this.moonphases = data.phasedata;
      this.moonphases.forEach(elem => {
        if(elem.phase === "Last Quarter") {
          elem.img = 'assets/imgs/moon/lastq.png';
        } else if(elem.phase === "New Moon") {
          elem.img = 'assets/imgs/moon/newmoon.png';
        } else if(elem.phase === "First Quarter") {
          elem.img = 'assets/imgs/moon/firstq.png';
        } else if(elem.phase === "Full Moon") {
          elem.img = 'assets/imgs/moon/fullmoon.png';
        }
      });
    });
  }
}
