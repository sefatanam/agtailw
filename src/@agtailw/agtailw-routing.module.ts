import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./apps/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'descriptions', loadChildren: () => import('./apps/descriptions/descriptions.module').then(m => m.DescriptionsModule) },
  { path: 'modals', loadChildren: () => import('./apps/modals/modals.module').then(m => m.ModalsModule) },
  {
    path: 'features',
    loadChildren: () => import('./apps/tailwind-feature/tailwind-feature.module').then(m => m.TailwindFeatureModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./apps/tailwind-datatable/tailwind-datatable.module').then(m => m.TailwindDatatableModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgtailwRoutingModule {
}
