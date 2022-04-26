import { Component, Input, OnInit } from '@angular/core';
import { ProfessionalModel } from '@app/@shared/models/professional.model';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.scss'],
})
export class ProfissionalComponent implements OnInit {
  @Input() profissional: ProfessionalModel;

  constructor() {}

  ngOnInit(): void {}
}
