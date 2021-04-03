import { LoadingTitleAction } from './../../store/actions/title.action';
import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/@agtailw/store/states/AppState';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterContentInit {

  constructor(
    private store$: Store<AppState>
  ) { }
  ngAfterContentInit(): void {
    this.store$.dispatch(new LoadingTitleAction("SignUp Form"));
  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

  }

}
