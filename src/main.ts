import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import {GOOGLE_MAPS_PROVIDERS, provideLazyMapsAPILoaderConfig} from 'angular2-google-maps/core';

declare var $ : any;

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  provide(Window, {useValue: window}),
  //provideLazyMapsAPILoaderConfig({ apiKey: 'AIzaSyAUgZllwEi6visiQWw9qGyOYMhTVWFY6k8', clientId: 'myClientId' }),
  APP_ROUTER_PROVIDERS,
  GOOGLE_MAPS_PROVIDERS
]).catch(err => console.error(err));
