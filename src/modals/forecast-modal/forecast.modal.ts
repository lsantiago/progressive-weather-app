import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'forecast-modal',
  templateUrl: 'forecast.modal.html'
})
export class ForecastModal {

  day;

  constructor(public viewCtrl: ViewController, params: NavParams) {
    this.day = params.get('day');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
