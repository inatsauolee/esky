import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SharedSate} from '../reducers';

export const selectSharedState = createFeatureSelector<SharedSate>('sharedState');

export const selectProgramState = createSelector(
  selectSharedState,
  s => s.programsState
);

export const getAllPrograms = createSelector(
  selectProgramState,
  state => state.programs
);

