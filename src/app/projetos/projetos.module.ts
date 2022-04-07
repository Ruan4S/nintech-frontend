import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetosComponent } from './projetos/projetos.component';

@NgModule({
  declarations: [ProjetosComponent],
  imports: [CommonModule, ProjetosRoutingModule],
})
export class ProjetosModule {}
