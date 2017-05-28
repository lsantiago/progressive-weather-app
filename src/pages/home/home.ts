import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WeatherPage } from '../weather/weather';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  results;

  constructor(private weather: WeatherService,
              private navCtrl: NavController) {}

  ngOnInit() {
  }

  getWeather(place) {
    this.navCtrl.push(WeatherPage, {place: place});
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
