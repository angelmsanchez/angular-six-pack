import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  TesterComponent
} from './components';

export const routes: Route[] = [
  {
    path: '',
    component: TesterComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TesterRoutingModule { }
