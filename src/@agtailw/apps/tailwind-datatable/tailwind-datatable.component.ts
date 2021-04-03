import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/@agtailw/store/states/AppState';
import { LoadingTitleAction } from "@agtailw/store/actions/title.action";

@Component({
  selector: 'app-tailwind-datatable',
  templateUrl: './tailwind-datatable.component.html',
  styleUrls: ['./tailwind-datatable.component.scss']
})
export class TailwindDatatableComponent implements OnInit, AfterViewInit ,AfterContentInit{

  constructor(
    private store$: Store<AppState>
  ) { }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    this.store$.dispatch(new LoadingTitleAction("Data Table"))
  }


}
