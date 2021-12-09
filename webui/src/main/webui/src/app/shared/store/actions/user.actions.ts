import {Action} from '@ngrx/store';
import {Pageable} from "../../entities/pageable";
import {GetClassCountAction} from "./class.actions";

export enum UserActionTypes {
    AddUser = '[User] Add User',
    AddUserFail = '[User] Add User Fail',
    AddUserSuccess = '[User] AddU ser Success',

    UpdateUser = '[User] Update User',
    UpdateUserFail = '[User] Update User Fail',
    UpdateUserSuccess = '[User] UpdateU ser Success',

    LoadUsers = '[User] Load All Users',
    LoadUsersFail = '[User] Load All Users Fail',
    LoadUsersSuccess = '[User] Load All Users Success',

    LoadUsersByRole = '[User] Load Users By Role',
    LoadUsersByRoleFail = '[User] Load Users By Role Fail',
    LoadUsersByRoleSuccess = '[User] Load Users By Role Success',
    
    LoadUserById = '[User] Load User By Id',
    LoadUserByIdFail = '[User] Load User By Id Fail',
    LoadUserByIdSuccess = '[User] Load User By Id Success',

    GetUserCount = '[User] Get User Count ',
    GetUserCountFail = '[User] Get User Count Fail',
    GetUserCountSuccess = '[User] Get User Count Success',

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

export class AddUserAction implements Action {
    readonly type = UserActionTypes.AddUser;

    constructor(public payload: any) {
    }
}

export class AddUserSuccessAction implements Action {
    readonly type = UserActionTypes.AddUserSuccess;

    constructor(public payload: any) {
    }
}

export class AddUserFailAction implements Action {
    readonly type = UserActionTypes.AddUserFail;

    constructor(public payload: any) {
    }
}

export class UpdateUserAction implements Action {
    readonly type = UserActionTypes.UpdateUser;

    constructor(public payload: any) {
    }
}

export class UpdateUserSuccessAction implements Action {
    readonly type = UserActionTypes.UpdateUserSuccess;

    constructor(public payload: any) {
    }
}

export class UpdateUserFailAction implements Action {
    readonly type = UserActionTypes.UpdateUserFail;

    constructor(public payload: any) {
    }
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

export class GetUserCountAction implements Action {
    readonly type = UserActionTypes.GetUserCount;

    constructor(public payload: {type: string, id: number}) {
    }
}

export class GetUserCountFailAction implements Action {
    readonly type = UserActionTypes.GetUserCountFail;

    constructor(public payload: any) {
    }
}

export class GetUserCountSuccessAction implements Action {
    readonly type = UserActionTypes.GetUserCountSuccess;

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
    AddUserAction |
    AddUserFailAction |
    AddUserSuccessAction |

    UpdateUserAction |
    UpdateUserFailAction |
    UpdateUserSuccessAction |

    LoadUsers |
    LoadUsersFailAction |
    LoadUsersSuccessAction |

    LoadUsersByRoleAction |
    LoadUsersByRoleFailAction |
    LoadUsersByRoleSuccessAction |

    LoadUserByIdAction |
    LoadUserByIdFailAction |
    LoadUserByIdSuccessAction |

    GetUserCountAction |
    GetUserCountFailAction |
    GetUserCountSuccessAction |

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
