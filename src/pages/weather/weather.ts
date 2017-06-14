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

    let date = new Date();
    let phasesDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    this.weather.moonphases(phasesDate, 4).subscribe(data => {
      this.moonphases = data.phasedata;
      this.moonphases.forEach(elem => {
        let splits = elem.date.split(' ');
        elem.newDate = splits[2] + ' ' + splits[1];
        if(elem.phase === "Last Quarter") {
          elem.img = 'assets/imgs/moon/lastq.png';
          elem.text = 'Last Q.';
        } else if(elem.phase === "New Moon") {
          elem.img = 'assets/imgs/moon/newmoon.png';
          elem.text = 'New Moon';          
        } else if(elem.phase === "First Quarter") {
          elem.img = 'assets/imgs/moon/firstq.png';
          elem.text = 'First Q.';          
        } else if(elem.phase === "Full Moon") {
          elem.img = 'assets/imgs/moon/fullmoon.png';
          elem.text = 'Full Moon';          
        }
      });
    });
  }
}
