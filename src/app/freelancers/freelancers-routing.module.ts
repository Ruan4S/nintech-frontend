import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { FreelancersComponent } from './freelancers/freelancers.component';

const routes: Routes = [{ path: '', component: FreelancersComponent, data: { title: marker('Freelancers') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class FreelancersRoutingModule {}
