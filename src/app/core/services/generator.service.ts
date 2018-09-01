import { Injectable, InjectionToken } from '@angular/core';

import { CoreModule } from 'src/app/core/core.module';

export const FiveLengthGenerator = new InjectionToken<GeneratorService>('FiveLengthGenerator');

export function GeneratorFactory(length: number) {
    return function(): GeneratorService {
      const generator = new GeneratorService();
      generator.length = length;
      return generator;
  };
}

@Injectable()
export class GeneratorService {
  public length: number;

  generate(): string {
    const test = Math.random().toString(36).substring(2, this.length + 2);

    console.log(test);

    return test;
  }
}
