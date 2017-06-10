import {
  Directive,
  OnInit,
  HostListener,
  Input
} from '@angular/core';

import { ModalController } from 'ionic-angular';

import { ForecastModal } from '../modals/forecast-modal/forecast.modal';

@Directive({
  selector: '[forecastClickable]'
})
export class ForecastClickableDirective implements OnInit {

  @Input('forecastClickable') elem;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  @HostListener('click') click() {
      let forcastModal = this.modalCtrl.create(ForecastModal, {day: this.elem});
      forcastModal.present();
  }
}
