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

export const getUserCount = createSelector(
  selectUserState,
  state => state.count
);

export const selectLoggedInUser = createSelector(
    selectUserState,
  state => state.loggedInUser
);

export const getAllUsersForMultiSelect = createSelector(
    selectUserState,
    state => {
        return state.users.map(user => userToMultiSelectItem(user));
    }
);

export function userToMultiSelectItem(user: any) {
    return {label: user.lastname  + ' ' + user.firstname, value: user.id};
}