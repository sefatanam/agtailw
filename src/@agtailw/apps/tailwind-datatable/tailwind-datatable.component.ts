import { LoadingTitleAction } from './../../store/actions/title.action';
import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/@agtailw/store/states/AppState';

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
