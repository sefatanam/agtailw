import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadingTitleAction } from "@agtailw/store/actions/title.action";
import { AppState } from "@agtailw/store/states/AppState";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private store$: Store<AppState>
  ) {
  }


  ngOnInit(): void {
    this.store$.dispatch(new LoadingTitleAction("Login"));
  }

}
