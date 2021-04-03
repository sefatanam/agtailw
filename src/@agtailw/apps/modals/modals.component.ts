import { LoadingTitleAction } from './../../store/actions/title.action';
import { AppState } from './../../store/states/AppState';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  constructor(private store$: Store<AppState>) {
    this.store$.dispatch(new LoadingTitleAction("Modals"))
  }

  ngOnInit(): void {

  }


  isModalShown: boolean = true;
  CancelButtonOnClick() {
    this.isModalShown = !this.isModalShown;
  }

}
