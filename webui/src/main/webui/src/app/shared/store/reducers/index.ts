import {ActionReducerMap} from '@ngrx/store';
import {userReducer, UserState} from './user.reducer';
import {courseReducer, CourseState} from "./course.reducer";

export interface SharedState {
  userState: UserState;
  courseState: CourseState;
}

export const sharedReducers: ActionReducerMap<any> = {
  userState: userReducer,
  courseState: courseReducer,
};
