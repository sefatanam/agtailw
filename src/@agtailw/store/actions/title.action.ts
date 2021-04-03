import { TitleActionTypes } from "../action-types/TitleActionTypes";
import { Action } from "@ngrx/store";

export class LoadingTitleAction implements Action {
  readonly type = TitleActionTypes.LOADING_TITLE;

  constructor(public payload: string) {
  }
}

export class LoadingTitleSuccessAction implements Action {
  readonly type = TitleActionTypes.LOADING_TITLE_SUCCESS;

  constructor(public payload: string) {
  }
}

export class LoadingTitleFailedAction implements Action {
  type: string = TitleActionTypes.LOADING_TITLE_FAILED;

  constructor(public payload: any) {
  }

}

export type TitleActions = LoadingTitleAction | LoadingTitleSuccessAction | LoadingTitleFailedAction
