import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesterComponent } from './components/tester/tester.component';
import { TesterRoutingModule } from './tester.routing.module';

@NgModule({
  imports: [
    CommonModule,
    TesterRoutingModule
  ],
  declarations: [
    TesterComponent
  ]
})
export class TesterModule { }
