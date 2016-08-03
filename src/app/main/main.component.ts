import { Component, OnInit } from '@angular/core';
import {ElementRef} from "@angular/core";
import { NG2_MAP_DIRECTIVES, Ng2MapComponent } from "ng2-map";
import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {FullMainDirective} from '../shared/directive/full-main.directive';
import {SebmGoogleMap} from 'angular2-google-maps/core/index';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'quileo-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
  directives: [FullMainDirective, PAGINATION_DIRECTIVES, ROUTER_DIRECTIVES, SebmGoogleMap]
})
export class MainComponent implements OnInit {

  public listData: any;
  public totalItems:number = 64;
  public currentPage:number = 4;

  public maxSize:number = 5;
  public bigTotalItems:number = 175;
  public bigCurrentPage:number = 1;

  public setPage(pageNo:number):void {
    this.currentPage = pageNo;
  };

  public pageChanged(event:any):void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  };
  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(private _elRef:ElementRef) {
    //Ng2MapComponent['apiUrl'] = "https://maps.google.com/maps/api/js?key=AIzaSyBc-mGvim3wNwXBqp9bdJLGHeunGEBmfw0";
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {

  }
  getListData(){
    // this.listData =
    //   [
    //     {brand: "IKEA", address: "Minsk, Test test test test test test test etst test test test test test test test "},
    //     {brand: "Nike", address: "Minsk, Pushka 7"},
    //     {brand: "adidas", address: "Minsk, Pushka 7 test test test test test"},
    //     {brand: "google", address: "Londan, Test 5 test test"},
    //     {brand: "IKEA", address: "Minsk, Test test test test test test test etst test test test test test test test "},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"}
    //   ]
  }

}
