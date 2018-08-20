import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseoverBackgroundDirective } from '../directives/mouseover-background.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MouseoverBackgroundDirective],
  exports: [MouseoverBackgroundDirective]
})
export class SharedModule { }
