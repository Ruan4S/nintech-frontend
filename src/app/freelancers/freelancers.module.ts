import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { FreelancersRoutingModule } from './freelancers-routing.module';
import { FreelancersComponent } from './freelancers/freelancers.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ProfissionalComponent } from './profissional/profissional.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, FreelancersRoutingModule],
  declarations: [FreelancersComponent, FiltroComponent, ProfissionalComponent],
})
export class FreelancersModule {}
