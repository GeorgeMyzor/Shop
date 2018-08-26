import { Injectable } from '@angular/core';

import { CoreModule } from 'src/app/core/core.module';

@Injectable({
  providedIn: CoreModule
})
export class ConstantsService {

  constructor(
    public appName: string,
    public version: string
  ) {
  }
}
