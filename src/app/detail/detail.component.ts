import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {SlideShow} from '../shared/slide-show/slide-show';
import {SlickComponent} from '../shared/ng2-slick/slick';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'quileo-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css'],
  directives: [ROUTER_DIRECTIVES, MODAL_DIRECTIVES, SlideShow, SlickComponent],
  viewProviders:[BS_VIEW_PROVIDERS]
})
export class DetailComponent implements OnInit {

  public data:Array<string> = [];
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
    this.init();
  }

  init(){
    var nameOfPicFolder = './assets/images/p';
    var noOfPics = 17;
    var counter = 1;
    while (counter <= noOfPics) {
      this.data.push(nameOfPicFolder+'/Bild_'+counter+'_sm.jpg');
      counter++;
    }
    console.log(this.data);
  }
  addPic(){
    setTimeout(()=>{
      this.data.push('./assets/images/p/Bild_16_sm.jpg')
    }, 1000);
  }
}
