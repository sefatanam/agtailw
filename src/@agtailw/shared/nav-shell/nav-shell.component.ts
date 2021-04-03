import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../store/states/AppState";
import { Observable } from "rxjs";
import { TitleState } from "../../store/states/apps/TitleState";

@Component({
  selector: 'app-nav-shell',
  templateUrl: './nav-shell.component.html',
  styleUrls: ['./nav-shell.component.scss']
})
export class NavShellComponent implements OnInit {
  isShown: boolean = false;
  isMobileMenuClose: boolean = true;
  title$: Observable<string> | undefined;
  loading$: Observable<boolean> | undefined;

  constructor(private stores$: Store<AppState>) {
  }

  ngOnInit(): void {
    this.title$ = this.stores$.select(store => store.titles.name);
    this.loading$ = this.stores$.select(store => store.titles.loading);
  }

}
