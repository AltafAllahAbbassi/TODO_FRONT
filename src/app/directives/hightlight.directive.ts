import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
@Input() in='red'
@Input() out='yellow'
  @HostBinding('style.background-color')bg:string = 'red'
  constructor() { }

  @HostListener('mouseenter')onMouseEnter(){
    this.bg=this.in
  }
  @HostListener('mouseleave')onMouseLeave(){
    this.bg=this.out
  }
}
