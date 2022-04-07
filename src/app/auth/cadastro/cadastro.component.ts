import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTypeEnum } from '@app/@shared/enums/general.enum';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;
  inputTypePassword: InputTypeEnum = InputTypeEnum.PASSWORD;
  inputTypePasswordConfirmation: InputTypeEnum = InputTypeEnum.PASSWORD;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}
  private createForm() {
    this.cadastroForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      emailConfirmation: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
      remember: true,
    });
  }
}
