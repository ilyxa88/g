import {Directive, ElementRef, Renderer, OnInit} from '@angular/core';
declare var $ : any;

@Directive({
  selector:'[fullMain]'
})

export class FullMainDirective  {
  constructor(private _elRef:ElementRef,private renderer: Renderer, private _window: Window){

  }
  updateMain(){
    let win_h:any,
      menu_h:any,
      footer_h:any,
      search_h:any,
      content_h:any,
      content_list_h:any,
      min_list_h:any,
      containerMap:any,
      min_map_h:any;
    win_h = $(this._window).height();
    menu_h = $('#header').height();
    footer_h = $('#footer').height();
    search_h = $('.header-panel').outerHeight();
    containerMap = $('.container-map');
    if(!containerMap.css('min-height')) return;
    min_map_h = containerMap.css('min-height').slice(0,-2);
    min_list_h = min_map_h - search_h;
    content_h = win_h - menu_h - footer_h;
    content_list_h = win_h - menu_h - footer_h - search_h;
    $('.list-panel').css({'height': content_list_h + 'px', 'minHeight': min_list_h});
    $('.container-map').css('height', content_h + 'px');
  }

  ngOnInit(){
    this.updateMain();
    $( this._window ).resize(() => this.updateMain());
  }
}
