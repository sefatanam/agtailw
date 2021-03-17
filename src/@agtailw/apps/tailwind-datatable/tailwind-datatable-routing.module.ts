import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TailwindDatatableComponent } from "./tailwind-datatable.component";

const routes: Routes = [
  {path: '', component: TailwindDatatableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TailwindDatatableRoutingModule {
}
