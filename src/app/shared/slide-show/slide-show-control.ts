import {Component, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'slide-show-control',
  templateUrl: 'slide-show-control.html',
  inputs: ['current', 'currentMax'],
  outputs: ['changed']
})
export class SlideShowControl{
  public current;
  public currentMax;
  public changed = new EventEmitter();
  constructor(){

  }
  previousCurrent(){
    this.changed.emit(this.current-1);
  }
  nextCurrent(){
    this.changed.emit(this.current+1);
  }
}
