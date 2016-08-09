import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'slide-show-image',
    inputs: ['pic'],
    templateUrl: 'slide-show-image.html'
})

export class SlideShowImage{
    public pic: any;
    constructor(){
    }
    ngOnInit (){
    }
}
