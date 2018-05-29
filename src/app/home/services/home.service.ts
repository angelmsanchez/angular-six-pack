import { Injectable } from '@angular/core';

import { HomeModule } from './../home.module';
import { TesterModule } from './../../tester/tester.module';
import { CoreModule } from './../../core/core.module';

@Injectable(  // providedIn: HomeModule
)

export class HomeService {

  constructor(
  ) {
    console.log('init HomeService');
  }

  getTest(): void {
    console.log('getTest');
  }
}
