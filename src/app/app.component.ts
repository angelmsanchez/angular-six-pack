import { Component, OnInit } from '@angular/core';

import { ElectronService } from 'ngx-electron';
import { CoreService } from './core/services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private coreService: CoreService,
    private electronService: ElectronService
  ) { }

  ngOnInit(): void {
    this.coreService.getFlights();
  }

  openWindow() {
    this.electronService.shell.openExternal('https://electronjs.org/');
  }
}
