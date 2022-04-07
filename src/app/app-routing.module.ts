import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'freelancers',
      loadChildren: () => import('./freelancers/freelancers.module').then((m) => m.FreelancersModule),
    },
    {
      path: 'projetos',
      loadChildren: () => import('./projetos/projetos.module').then((m) => m.ProjetosModule),
    },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'top',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
