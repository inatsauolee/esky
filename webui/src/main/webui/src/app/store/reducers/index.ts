import {ActionReducerMap} from '@ngrx/store';
import {programsReducer, ProgramsState} from './program.reducer';

export interface SharedSate {
  programsState: ProgramsState;
}

export const sharedReducers: ActionReducerMap<any> = {
  programsState: programsReducer,
};
