import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsComponent } from './contact-us/contact-us.component';

import { FontChangerDirective } from './font-changer.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ContactUsComponent],
  declarations: [ContactUsComponent, FontChangerDirective]
})
export class CoreModule { }
