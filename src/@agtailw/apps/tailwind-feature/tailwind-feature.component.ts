import { Store } from '@ngrx/store';
import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { AppState } from 'src/@agtailw/store/states/AppState';
import { LoadingTitleAction } from "@agtailw/store/actions/title.action";

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
