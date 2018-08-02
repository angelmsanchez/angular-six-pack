import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CoreService {

  constructor(
  ) { }

  getFlights(): void {
    console.log('getFlights');
  }
}
