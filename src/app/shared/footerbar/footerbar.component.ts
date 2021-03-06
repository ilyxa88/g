import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'guileo-footerbar',
  templateUrl: 'footerbar.component.html',
  styleUrls: ['footerbar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class FooterbarComponent {}
