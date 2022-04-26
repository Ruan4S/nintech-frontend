import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@app/material.module';
import { NgBusyModule } from 'ng-busy';
import { FiltroComponent } from './filtro/filtro.component';
import { FreelancersRoutingModule } from './freelancers-routing.module';
import { FreelancersComponent } from './freelancers/freelancers.component';
import { ProfissionalComponent } from './profissional/profissional.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FreelancersRoutingModule, NgBusyModule],
  declarations: [FreelancersComponent, FiltroComponent, ProfissionalComponent],
})
export class FreelancersModule {}
