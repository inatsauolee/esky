import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SharedState} from '../reducers';

export const selectSharedState = createFeatureSelector<SharedState>('sharedState');

export const selectUserState = createSelector(
  selectSharedState,
  s => s.userState
);

export const getAllUsers = createSelector(
  selectUserState,
  state => state.users
);

