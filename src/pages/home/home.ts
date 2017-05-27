import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public navCtrl: NavController, private weather: WeatherService) {}

  ngOnInit() {
    this.weather.getWeather('Madrid');
  }
}
