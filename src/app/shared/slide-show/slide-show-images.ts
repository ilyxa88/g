import {Component, Input, Output} from '@angular/core';
import {SlideShowImage} from './slide-show-image';

@Component({
    moduleId: module.id,
    selector: 'slide-show-images',
    directives: [SlideShowImage],
    inputs: ['current', 'pics'],
    styleUrls: ['slide-show-images.css'],
    templateUrl: 'slide-show-images.html'
})

export class SlideShowImages{
    public current;
    public pics;
    constructor (){
        // If you want to add items to the list upon construction of the child,
        // use the ngOnInit() hook (not the constructor(),
        // since the data-bound properties aren't initialized at that point)
    }
    isCurrent(_ind){
        return parseInt(this.current) === parseInt(_ind+1);
    }
    ngOnInit (){

    }

}
