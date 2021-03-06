import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  enabledButtonElectron: boolean;

  private scrollSubscription: Subscription;

  constructor(
    private router: Router,
    private electronService: ElectronService,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.initSubscribeScrollPosition();
    this.enabledButtonElectron = !!this.electronService.shell;
  }

  ngOnDestroy(): void {
    if (this.scrollSubscription) this.scrollSubscription.unsubscribe();
  }


  openWindow() {
    this.electronService.shell.openExternal('https://electronjs.org/');
  }

  private initSubscribeScrollPosition(): void {
    this.scrollSubscription = this.router.events.pipe(filter(e => e instanceof Scroll))
      .subscribe((e: any) => {
        // console.log('SCROLL: ', e);
        if (e.position) {
          this.viewportScroller.scrollToPosition(e.position);
        } else if (e.anchor) {
          this.viewportScroller.scrollToAnchor(e.anchor);
        } else {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}
