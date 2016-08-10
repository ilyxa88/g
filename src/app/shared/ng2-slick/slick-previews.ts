import {Component, ElementRef, Renderer} from '@angular/core';
declare var $ : any;

@Component({
  moduleId: module.id,
  selector: 'slick-previews',
  inputs: [
    'initOnload',
    'data',
    'currentIndex',
    'accessibility',
    'adaptiveHeight',
    'arrows',
    'asNavFor',
    'appendArrows',
    'appendDots',
    'autoplay',
    'autoplaySpeed',
    'centerMode',
    'centerPadding',
    'cssEase',
    'customPaging',
    'dots',
    'draggable',
    'easing',
    'fade',
    'focusOnSelect',
    'infinite',
    'initialSlide',
    'lazyLoad',
    'onBeforeChange',
    'onAfterChange',
    'onInit',
    'onReInit',
    'onSetPosition',
    'pauseOnHover',
    'pauseOnDotsHover',
    'responsive',
    'rtl',
    'slide',
    'slidesToShow',
    'slidesToScroll',
    'speed',
    'swipe',
    'swipeToSlide',
    'touchMove',
    'touchThreshold',
    'useCSS',
    'variableWidth',
    'vertical',
    'prevArrow',
    'nextArrow'
  ],
  templateUrl: 'slick-previews.tpl.html'
})

export class SlickPreviews {
  public pics : Array<string>;
  public initOnload:any;
  public data : Array<string>;
  public currentIndex:any;
  public accessibility:any;
  public adaptiveHeight:any;
  public arrows:any;
  public asNavFor:any;
  public appendArrows:any;
  public appendDots:any;
  public autoplay:any;
  public autoplaySpeed:any;
  public centerMode:any;
  public centerPadding:any;
  public cssEase:any;
  public customPaging:any;
  public dots:any;
  public draggable:any;
  public easing:any;
  public fade:any;
  public focusOnSelect:any;
  public infinite:any;
  public initialSlide:any;
  public lazyLoad:any;
  public onBeforeChange:any;
  public onAfterChange:any;
  public onInit:any;
  public onReInit:any;
  public onSetPosition:any;
  public pauseOnHover:any;
  public pauseOnDotsHover:any;
  public responsive:any;
  public rtl:any;
  public slide:any;
  public slidesToShow:any;
  public slidesToScroll:any;
  public speed:any;
  public swipe:any;
  public swipeToSlide:any;
  public touchMove:any;
  public touchThreshold:any;
  public useCSS:any;
  public variableWidth:any;
  public vertical:any;
  public prevArrow:any;
  public nextArrow:any;
  constructor(private el: ElementRef,private renderer: Renderer){
  }
  ngOnInit(){
    this.onSlickInit();
  }
  onSlickInit(){
    var element = this.el.nativeElement;
    // setTimeout(function(){
    //   console.log(slider.slick());
    // })
    var destroySlick, initializeSlick, isInitialized;
    // destroySlick = function () {
    //   return setTimeout(function () {
    //     var slider;
    //     slider = $(element);
    //     slider.slick('unslick');
    //     slider.find('.slick-list').remove();
    //     return slider;
    //   });
    // };
    initializeSlick = function () {
      setTimeout(function () {
        var currentIndex, customPaging, slider;
        slider = $(element);
        if (this.currentIndex != null) {
          currentIndex = this.currentIndex;
        }
        customPaging = function (slick, index) {
          return this.customPaging({
            slick: slick,
            index: index
          });
        };
        var attrs = {};
        slider.slick({
          // accessibility: this.accessibility !== 'false',
          // adaptiveHeight: this.adaptiveHeight === 'true',
          // arrows: this.arrows !== 'false',
          // asNavFor: this.asNavFor ? this.asNavFor : void 0,
          // appendArrows: this.appendArrows ? $(this.appendArrows) : $(element),
          // appendDots: this.appendDots ? $(this.appendDots) : $(element),
          // autoplay: this.autoplay === 'true',
          // autoplaySpeed: this.autoplaySpeed != null ? parseInt(this.autoplaySpeed, 10) : 3000,
          // centerMode: this.centerMode === 'true',
          // centerPadding: this.centerPadding || '50px',
          // cssEase: this.cssEase || 'ease',
          // customPaging: attrs.customPaging ? customPaging : void 0,
          // dots: this.dots === 'true',
          // draggable: this.draggable !== 'false',
          // easing: this.easing || 'linear',
          // fade: this.fade === 'true',
          // focusOnSelect: this.focusOnSelect === 'true',
          // infinite: this.infinite !== 'false',
          // initialSlide: this.initialSlide || 0,
          // lazyLoad: this.lazyLoad || 'ondemand',
          // beforeChange: attrs.onBeforeChange ? this.onBeforeChange : void 0,
          // onReInit: attrs.onReInit ? this.onReInit : void 0,
          // onSetPosition: attrs.onSetPosition ? this.onSetPosition : void 0,
          // pauseOnHover: this.pauseOnHover !== 'false',
          // responsive: this.responsive || void 0,
          // rtl: this.rtl === 'true',
          // slide: this.slide || 'div',
          // slidesToShow: this.slidesToShow != null ? parseInt(this.slidesToShow, 10) : 1,
          // slidesToScroll: this.slidesToScroll != null ? parseInt(this.slidesToScroll, 10) : 1,
          // speed: this.speed != null ? parseInt(this.speed, 10) : 300,
          // swipe: this.swipe !== 'false',
          // swipeToSlide: this.swipeToSlide === 'true',
          // touchMove: this.touchMove !== 'false',
          // touchThreshold: this.touchThreshold ? parseInt(this.touchThreshold, 10) : 5,
          // useCSS: this.useCSS !== 'false',
          // variableWidth: this.variableWidth === 'true',
          // vertical: this.vertical === 'true',
          // prevArrow: this.prevArrow ? $(this.prevArrow) : void 0,
          // nextArrow: this.nextArrow ? $(this.nextArrow) : void 0
        });

      });
    };

    initializeSlick();
  }
}
