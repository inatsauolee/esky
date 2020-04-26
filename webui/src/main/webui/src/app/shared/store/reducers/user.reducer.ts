import {UserActionTypes} from '../actions/user.actions';

export interface UserState {
  users: any[],
  loading: boolean,
  loaded: boolean,
  load: boolean
}

const initialeState: UserState = {
  users: [],
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

    case UserActionTypes.LoadUserByCedentSuccess : {
      return {
        ...state,
        users: action.payload,
        loaded: true,
        loading: false
      };
    }

    case UserActionTypes.LoadUserByCedentFail : {
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
