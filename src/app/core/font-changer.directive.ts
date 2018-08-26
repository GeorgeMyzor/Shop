import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { HostListener } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[appFontChanger]'
})
export class FontChangerDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('appFontChanger') fontSize: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  onClick() {
    this.renderer.setStyle(this.element.nativeElement, 'fontSize', this.fontSize);
  }
}
