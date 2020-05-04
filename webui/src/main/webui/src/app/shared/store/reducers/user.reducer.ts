import {UserActionTypes} from '../actions/user.actions';
import {User} from "../../entities/user";
import {CourseState} from "./course.reducer";
import {ClassState} from "./class.reducer";

export interface UserState {
    users: any[],
    loggedInUser: User,
    loading: boolean,
    loaded: boolean,
    load: boolean
}

const initialeState: UserState = {
    users: [],
    loggedInUser: null,
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
