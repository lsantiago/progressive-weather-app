import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'forecast-modal',
  templateUrl: 'forecast.modal.html'
})
export class ForecastModal implements OnInit{

  day;

  constructor(public viewCtrl: ViewController, params: NavParams) {
     this.day =  params.get('day');
     console.log(this.day);
  }

  ngOnInit() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}