import { Component, OnInit } from '@angular/core';
import { Optional } from '@angular/core';
import { ConstantsService } from 'src/app/core/services/constants.service';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styles: []
})
export class ContactUsComponent implements OnInit {

  constructor(
    @Optional() private constantsService: ConstantsService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() private generatorService: GeneratorService,
    @Optional() private localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    const result1 = Boolean(this.constantsService);
    const result2 = Boolean(this.configOptionsService);
    const result3 = Boolean(this.generatorService);
    const result4 = Boolean(this.localStorageService);

    console.log('Constants:' + result1 + ' Config:' + result2 + ' Generator:' + result3 + ' LocalStorage:' + result4);
  }

}
