import {ActionReducerMap} from '@ngrx/store';
import {userReducer, UserState} from './user.reducer';

export interface SharedState {
  userState: UserState;
}

export const sharedReducers: ActionReducerMap<any> = {
  userState: userReducer,
};
