import {Action} from '@ngrx/store';

export enum UserActionTypes {
  LoadUsers = '[User] Load All Users',
  LoadUsersFail = '[User] Load All Users Fail',
  LoadUsersSuccess = '[User] Load All Users Success',
  
  LoadUserById = '[User] Load User By Id',
  LoadUserByIdFail = '[User] Load User By Id Fail',
  LoadUserByIdSuccess = '[User] Load User By Id Success',

  Login = '[User] Login',
  LoginFail = '[User] Login Fail',
  LoginSuccess = '[User] Login Success'
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

export class LoadUserByIdAction implements Action {
  readonly type = UserActionTypes.LoadUserById;

  constructor(public payload: any) {
  }
}

export class LoadUserByIdFailAction implements Action {
  readonly type = UserActionTypes.LoadUserByIdFail;

  constructor(public payload: any) {
  }
}

export class LoadUserByIdSuccessAction implements Action {
  readonly type = UserActionTypes.LoadUserByIdSuccess;

  constructor(public payload: any) {
  }
}

export class LoginAction implements Action {
  readonly type = UserActionTypes.Login;

  constructor(public payload: {username: string, password: string}) {
  }
}

export class LoginFailAction implements Action {
  readonly type = UserActionTypes.LoginFail;

  constructor(public payload: any) {
  }
}

export class LoginSuccessAction implements Action {
  readonly type = UserActionTypes.LoginSuccess;

  constructor(public payload: any) {
  }
}

export type UserActions =
  LoadUsers |
  LoadUsersFailAction |
  LoadUsersSuccessAction |
    
  LoadUserByIdAction |
  LoadUserByIdFailAction |
  LoadUserByIdSuccessAction |

  LoginAction |
  LoginFailAction |
  LoginSuccessAction;
