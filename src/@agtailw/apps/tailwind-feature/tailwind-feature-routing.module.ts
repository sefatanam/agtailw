import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TailwindFeatureComponent } from "./tailwind-feature.component";

const routes: Routes = [
  {path: '', component: TailwindFeatureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TailwindFeatureRoutingModule {
}
