import {Action} from '@ngrx/store';

export enum ProgramActionTypes {
  LoadPrograms = '[Program] Load All Programs',
  LoadProgramsFail = '[Program] Load All Programs Fail',
  LoadProgramsSuccess = '[Program] Load All Programs Success',
  LoadProgramByCedent = '[Program] Load Program By Cedent',
  LoadProgramByCedentFail = '[Program] Load Program By Cedent Fail',
  LoadProgramByCedentSuccess = '[Program] Load Program By Cedent Success',
}

export class LoadPrograms implements Action {
  readonly type = ProgramActionTypes.LoadPrograms;

  constructor(public payload: any) {
  }
}

export class LoadProgramsFailAction implements Action {
  readonly type = ProgramActionTypes.LoadProgramsFail;

  constructor(public payload: any) {
  }
}

export class LoadProgramsSuccessAction implements Action {
  readonly type = ProgramActionTypes.LoadProgramsSuccess;

  constructor(public payload: any) {
  }
}

export class LoadProgramByCedentAction implements Action {
  readonly type = ProgramActionTypes.LoadProgramByCedent;

  constructor(public payload: any) {
  }
}

export class LoadProgramByCedentFailAction implements Action {
  readonly type = ProgramActionTypes.LoadProgramByCedentFail;

  constructor(public payload: any) {
  }
}

export class LoadProgramByCedentSuccessAction implements Action {
  readonly type = ProgramActionTypes.LoadProgramByCedentSuccess;

  constructor(public payload: any) {
  }
}


export type ProgramActions =
  LoadPrograms |
  LoadProgramsFailAction |
  LoadProgramsSuccessAction |
  LoadProgramByCedentAction |
  LoadProgramByCedentFailAction |
  LoadProgramByCedentSuccessAction;
