import { Store } from '@ngrx/store';
import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { AppState } from 'src/@agtailw/store/states/AppState';
import { LoadingTitleAction } from "@agtailw/store/actions/title.action";

@Component({
  selector: 'app-tailwind-feature',
  templateUrl: './tailwind-feature.component.html',
  styleUrls: ['./tailwind-feature.component.scss']
})
export class TailwindFeatureComponent implements OnInit {

  constructor(
    private store$: Store<AppState>
  ) { }


  ngOnInit(): void {
    this.store$.dispatch(new LoadingTitleAction("Features"))
  }

}
