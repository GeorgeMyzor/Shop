import { Injectable, InjectionToken } from '@angular/core';

import { CoreModule } from 'src/app/core/core.module';

export const FiveLengthGenerator = new InjectionToken<GeneratorService>('FiveLengthGenerator');

export function GeneratorFactory(length: number) {
    return function(): GeneratorService {
      return new GeneratorService(length);
  };
}

@Injectable({
  providedIn: CoreModule
})
export class GeneratorService {
  private length: number;

  constructor(length: number) {
    this.length = length;
  }

  generate(): string {
    const test = Math.random().toString(36).substring(2, this.length + 2);

    console.log(test);

    return test;
  }
}
