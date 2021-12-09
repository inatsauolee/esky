import {ActionReducerMap} from '@ngrx/store';
import {userReducer, UserState} from './user.reducer';
import {courseReducer, CourseState} from "./course.reducer";
import {classReducer, ClassState} from "./class.reducer";
import {postReducer, PostState} from "./post.reducer";
import {coreReducer, CoreState} from "./core.reducer";

export interface SharedState {
  coreState: CoreState;
  userState: UserState;
  courseState: CourseState;
  classState: ClassState;
  postState: PostState;
}

export const sharedReducers: ActionReducerMap<any> = {
  coreState: coreReducer,
  userState: userReducer,
  courseState: courseReducer,
  classState: classReducer,
  postState: postReducer,
};
