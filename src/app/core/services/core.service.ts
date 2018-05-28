import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CoreService {

  constructor(
  ) { }

  getFlights(): any {
    console.log('getFlights');
  }
}
