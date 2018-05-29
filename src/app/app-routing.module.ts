import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'tester',
    loadChildren: './tester/tester.module#TesterModule',
  },
  { path: '**', redirectTo: 'home' }
];
