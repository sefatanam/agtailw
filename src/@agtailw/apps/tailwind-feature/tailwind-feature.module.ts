import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TailwindFeatureRoutingModule } from './tailwind-feature-routing.module';
import { TailwindFeatureComponent } from './tailwind-feature.component';


@NgModule({
  declarations: [TailwindFeatureComponent],
  imports: [
    CommonModule,
    TailwindFeatureRoutingModule
  ]
})
export class TailwindFeatureModule { }
