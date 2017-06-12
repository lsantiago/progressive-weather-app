import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { API_KEY } from '../config/api.config';

@Injectable()
export class WeatherService {

    constructor(private http: Http) {}

    weather(place: string) {
        let url = 'https://api.apixu.com/v1/current.json?key=' + API_KEY + '&q=' + place;
        return this.http
            .get(url)
            .map(res => res.json());
    }

    forecast(place: string, days: number) {
        let url = 'https://api.apixu.com/v1/forecast.json?key=' + API_KEY
                    + '&q=' + place + '&days=' + days;
        return this.http
            .get(url)
            .map(res => res.json());
    }

    autocomplete(place: string) {
        let url = 'https://api.apixu.com/v1/search.json?key=' + API_KEY + '&q=' + place;
        return this.http
            .get(url)
            .map(res => res.json());
    }

    moonphases(date, num) {
        let url = 'http://api.usno.navy.mil/moon/phase?date=' + date + '&nump=' + num;
        return this.http
            .get(url)
            .map(res => res.json());
    }
}