import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavShellComponent } from './nav-shell/nav-shell.component';
import { RouterModule } from "@angular/router";



@NgModule({
    declarations: [NavShellComponent],
    exports: [
        NavShellComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
