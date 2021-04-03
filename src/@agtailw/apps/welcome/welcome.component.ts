import { LoadingTitleAction } from './../../store/actions/title.action';
import { AppState } from './../../store/states/AppState';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private store$: Store<AppState>
  ) {
    this.store$.dispatch(new LoadingTitleAction("Welcome"));
  }

  ngOnInit(): void {

  }

}
