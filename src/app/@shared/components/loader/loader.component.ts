import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() size: number = 2.5;
  @Input() strokeWidth: number = 6;

  constructor() {}

  ngOnInit() {}
}
