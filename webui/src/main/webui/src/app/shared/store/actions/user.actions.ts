import {Action} from '@ngrx/store';

export enum UserActionTypes {
  LoadUsers = '[User] Load All Users',
  LoadUsersFail = '[User] Load All Users Fail',
  LoadUsersSuccess = '[User] Load All Users Success',
  
  LoadUserByCedent = '[User] Load User By Cedent',
  LoadUserByCedentFail = '[User] Load User By Cedent Fail',
  LoadUserByCedentSuccess = '[User] Load User By Cedent Success',
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;

  constructor(public payload: any) {
  }
}

export class LoadUsersFailAction implements Action {
  readonly type = UserActionTypes.LoadUsersFail;

  constructor(public payload: any) {
  }
}

export class LoadUsersSuccessAction implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;

  constructor(public payload: any) {
  }
}

export class LoadUserByCedentAction implements Action {
  readonly type = UserActionTypes.LoadUserByCedent;

  constructor(public payload: any) {
  }
}

export class LoadUserByCedentFailAction implements Action {
  readonly type = UserActionTypes.LoadUserByCedentFail;

  constructor(public payload: any) {
  }
}

export class LoadUserByCedentSuccessAction implements Action {
  readonly type = UserActionTypes.LoadUserByCedentSuccess;

  constructor(public payload: any) {
  }
}


export type UserActions =
  LoadUsers |
  LoadUsersFailAction |
  LoadUsersSuccessAction |
    
  LoadUserByCedentAction |
  LoadUserByCedentFailAction |
  LoadUserByCedentSuccessAction;
