import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetosComponent } from './projetos/projetos.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { MaterialModule } from '@app/material.module';
import { NgBusyModule } from 'ng-busy';

@NgModule({
  imports: [CommonModule, ProjetosRoutingModule, MaterialModule, NgBusyModule],
  declarations: [ProjetosComponent, FiltroComponent, ProjetoComponent],
  exports: [ProjetosComponent, FiltroComponent, ProjetoComponent],
})
export class ProjetosModule {}
