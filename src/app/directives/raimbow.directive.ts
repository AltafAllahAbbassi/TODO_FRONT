import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRaimbow]'
})
export class RaimbowDirective {

  @HostBinding('style.border-color') border='yellow';
  @HostBinding('style.color') color;
  @HostListener('keydown') changeColor(){
    var randomColor='#'+Math.floor(Math.random()*16777215).toString(16)
    this.border=randomColor;
    this.color=randomColor
  }
  constructor() { }

}
