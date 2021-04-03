import { TitleState } from "../states/apps/TitleState";
import { Action, createReducer, on } from "@ngrx/store";
import {
  LoadingTitleAction,
  LoadingTitleSuccessAction,
  LoadingTitleFailedAction,
  TitleActions
} from "../actions/title.action";
import { TitleActionTypes } from "../action-types/TitleActionTypes";

export const initialState: TitleState = {error: undefined, loading: false, name: ""};

export function TitleReducer(state: TitleState = initialState, actions: TitleActions): TitleState {
  switch (actions.type) {
    case TitleActionTypes.LOADING_TITLE:
      return {error: undefined, loading: true, name: actions.payload};
    case TitleActionTypes.LOADING_TITLE_SUCCESS:
      return {error: undefined, loading: false, name: actions.payload};
    case TitleActionTypes.LOADING_TITLE_FAILED:
      return {error: actions.payload, loading: false, name: ''};
    default:
      return state;
  }
}
