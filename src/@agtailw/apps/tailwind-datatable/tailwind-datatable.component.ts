import { LoadingTitleAction } from './../../store/actions/title.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/@agtailw/store/states/AppState';

@Component({
  selector: 'app-tailwind-datatable',
  templateUrl: './tailwind-datatable.component.html',
  styleUrls: ['./tailwind-datatable.component.scss']
})
export class TailwindDatatableComponent implements OnInit {

  constructor(
    private store$: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store$.dispatch(new LoadingTitleAction("Data Table"))
  }

}
