import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WeatherPage } from '../pages/weather/weather';
import { SettingsPage } from '../pages/settings/settings';
import { WeatherService } from '../services/weather.service';
import { ForecastItem } from '../components/forecast-item/forecast-item.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WeatherPage,
    SettingsPage,
    ForecastItem
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
    SettingsPage,
    ForecastItem
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherService
  ]
})
export class AppModule {}
