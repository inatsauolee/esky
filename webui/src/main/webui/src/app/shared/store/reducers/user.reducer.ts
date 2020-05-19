import {UserActionTypes} from '../actions/user.actions';
import {User} from "../../entities/user";

export interface UserState {
    users: any[],
    loggedInUser: User,
    count: number,
    loading: boolean,
    loaded: boolean,
    load: boolean
}

const initialeState: UserState = {
    users: [],
    loggedInUser: null,
    count: 0,
    loading: false,
    loaded: false,
    load: false
};

export function userReducer(state = initialeState, action): UserState {
    switch (action.type) {
        case UserActionTypes.LoadUsersSuccess : {
            return {
                ...state,
                users: action.payload,
                loaded: true,
                loading: false
            };
        }

        case UserActionTypes.LoadUsersFail : {
            return {
                ...state,
                loaded: false,
                loading: false
            };
        }

        case UserActionTypes.LoadUsersByRoleSuccess : {
            return {
                ...state,
                users: action.payload,
                loaded: true,
                loading: false
            };
        }

        case UserActionTypes.LoadUsersByRoleFail : {
            return {
                ...state,
                loaded: false,
                loading: false
            };
        }

        case UserActionTypes.LoadUserByIdSuccess : {
            return {
                ...state,
                users: action.payload,
                loaded: true,
                loading: false
            };
        }

        case UserActionTypes.LoadUserByIdFail : {
            return {
                ...state,
                loaded: false,
                loading: false
            };
        }

        case UserActionTypes.GetUserCountSuccess : {
            return {
                ...state,
                count: action.payload,
                loaded: true,
                loading: false
            };
        }

        case UserActionTypes.GetUserCountFail : {
            return {
                ...state,
                loaded: false,
                loading: false
            };
        }

        case UserActionTypes.LoadUserByCreatorSuccess : {
            return {
                ...state,
                users: action.payload,
                loaded: true,
                loading: false
            };
        }

        case UserActionTypes.LoadUserByCreatorFail : {
            return {
                ...state,
                loaded: false,
                loading: false
            };
        }

        case UserActionTypes.LoadUserByFilterSuccess : {
            return {
                ...state,
                users: action.payload,
                loaded: true,
                loading: false
            };
        }

        case UserActionTypes.LoadUserByFilterFail : {
            return {
                ...state,
                loaded: false,
                loading: false
            };
        }

        case UserActionTypes.LoginSuccess : {
            // login successful if there's a jwt token in the response
            if (action.payload && action.payload.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('JWT', JSON.stringify(action.payload.token));
            }

            localStorage.setItem('currentUser', JSON.stringify(action.payload.currentUser));

            return {
                ...state,
                loggedInUser: action.payload.currentUser,
            };
        }

        case UserActionTypes.LoginFail : {
            return {
                ...state,
                loaded: false,
                loading: false
            };
        }

        case UserActionTypes.Logout : {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            localStorage.removeItem('JWT');
            return {
                ...state,
                loaded: false,
                loading: false
            };
        }

        default: {
            return state;
        }
    }
}
