import { Component, Input, OnInit } from '@angular/core';
import { ProjectModel } from '@app/@shared/models/project.model';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss'],
})
export class ProjetoComponent implements OnInit {
  @Input() project: ProjectModel;

  constructor() {}

  ngOnInit(): void {}
}
