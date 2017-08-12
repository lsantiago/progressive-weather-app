import { Directive, HostListener, Input } from '@angular/core';

import { ModalController } from 'ionic-angular';

import { ForecastModal } from '../modals/forecast-modal/forecast.modal';

@Directive({
  selector: '[forecastClickable]'
})
export class ForecastClickableDirective {

  @Input('forecastClickable') elem;

  constructor(private modalCtrl: ModalController) { }

  @HostListener('click') click() {
    const forcastModal = this.modalCtrl.create(ForecastModal, { day: this.elem });
    forcastModal.present();
  }
}
