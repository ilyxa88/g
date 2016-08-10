import {Component} from '@angular/core';
import {SlickPreviews} from './slick-previews';

@Component({
  moduleId: module.id,
  selector: 'ng2slick',
  directives: [SlickPreviews],
  templateUrl: 'slick.tpl.html'
})

export class SlickComponent {

  public data:Array<string> = [];
  constructor(){
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

  }

}
