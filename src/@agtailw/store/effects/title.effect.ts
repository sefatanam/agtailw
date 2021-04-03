import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";
import { LoadingTitleAction, LoadingTitleFailedAction, LoadingTitleSuccessAction } from "../actions/title.action";
import { TitleActionTypes } from "../action-types/TitleActionTypes";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";


@Injectable()

export class TitleEffect {
  titleLoading$ = createEffect(() => this.actions$
    .pipe(
      ofType<LoadingTitleAction>(TitleActionTypes.LOADING_TITLE),
      mergeMap((data) => of(data).pipe(
        map((value) => {
          if (value.payload !== null) {
            return new LoadingTitleSuccessAction(value.payload);
          }
          return new LoadingTitleFailedAction('Title Not Found');
        }),
        catchError(() => of(new LoadingTitleFailedAction('Title Not Found.')))
      ))
    ));


  constructor(private actions$: Actions) {
  }
}
