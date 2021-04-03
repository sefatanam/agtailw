import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "@agtailw/store/states/AppState";

@Component({
  selector: 'app-nav-shell',
  templateUrl: './nav-shell.component.html',
  styleUrls: ['./nav-shell.component.scss']
})
export class NavShellComponent implements OnInit, AfterContentInit {
  isShown: boolean = false;
  isMobileMenuClose: boolean = true;
  title$: Observable<string> | string;
  loading$: Observable<boolean> | string;

  constructor(private stores$: Store<AppState>) {
  }

  ngAfterContentInit(): void {
    this.title$ = this.stores$.select(store => store.title.name);
    this.loading$ = this.stores$.select(store => store.title.loading);
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

  }

}
