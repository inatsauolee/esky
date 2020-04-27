import {ActionReducerMap, MetaReducer} from '@ngrx/store';

export interface AppState {
  shared;
}

export const reducers: ActionReducerMap<any> = {};

export const metaReducers: MetaReducer<AppState>[] = [];
