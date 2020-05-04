import {ActionReducerMap} from '@ngrx/store';
import {userReducer, UserState} from './user.reducer';
import {courseReducer, CourseState} from "./course.reducer";
import {classReducer, ClassState} from "./class.reducer";

export interface SharedState {
  userState: UserState;
  courseState: CourseState;
  classState: ClassState;
}

export const sharedReducers: ActionReducerMap<any> = {
  userState: userReducer,
  courseState: courseReducer,
  classState: classReducer,
};
