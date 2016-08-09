import {Component, Inject} from '@angular/core';
import {SlideShowControl} from './slide-show-control';
import {SlideShowPreviews} from './slide-show-previews';
import {SlideShowImages} from './slide-show-images';

@Component({
    moduleId: module.id,
    selector: 'slide-show',
    providers: [],
    directives: [SlideShowImages, SlideShowPreviews, SlideShowControl],
    templateUrl: 'slide-show.html',
    styleUrls: ['slide-show.css']
})
export class SlideShow {
    public current:number = 1;
    public currentMax:number = 1;
    public pics:Array<string> = [];
    constructor(){
        this.init();
    }
    init(){
        var nameOfPicFolder = './assets/images/p';
        var noOfPics = 17;
        var counter = 1;
        while (counter <= noOfPics) {
            this.pics.push(nameOfPicFolder+'/Bild_'+counter+'_sm.jpg');
            counter++;
        }
        this.currentMax = this.pics.length;
      console.log(this.currentMax);
    }
    setCurrent(_newValue){
      console.log(_newValue);
        this.current = _newValue;
    }
}
