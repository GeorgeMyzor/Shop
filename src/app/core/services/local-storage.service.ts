import { Injectable } from '@angular/core';

import { CoreModule } from '../core.module';

@Injectable()
export class LocalStorageService {

  constructor() { }

  setItem(key: string, data: string) {
    localStorage.setItem(key, data);
  }

  getItem(key: string): string {
    return localStorage.getItem(key);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
