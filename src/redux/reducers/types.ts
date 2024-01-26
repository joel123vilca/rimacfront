export interface User {
  name: string;
  lastName: string;
  birthDay: string;
}

export interface Plans {
  name: string;
  price: number;
  description: any;
  age: number;
}

export interface AppState {
  user: User | null;
}

export enum ActionTypes {
  SET_USER = "SET_USER",
}

export interface SetUserAction {
  type: ActionTypes.SET_USER;
  payload: User | null;
}

export type AppAction = SetUserAction;
