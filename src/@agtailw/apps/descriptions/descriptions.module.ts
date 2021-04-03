import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescriptionsRoutingModule } from './descriptions-routing.module';
import { DescriptionsComponent } from './descriptions.component';


@NgModule({
  declarations: [DescriptionsComponent],
  imports: [
    CommonModule,
    DescriptionsRoutingModule
  ]
})
export class DescriptionsModule { }
