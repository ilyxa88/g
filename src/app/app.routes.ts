import { provideRouter, RouterConfig } from '@angular/router';
import {MainRoutes} from './main/index';
import {DetailRoutes} from './detail/index';


const routes: RouterConfig = [
  ...MainRoutes,
  ...DetailRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
