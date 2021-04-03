import { LoadingTitleAction } from './../../store/actions/title.action';
import { Store } from '@ngrx/store';
import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { AppState } from 'src/@agtailw/store/states/AppState';

@Component({
  selector: 'app-tailwind-feature',
  templateUrl: './tailwind-feature.component.html',
  styleUrls: ['./tailwind-feature.component.scss']
})
export class TailwindFeatureComponent implements OnInit, AfterViewInit, AfterContentInit {

  constructor(
    private store$: Store<AppState>
  ) { }
  ngAfterViewInit(): void {

  }

  ngAfterContentInit(): void {
    this.store$.dispatch(new LoadingTitleAction("Features"))
  }

  ngOnInit(): void {

  }

}
