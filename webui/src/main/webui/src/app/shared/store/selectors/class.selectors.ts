import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SharedState} from '../reducers';
import {Class} from "../../entities/class";

export const selectSharedState = createFeatureSelector<SharedState>('sharedState');

export const selectClassState = createSelector(
  selectSharedState,
  s => s.classState
);

export const getAllClasses = createSelector(
  selectClassState,
  state => state.classes
);

export const getClassesCount = createSelector(
    selectClassState,
    state => state.count
);

export const getAllClassesForMultiSelect = createSelector(
  selectClassState,
  state => {
      return state.classes.map(aClass => classToMultiSelectItem(aClass));
  }
);

export function classToMultiSelectItem(aClass: Class) {
    return {label: aClass.name, value: aClass.id};
}