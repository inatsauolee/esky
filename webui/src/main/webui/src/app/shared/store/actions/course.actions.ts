import {Action} from '@ngrx/store';
import {Course} from "../../entities/course";
import {Pageable} from "../../entities/pageable";

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

  LoadCoursesByFilter = '[Course] Load All Courses By Filter',
  LoadCoursesByFilterFail = '[Course] Load All Courses By Filter Fail',
  LoadCoursesByFilterSuccess = '[Course] Load All Courses By Filter Success',

  LoadCoursesByCreator = '[Course] Load All Courses By Creator',
  LoadCoursesByCreatorFail = '[Course] Load All Courses By Creator Fail',
  LoadCoursesByCreatorSuccess = '[Course] Load All Courses By Creator Success',

  LoadMyCoursesByCreator = '[Course] Load My Courses By Creator',
  LoadMyCoursesByCreatorFail = '[Course] Load My Courses By Creator Fail',
  LoadMyCoursesByCreatorSuccess = '[Course] Load My Courses By Creator Success',

  LoadCoursesByStudent = '[Course] Load All Courses By Student',
  LoadCoursesByStudentFail = '[Course] Load All Courses By Student Fail',
  LoadCoursesByStudentSuccess = '[Course] Load All Courses By Student Success',
  
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

  constructor(public payload: number) {
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

  constructor(public payload: Pageable) {
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

export class LoadCoursesByCreatorAction implements Action {
  readonly type = CourseActionTypes.LoadCoursesByCreator;

  constructor(public payload: {pageable: Pageable, filterValue: string, idCreator: number}) {
  }
}

export class LoadCoursesByCreatorFailAction implements Action {
  readonly type = CourseActionTypes.LoadCoursesByCreatorFail;

  constructor(public payload: any) {
  }
}

export class LoadCoursesByCreatorSuccessAction implements Action {
  readonly type = CourseActionTypes.LoadCoursesByCreatorSuccess;

  constructor(public payload: any) {
  }
}

export class LoadMyCoursesByCreatorAction implements Action {
  readonly type = CourseActionTypes.LoadMyCoursesByCreator;

  constructor(public payload: {idCreator: number}) {
  }
}

export class LoadMyCoursesByCreatorFailAction implements Action {
  readonly type = CourseActionTypes.LoadMyCoursesByCreatorFail;

  constructor(public payload: any) {
  }
}

export class LoadMyCoursesByCreatorSuccessAction implements Action {
  readonly type = CourseActionTypes.LoadMyCoursesByCreatorSuccess;

  constructor(public payload: any) {
  }
}

export class LoadCoursesByStudentAction implements Action {
  readonly type = CourseActionTypes.LoadCoursesByStudent;

  constructor(public payload: {pageable: Pageable, filterValue: string, idStudent: number}) {
  }
}

export class LoadCoursesByStudentFailAction implements Action {
  readonly type = CourseActionTypes.LoadCoursesByStudentFail;

  constructor(public payload: any) {
  }
}

export class LoadCoursesByStudentSuccessAction implements Action {
  readonly type = CourseActionTypes.LoadCoursesByStudentSuccess;

  constructor(public payload: any) {
  }
}

export class LoadCoursesByFilterAction implements Action {
  readonly type = CourseActionTypes.LoadCoursesByFilter;

  constructor(public payload: {pageable: Pageable, filterValue: string}) {
  }
}

export class LoadCoursesByFilterFailAction implements Action {
  readonly type = CourseActionTypes.LoadCoursesByFilterFail;

  constructor(public payload: any) {
  }
}

export class LoadCoursesByFilterSuccessAction implements Action {
  readonly type = CourseActionTypes.LoadCoursesByFilterSuccess;

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

  LoadCoursesByCreatorAction |
  LoadCoursesByCreatorFailAction |
  LoadCoursesByCreatorSuccessAction |

  LoadMyCoursesByCreatorAction |
  LoadMyCoursesByCreatorFailAction |
  LoadMyCoursesByCreatorSuccessAction |

  LoadCoursesByStudentAction |
  LoadCoursesByStudentFailAction |
  LoadCoursesByStudentSuccessAction |

  LoadCoursesByFilterAction |
  LoadCoursesByFilterFailAction |
  LoadCoursesByFilterSuccessAction |
    
  LoadCourseByIdAction |
  LoadCourseByIdFailAction |
  LoadCourseByIdSuccessAction;
