import { TitleAction } from './../actions/title.action';
import { TitleState } from "../states/apps/TitleState";
import { TitleActionTypes } from "../action-types/TitleActionTypes";

export const initialState: TitleState = { error: '', loading: false, name: "" };

export function TitleReducer(state: TitleState = initialState, titleAction: TitleAction): TitleState {
  switch (titleAction.type) {
    case TitleActionTypes.LOADING_TITLE:
      return { error: '', loading: true, name: titleAction.payload };
    case TitleActionTypes.LOADING_TITLE_SUCCESS:
      return { error: '', loading: false, name: titleAction.payload };
    case TitleActionTypes.LOADING_TITLE_FAILED:
      return { error: titleAction.payload, loading: false, name: '' };
    default:
      return state;
  }
}
