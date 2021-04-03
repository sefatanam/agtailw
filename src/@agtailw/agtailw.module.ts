import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgtailwRoutingModule } from "./agtailw-routing.module";
import { StoreModule } from "@ngrx/store";
import { TitleReducer } from "./store/reducers/title.reducer";
import { EffectsModule } from "@ngrx/effects";
import { TitleEffect } from "./store/effects/title.effect";
import { NgRxDevToolModules } from "./store/ReduxDevToolConfig";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgtailwRoutingModule,


  ]
})
export class AgtailwModule {
}
