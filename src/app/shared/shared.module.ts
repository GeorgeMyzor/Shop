import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseoverBackgroundDirective } from './directives/mouseover-background.directive';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MouseoverBackgroundDirective, OrderByPipe],
  exports: [MouseoverBackgroundDirective, OrderByPipe],
})
export class SharedModule { }
