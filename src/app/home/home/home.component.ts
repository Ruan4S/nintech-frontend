import { Component, OnInit } from '@angular/core';
import { NgxAnimatedCounterParams } from '@bugsplat/ngx-animated-counter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  freelancersParams: NgxAnimatedCounterParams = { start: 0, end: 1547, increment: 7, interval: 10 };
  projectParams: NgxAnimatedCounterParams = { start: 0, end: 6903, increment: 13, interval: 10 };
  usersParams: NgxAnimatedCounterParams = { start: 0, end: 402, interval: 10 };

  constructor() {}

  ngOnInit(): void {}
}
