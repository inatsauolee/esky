import {Action} from '@ngrx/store';
import {Pageable} from "../../entities/pageable";

export enum UserActionTypes {
    LoadUsers = '[User] Load All Users',
    LoadUsersFail = '[User] Load All Users Fail',
    LoadUsersSuccess = '[User] Load All Users Success',

    LoadUsersByRole = '[User] Load Users By Role',
    LoadUsersByRoleFail = '[User] Load Users By Role Fail',
    LoadUsersByRoleSuccess = '[User] Load Users By Role Success',
    
    LoadUserById = '[User] Load User By Id',
    LoadUserByIdFail = '[User] Load User By Id Fail',
    LoadUserByIdSuccess = '[User] Load User By Id Success',

    LoadUserByCreator = '[User] Load User By Creator',
    LoadUserByCreatorFail = '[User] Load User By Creator Fail',
    LoadUserByCreatorSuccess = '[User] Load User By Creator Success',

    LoadUserByFilter= '[User] Load User By Filter',
    LoadUserByFilterFail= '[User] Load User By Filter Fail',
    LoadUserByFilterSuccess= '[User] Load User By Filter Success',

    Login = '[User] Login',
    LoginFail = '[User] Login Fail',
    LoginSuccess = '[User] Login Success',

    Logout = '[User] Logout'
}

export class LoadUsers implements Action {
    readonly type = UserActionTypes.LoadUsers;

    constructor(public payload: any) {
    }
}

export class LoadUsersFailAction implements Action {
    readonly type = UserActionTypes.LoadUsersFail;

    constructor(public payload: any) {
    }
}

export class LoadUsersSuccessAction implements Action {
    readonly type = UserActionTypes.LoadUsersSuccess;

    constructor(public payload: any) {
    }
}

export class LoadUsersByRoleAction implements Action {
    readonly type = UserActionTypes.LoadUsersByRole;

    constructor(public payload: {pageable: Pageable, filterValue: string, role: string}) {
    }
}

export class LoadUsersByRoleFailAction implements Action {
    readonly type = UserActionTypes.LoadUsersByRoleFail;

    constructor(public payload: any) {
    }
}

export class LoadUsersByRoleSuccessAction implements Action {
    readonly type = UserActionTypes.LoadUsersByRoleSuccess;

    constructor(public payload: any) {
    }
}

export class LoadUserByIdAction implements Action {
    readonly type = UserActionTypes.LoadUserById;

    constructor(public payload: any) {
    }
}

export class LoadUserByIdFailAction implements Action {
    readonly type = UserActionTypes.LoadUserByIdFail;

    constructor(public payload: any) {
    }
}

export class LoadUserByIdSuccessAction implements Action {
    readonly type = UserActionTypes.LoadUserByIdSuccess;

    constructor(public payload: any) {
    }
}

export class LoadUserByCreatorAction implements Action {
    readonly type = UserActionTypes.LoadUserByCreator;

    constructor(public payload: {pageable: Pageable, filterValue: string, idCreator: number}) {
    }
}

export class LoadUserByCreatorFailAction implements Action {
    readonly type = UserActionTypes.LoadUserByCreatorFail;

    constructor(public payload: any) {
    }
}

export class LoadUserByCreatorSuccessAction implements Action {
    readonly type = UserActionTypes.LoadUserByCreatorSuccess;

    constructor(public payload: any) {
    }
}

export class LoadUserByFilterAction implements Action {
    readonly type = UserActionTypes.LoadUserByFilter;

    constructor(public payload: {pageable: Pageable, filterValue: string}) {
    }
}

export class LoadUserByFilterFailAction implements Action {
    readonly type = UserActionTypes.LoadUserByFilterFail;

    constructor(public payload: any) {
    }
}

export class LoadUserByFilterSuccessAction implements Action {
    readonly type = UserActionTypes.LoadUserByFilterSuccess;

    constructor(public payload: any) {
    }
}

export class LoginAction implements Action {
    readonly type = UserActionTypes.Login;

    constructor(public payload: { username: string, password: string }) {
    }
}

export class LoginFailAction implements Action {
    readonly type = UserActionTypes.LoginFail;

    constructor(public payload: any) {
    }
}

export class LoginSuccessAction implements Action {
    readonly type = UserActionTypes.LoginSuccess;

    constructor(public payload: any) {
    }
}

export class LogoutAction implements Action {
    readonly type = UserActionTypes.Logout;

    constructor() {
    }
}

export type UserActions =
    LoadUsers |
    LoadUsersFailAction |
    LoadUsersSuccessAction |

    LoadUsersByRoleAction |
    LoadUsersByRoleFailAction |
    LoadUsersByRoleSuccessAction |

    LoadUserByIdAction |
    LoadUserByIdFailAction |
    LoadUserByIdSuccessAction |

    LoadUserByCreatorAction |
    LoadUserByCreatorFailAction |
    LoadUserByCreatorSuccessAction |

    LoadUserByFilterAction |
    LoadUserByFilterFailAction |
    LoadUserByFilterSuccessAction |

    LoginAction |
    LoginFailAction |
    LoginSuccessAction |

    LogoutAction;
