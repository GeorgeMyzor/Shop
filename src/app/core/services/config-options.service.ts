import { Injectable } from '@angular/core';
import { ConfigOptions } from 'src/app/core/models/config-options.model';

import { CoreModule } from 'src/app/core/core.module';

@Injectable({
  providedIn: CoreModule
})
export class ConfigOptionsService {
  private configOptions: ConfigOptions;

  constructor(
    public id: number,
    public login: string,
    public email: string
  ) {
    this.configOptions = new ConfigOptions();
  }

  getId() {
    return this.configOptions.id;
  }

  getLogin() {
    return this.configOptions.login;
  }

  getEmail() {
    return this.configOptions.email;
  }

  setId(id: string) {
    this.configOptions.id = +id;
  }

  setLogin(login: string) {
    this.configOptions.login = login;
  }

  setEmail(email: string) {
    this.configOptions.email = email;
  }
}
