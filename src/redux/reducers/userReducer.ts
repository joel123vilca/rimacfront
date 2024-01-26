import { createStore } from "redux";
import { ActionTypes, AppAction, AppState } from "./types";

const initialState: AppState = {
  user: null,
};

const reducer = (
  state: AppState = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducer);
