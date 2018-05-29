import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})

export class TesterComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('tester component');
  }

  goTo(): void {
    this.router.navigate(['home']);
  }
}
