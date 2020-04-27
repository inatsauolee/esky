import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SharedState} from '../reducers';

export const selectSharedState = createFeatureSelector<SharedState>('sharedState');

export const selectCourseState = createSelector(
  selectSharedState,
  s => s.courseState
);

export const getAllCourses = createSelector(
  selectCourseState,
  state => state.courses
);

