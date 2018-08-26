import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsComponent } from './contact-us/contact-us.component';

import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { ConstantsService } from 'src/app/core/services/constants.service';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

import { FontChangerDirective } from './font-changer.directive';

const constants = new ConstantsService('TestApp', '1,0');

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ConstantsService, useValue: constants},
    ConfigOptionsService,
    GeneratorService,
    LocalStorageService
  ],
  exports: [ContactUsComponent],
  declarations: [ContactUsComponent, FontChangerDirective]
})
export class CoreModule { }
