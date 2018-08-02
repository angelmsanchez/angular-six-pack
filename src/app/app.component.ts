import { Component, OnInit } from '@angular/core';

import { CoreService } from './core/services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private coreService: CoreService
  ) { }

  ngOnInit(): void {
    this.coreService.getFlights();
  }
}
