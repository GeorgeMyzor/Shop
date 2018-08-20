import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[mouseover.background]'
})
export class MouseoverBackgroundDirective {
  // tslint:disable-next-line:no-output-rename
  @Output('mouseover.background')
  mouseOverBacground = new EventEmitter();

  @HostListener('mouseover', ['$event'])
  onMouseover(event) {
    this.mouseOverBacground.emit(event);
  }
}
