import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { ProjetosComponent } from './projetos/projetos.component';

const routes: Routes = [{ path: '', component: ProjetosComponent, data: { title: marker('Projetos') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetosRoutingModule {}
