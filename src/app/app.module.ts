import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WeatherPage } from '../pages/weather/weather';
import { WeatherService } from '../services/weather.service';
import { ForecastItem } from '../components/forecast-item/forecast-item.component';
import { ForecastClickableDirective } from '../directives/forecast.clickable.directive';
import { ForecastModal } from '../modals/forecast-modal/forecast.modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WeatherPage,
    ForecastItem,
    ForecastClickableDirective,
    ForecastModal
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WeatherPage,
    ForecastItem,
    ForecastModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherService
  ]
})
export class AppModule {}
