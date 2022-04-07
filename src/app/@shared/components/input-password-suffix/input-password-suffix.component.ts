import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputTypeEnum } from '@app/@shared/enums/general.enum';

@Component({
  selector: 'app-input-password-suffix',
  templateUrl: './input-password-suffix.component.html',
  styleUrls: ['./input-password-suffix.component.scss'],
})
export class InputPasswordSuffixComponent {
  @Input() type: InputTypeEnum;
  @Output() typeChange: EventEmitter<InputTypeEnum> = new EventEmitter<InputTypeEnum>();
  public inputTypeEnum = InputTypeEnum;

  constructor() {}

  toggle(type: InputTypeEnum) {
    this.typeChange.emit(type);
  }
}
