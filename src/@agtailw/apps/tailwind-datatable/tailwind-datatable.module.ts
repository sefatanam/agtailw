import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TailwindDatatableRoutingModule } from './tailwind-datatable-routing.module';
import { TailwindDatatableComponent } from './tailwind-datatable.component';


@NgModule({
  declarations: [TailwindDatatableComponent],
  imports: [
    CommonModule,
    TailwindDatatableRoutingModule
  ]
})
export class TailwindDatatableModule { }
