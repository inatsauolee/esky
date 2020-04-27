import {Action} from '@ngrx/store';
import {Course} from "../../entities/course";

export enum CourseActionTypes {
  AddCourse = '[Course] Add Course',
  AddCourseFail = '[Course] Add Course Fail',
  AddCourseSuccess = '[Course] Add Course Success',

  UpdateCourse = '[Course] Update Course',
  UpdateCourseFail = '[Course] Update Course Fail',
  UpdateCourseSuccess = '[Course] Update Course Success',

  DeleteCourse = '[Course] Delete Course',
  DeleteCourseFail = '[Course] Delete Course Fail',
  DeleteCourseSuccess = '[Course] Delete Course Success',

  LoadCourses = '[Course] Load All Courses',
  LoadCoursesFail = '[Course] Load All Courses Fail',
  LoadCoursesSuccess = '[Course] Load All Courses Success',
  
  LoadCourseById = '[Course] Load Course By Id',
  LoadCourseByIdFail = '[Course] Load Course By Id Fail',
  LoadCourseByIdSuccess = '[Course] Load Course By Id Success',
}

export class AddCourseAction implements Action {
  readonly type = CourseActionTypes.AddCourse;

  constructor(public payload: Course) {
  }
}

export class AddCourseFailAction implements Action {
  readonly type = CourseActionTypes.AddCourseFail;

  constructor(public payload: any) {
  }
}

export class AddCourseSuccessAction implements Action {
  readonly type = CourseActionTypes.AddCourseSuccess;

  constructor(public payload: any) {
  }
}

export class UpdateCourseAction implements Action {
  readonly type = CourseActionTypes.UpdateCourse;

  constructor(public payload: Course) {
  }
}

export class UpdateCourseFailAction implements Action {
  readonly type = CourseActionTypes.UpdateCourseFail;

  constructor(public payload: any) {
  }
}

export class UpdateCourseSuccessAction implements Action {
  readonly type = CourseActionTypes.UpdateCourseSuccess;

  constructor(public payload: any) {
  }
}

export class DeleteCourseAction implements Action {
  readonly type = CourseActionTypes.DeleteCourse;

  constructor(public payload: any) {
  }
}

export class DeleteCourseFailAction implements Action {
  readonly type = CourseActionTypes.DeleteCourseFail;

  constructor(public payload: any) {
  }
}

export class DeleteCourseSuccessAction implements Action {
  readonly type = CourseActionTypes.DeleteCourseSuccess;

  constructor(public payload: any) {
  }
}

export class LoadCoursesAction implements Action {
  readonly type = CourseActionTypes.LoadCourses;

  constructor(public payload: any) {
  }
}

export class LoadCoursesFailAction implements Action {
  readonly type = CourseActionTypes.LoadCoursesFail;

  constructor(public payload: any) {
  }
}

export class LoadCoursesSuccessAction implements Action {
  readonly type = CourseActionTypes.LoadCoursesSuccess;

  constructor(public payload: any) {
  }
}

export class LoadCourseByIdAction implements Action {
  readonly type = CourseActionTypes.LoadCourseById;

  constructor(public payload: any) {
  }
}

export class LoadCourseByIdFailAction implements Action {
  readonly type = CourseActionTypes.LoadCourseByIdFail;

  constructor(public payload: any) {
  }
}

export class LoadCourseByIdSuccessAction implements Action {
  readonly type = CourseActionTypes.LoadCourseByIdSuccess;

  constructor(public payload: any) {
  }
}


export type CourseActions =
  AddCourseAction |
  AddCourseFailAction |
  AddCourseSuccessAction |

  UpdateCourseAction |
  UpdateCourseFailAction |
  UpdateCourseSuccessAction |

  DeleteCourseAction |
  DeleteCourseFailAction |
  DeleteCourseSuccessAction |

  LoadCoursesAction |
  LoadCoursesFailAction |
  LoadCoursesSuccessAction |
    
  LoadCourseByIdAction |
  LoadCourseByIdFailAction |
  LoadCourseByIdSuccessAction;
