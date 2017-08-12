import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WeatherPage } from '../weather/weather';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  results = [];

  constructor(private weather: WeatherService,
    private navCtrl: NavController) { }

  getWeather(place) {
    this.navCtrl.push(WeatherPage, { place });
  }

  onInput(event) {
    if (event.target.value && event.target.value.length >= 3) {
      this.weather.autocomplete(event.target.value).subscribe(data => {
        this.results = data;
      });
    } else {
      this.results = [];
    }
  }
}
