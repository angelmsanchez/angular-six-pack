import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})

export class TesterComponent {

  constructor(
    private router: Router
  ) { }

  goTo(): void {
    this.router.navigate(['home']);
  }
}
