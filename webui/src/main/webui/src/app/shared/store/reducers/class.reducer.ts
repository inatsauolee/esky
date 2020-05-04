import {ClassActionTypes} from '../actions';
import {Class} from "../../entities/class";

export interface ClassState {
  classes: Class[],
  loading: boolean,
  loaded: boolean,
  load: boolean
}

const initialState: ClassState = {
  classes: [],
  loading: false,
  loaded: false,
  load: false
};

export function classReducer(state = initialState, action): ClassState {
  switch (action.type) {
    case ClassActionTypes.AddClassSuccess : {
      state.classes.unshift(action.payload);
      return {
        ...state,
        loaded: true,
        loading: false
      };
    }

    case ClassActionTypes.AddClassFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case ClassActionTypes.DeleteClassSuccess : {
      // state.classes.unshift(action.payload);
      return {
        ...state,
        loaded: true,
        loading: false
      };
    }

    case ClassActionTypes.DeleteClassFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case ClassActionTypes.LoadClassesSuccess : {
      return {
        ...state,
        classes: action.payload,
        loaded: true,
        loading: false
      };
    }

    case ClassActionTypes.LoadClassesFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case ClassActionTypes.LoadClassesByCreatorSuccess : {
      return {
        ...state,
        classes: action.payload,
        loaded: true,
        loading: false
      };
    }

    case ClassActionTypes.LoadClassesByCreatorFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case ClassActionTypes.LoadMyClassesByCreatorSuccess : {
      return {
        ...state,
        classes: action.payload,
        loaded: true,
        loading: false
      };
    }

    case ClassActionTypes.LoadMyClassesByCreatorFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case ClassActionTypes.LoadClassesByStudentSuccess : {
      return {
        ...state,
        classes: action.payload,
        loaded: true,
        loading: false
      };
    }

    case ClassActionTypes.LoadClassesByStudentFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case ClassActionTypes.LoadClassesByFilterSuccess : {
      return {
        ...state,
        classes: action.payload,
        loaded: true,
        loading: false
      };
    }

    case ClassActionTypes.LoadClassesByFilterFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case ClassActionTypes.LoadClassByIdSuccess : {
      return {
        ...state,
        classes: action.payload,
        loaded: true,
        loading: false
      };
    }

    case ClassActionTypes.LoadClassByIdFail : {
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
