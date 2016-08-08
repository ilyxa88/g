import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {environment} from './environment';
//import { NG2_MAP_DIRECTIVES, Ng2MapComponent } from "ng2-map";
//import { MyMapsProjectAppComponent } from './my-maps-project.component'
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import { NavbarComponent, FooterbarComponent } from './shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [AlertComponent, ROUTER_DIRECTIVES, NavbarComponent, FooterbarComponent]
 // directives: [MyMapsProjectAppComponent, AlertComponent, NG2_MAP_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
  constructor(){
  	console.log('Config environment', environment);
    //Ng2MapComponent['apiUrl'] = "https://maps.google.com/maps/api/js?key=AIzaSyBc-mGvim3wNwXBqp9bdJLGHeunGEBmfw0";
  }
}
