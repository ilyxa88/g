import {Component} from '@angular/core';
import {SlickPreviews} from './slick-previews';

@Component({
  moduleId: module.id,
  selector: 'ng2slick',
  directives: [SlickPreviews],
  inputs: ['data', 'dataChange', 'autoplay', 'dots'],
  templateUrl: 'slick.tpl.html'
})

export class SlickComponent {

  public data:Array<string> = [];
  public dataChange: number;
  public autoplay: boolean = true;
  public dots: boolean = true;
  constructor(){
  }
  ngOnInit(){
    //console.log(this.autoplay)
  }

}
