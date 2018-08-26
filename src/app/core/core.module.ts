import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsComponent } from './contact-us/contact-us.component';

import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { ConstantsService } from 'src/app/core/services/constants.service';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

const configOptions = new ConfigOptionsService(1, 'login', 'email');

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ConfigOptionsService, useValue: configOptions},
    ConstantsService,
    GeneratorService,
    LocalStorageService
  ],
  exports: [ContactUsComponent],
  declarations: [ContactUsComponent]
})
export class CoreModule { }
