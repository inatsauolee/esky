import {Action} from '@ngrx/store';
import {Class} from "../../entities/class";
import {Pageable} from "../../entities/pageable";

export enum ClassActionTypes {
  AddClass = '[Class] Add Class',
  AddClassFail = '[Class] Add Class Fail',
  AddClassSuccess = '[Class] Add Class Success',

  UpdateClass = '[Class] Update Class',
  UpdateClassFail = '[Class] Update Class Fail',
  UpdateClassSuccess = '[Class] Update Class Success',

  DeleteClass = '[Class] Delete Class',
  DeleteClassFail = '[Class] Delete Class Fail',
  DeleteClassSuccess = '[Class] Delete Class Success',

  LoadClasses = '[Class] Load All Classes',
  LoadClassesFail = '[Class] Load All Classes Fail',
  LoadClassesSuccess = '[Class] Load All Classes Success',

  LoadClassesByFilter = '[Class] Load All Classes By Filter',
  LoadClassesByFilterFail = '[Class] Load All Classes By Filter Fail',
  LoadClassesByFilterSuccess = '[Class] Load All Classes By Filter Success',

  LoadClassesByCreator = '[Class] Load All Classes By Creator',
  LoadClassesByCreatorFail = '[Class] Load All Classes By Creator Fail',
  LoadClassesByCreatorSuccess = '[Class] Load All Classes By Creator Success',

  LoadMyClassesByCreator = '[Class] Load My Classes By Creator',
  LoadMyClassesByCreatorFail = '[Class] Load My Classes By Creator Fail',
  LoadMyClassesByCreatorSuccess = '[Class] Load My Classes By Creator Success',

  LoadClassesByStudent = '[Class] Load All Classes By Student',
  LoadClassesByStudentFail = '[Class] Load All Classes By Student Fail',
  LoadClassesByStudentSuccess = '[Class] Load All Classes By Student Success',
  
  LoadClassById = '[Class] Load Class By Id',
  LoadClassByIdFail = '[Class] Load Class By Id Fail',
  LoadClassByIdSuccess = '[Class] Load Class By Id Success',
}

export class AddClassAction implements Action {
  readonly type = ClassActionTypes.AddClass;

  constructor(public payload: Class) {
  }
}

export class AddClassFailAction implements Action {
  readonly type = ClassActionTypes.AddClassFail;

  constructor(public payload: any) {
  }
}

export class AddClassSuccessAction implements Action {
  readonly type = ClassActionTypes.AddClassSuccess;

  constructor(public payload: any) {
  }
}

export class UpdateClassAction implements Action {
  readonly type = ClassActionTypes.UpdateClass;

  constructor(public payload: Class) {
  }
}

export class UpdateClassFailAction implements Action {
  readonly type = ClassActionTypes.UpdateClassFail;

  constructor(public payload: any) {
  }
}

export class UpdateClassSuccessAction implements Action {
  readonly type = ClassActionTypes.UpdateClassSuccess;

  constructor(public payload: any) {
  }
}

export class DeleteClassAction implements Action {
  readonly type = ClassActionTypes.DeleteClass;

  constructor(public payload: number) {
  }
}

export class DeleteClassFailAction implements Action {
  readonly type = ClassActionTypes.DeleteClassFail;

  constructor(public payload: any) {
  }
}

export class DeleteClassSuccessAction implements Action {
  readonly type = ClassActionTypes.DeleteClassSuccess;

  constructor(public payload: any) {
  }
}

export class LoadClassesAction implements Action {
  readonly type = ClassActionTypes.LoadClasses;

  constructor(public payload: Pageable) {
  }
}

export class LoadClassesFailAction implements Action {
  readonly type = ClassActionTypes.LoadClassesFail;

  constructor(public payload: any) {
  }
}

export class LoadClassesSuccessAction implements Action {
  readonly type = ClassActionTypes.LoadClassesSuccess;

  constructor(public payload: any) {
  }
}

export class LoadClassesByCreatorAction implements Action {
  readonly type = ClassActionTypes.LoadClassesByCreator;

  constructor(public payload: {pageable: Pageable, filterValue: string, idCreator: number}) {
  }
}

export class LoadClassesByCreatorFailAction implements Action {
  readonly type = ClassActionTypes.LoadClassesByCreatorFail;

  constructor(public payload: any) {
  }
}

export class LoadClassesByCreatorSuccessAction implements Action {
  readonly type = ClassActionTypes.LoadClassesByCreatorSuccess;

  constructor(public payload: any) {
  }
}

export class LoadMyClassesByCreatorAction implements Action {
  readonly type = ClassActionTypes.LoadMyClassesByCreator;

  constructor(public payload: {idCreator: number}) {
  }
}

export class LoadMyClassesByCreatorFailAction implements Action {
  readonly type = ClassActionTypes.LoadMyClassesByCreatorFail;

  constructor(public payload: any) {
  }
}

export class LoadMyClassesByCreatorSuccessAction implements Action {
  readonly type = ClassActionTypes.LoadMyClassesByCreatorSuccess;

  constructor(public payload: any) {
  }
}

export class LoadClassesByStudentAction implements Action {
  readonly type = ClassActionTypes.LoadClassesByStudent;

  constructor(public payload: {pageable: Pageable, filterValue: string, idStudent: number}) {
  }
}

export class LoadClassesByStudentFailAction implements Action {
  readonly type = ClassActionTypes.LoadClassesByStudentFail;

  constructor(public payload: any) {
  }
}

export class LoadClassesByStudentSuccessAction implements Action {
  readonly type = ClassActionTypes.LoadClassesByStudentSuccess;

  constructor(public payload: any) {
  }
}

export class LoadClassesByFilterAction implements Action {
  readonly type = ClassActionTypes.LoadClassesByFilter;

  constructor(public payload: {pageable: Pageable, filterValue: string}) {
  }
}

export class LoadClassesByFilterFailAction implements Action {
  readonly type = ClassActionTypes.LoadClassesByFilterFail;

  constructor(public payload: any) {
  }
}

export class LoadClassesByFilterSuccessAction implements Action {
  readonly type = ClassActionTypes.LoadClassesByFilterSuccess;

  constructor(public payload: any) {
  }
}

export class LoadClassByIdAction implements Action {
  readonly type = ClassActionTypes.LoadClassById;

  constructor(public payload: any) {
  }
}

export class LoadClassByIdFailAction implements Action {
  readonly type = ClassActionTypes.LoadClassByIdFail;

  constructor(public payload: any) {
  }
}

export class LoadClassByIdSuccessAction implements Action {
  readonly type = ClassActionTypes.LoadClassByIdSuccess;

  constructor(public payload: any) {
  }
}


export type ClassActions =
  AddClassAction |
  AddClassFailAction |
  AddClassSuccessAction |

  UpdateClassAction |
  UpdateClassFailAction |
  UpdateClassSuccessAction |

  DeleteClassAction |
  DeleteClassFailAction |
  DeleteClassSuccessAction |

  LoadClassesAction |
  LoadClassesFailAction |
  LoadClassesSuccessAction |

  LoadClassesByCreatorAction |
  LoadClassesByCreatorFailAction |
  LoadClassesByCreatorSuccessAction |

  LoadMyClassesByCreatorAction |
  LoadMyClassesByCreatorFailAction |
  LoadMyClassesByCreatorSuccessAction |

  LoadClassesByStudentAction |
  LoadClassesByStudentFailAction |
  LoadClassesByStudentSuccessAction |

  LoadClassesByFilterAction |
  LoadClassesByFilterFailAction |
  LoadClassesByFilterSuccessAction |
    
  LoadClassByIdAction |
  LoadClassByIdFailAction |
  LoadClassByIdSuccessAction;
