import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";
import { LoadingTitleAction, LoadingTitleFailedAction, LoadingTitleSuccessAction } from "../actions/title.action";
import { TitleActionTypes } from "../action-types/TitleActionTypes";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";


@Injectable()

export class TitleEffect{
  titleLoading$ = createEffect(()=>this.actions$
    .pipe(
      ofType<LoadingTitleAction>(TitleActionTypes.LOADING_TITLE),
      mergeMap((data)=>of(data).pipe(
        map((value)=>{
          throw new Error('Given title is empty');
          if(value.payload!==null){
            return new LoadingTitleSuccessAction(value.payload);
          }

          throw new Error('Given title is empty');
        }),
        catchError(err => of(new LoadingTitleFailedAction(err)))
      ))
    ));



  constructor(private actions$: Actions, private router$ : Router) {
  }
}
