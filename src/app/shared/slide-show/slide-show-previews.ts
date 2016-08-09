import {Component, Input, Output,  EventEmitter} from '@angular/core';
import {SlideShowPreview} from './slide-show-preview';

@Component({
    moduleId: module.id,
    selector: 'slide-show-previews',
    directives: [SlideShowPreview],
    templateUrl: 'slide-show-previews.html',
    inputs: ['current', 'pics'],
    outputs: ['changed']
})

export class SlideShowPreviews{
    public current;
    public pics;
    public changed = new EventEmitter();
    constructor (){
        // If you want to add items to the list upon construction of the child,
        // use the ngOnInit() hook (not the constructor(),
        // since the data-bound properties aren't initialized at that point)
    }
    getPercent (_length){
        return 'width : '+ (100 / _length) + '%';
    }
    isCurrent (_ind){
        return parseInt(this.current) === parseInt(_ind+1);
    }
    resetCurrent (_ind) {
        this.current = parseInt(_ind+1);
        this.changed.emit(this.current);
    }
    ngOnInit (){
      //this.getPercent()
    }
    getCurrent(current, i){
      return (i<current+2) && (i>current-2);
    }

}
