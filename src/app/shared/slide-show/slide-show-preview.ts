import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'slide-show-preview',
    templateUrl: 'slide-show-preview.html',
    inputs: ['pic']
})

export class SlideShowPreview{
    public pic;
    constructor(){
    }
    ngAfterViewInit(){
    }
}
