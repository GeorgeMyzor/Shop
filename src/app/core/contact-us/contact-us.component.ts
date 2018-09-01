import { Component, OnInit } from '@angular/core';
import { Optional, Inject } from '@angular/core';
import { ConstantsService } from 'src/app/core/services/constants.service';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { GeneratorService, FiveLengthGenerator, GeneratorFactory } from 'src/app/core/services/generator.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  providers: [
    { provide: FiveLengthGenerator, useFactory: GeneratorFactory(5)}
  ]
})
export class ContactUsComponent implements OnInit {

  constructor(
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() private localStorageService: LocalStorageService,
    @Inject(FiveLengthGenerator) private fiveLengthGenerator: GeneratorService
  ) { }

  ngOnInit() {
    const result1 = Boolean(ConstantsService);
    const result2 = Boolean(this.configOptionsService);
    const result4 = Boolean(this.localStorageService);

    console.log('Constants:' + result1 + ' Config:' + result2 + ' LocalStorage:' + result4);

    console.log(ConstantsService.appName + ConstantsService.version);

    console.log('Generator:' + Boolean(this.fiveLengthGenerator));
    this.fiveLengthGenerator.generate();
  }
}
