import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "../@agtailw/shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { TitleReducer } from "../@agtailw/store/reducers/title.reducer";
import { EffectsModule } from "@ngrx/effects";
import { TitleEffect } from "../@agtailw/store/effects/title.effect";
import { NgRxDevToolModules } from "../@agtailw/store/ReduxDevToolConfig";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    StoreModule.forRoot({titles: TitleReducer}),
    EffectsModule.forRoot([TitleEffect]),
    NgRxDevToolModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
