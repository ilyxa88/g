import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'quileo-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css'],
  directives: [ROUTER_DIRECTIVES, MODAL_DIRECTIVES],
  viewProviders:[BS_VIEW_PROVIDERS]
})
export class DetailComponent implements OnInit {


  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor() {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {

  }


}
