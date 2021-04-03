import { LoadingTitleAction } from '@agtailw/store/actions/title.action';
import { AppState } from '@agtailw/store/states/AppState';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.scss']
})
export class DescriptionsComponent implements OnInit {


  constructor(private store$: Store<AppState>) { }

  ngOnInit(): void {
    this.store$.dispatch(new LoadingTitleAction("Descriptions"))
  }

}
