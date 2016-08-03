import { Component } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

@Component({
  moduleId: module.id,
  selector: 'my-maps-project-app',
  templateUrl: 'my-maps-project.component.html',
  styleUrls: ['my-maps-project.component.css'],
  directives: [GOOGLE_MAPS_DIRECTIVES]
})
export class MyMapsProjectAppComponent {
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
}