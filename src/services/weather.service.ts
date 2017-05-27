import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import API_KEY from '../config/api.config';

@Injectable()
export class WeatherService {

    constructor(private http: Http) {}

    weather(place: string) {
        let url = 'https://api.apixu.com/v1/current.json?key=' + API_KEY + '&q=' + place;
        this.http
            .get(url)
            .map(res => res.json()).subscribe(data => {
                console.log(data);
        });
    }

    forecast(place: string) {
        let url = 'https://api.apixu.com/v1/forecast.json?key=' + API_KEY + '&q=' + place;
        this.http
            .get(url)
            .map(res => res.json()).subscribe(data => {
                console.log(data);
        });
    }
}