import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SharedState} from '../reducers';
import {Post} from "../../entities/post";

export const selectSharedState = createFeatureSelector<SharedState>('sharedState');

export const selectCoreState = createSelector(
  selectSharedState,
    s => s.coreState
);

export const getAllCategories = createSelector(
    selectCoreState,
  state => state.categories
);