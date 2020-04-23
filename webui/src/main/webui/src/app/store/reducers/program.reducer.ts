import {ProgramActionTypes} from '../actions/program.actions';

export interface ProgramsState {
  programs: any[],
  loading: boolean,
  loaded: boolean,
  load: boolean
}

const initialeState: ProgramsState = {
  programs: [],
  loading: false,
  loaded: false,
  load: false
};

export function programsReducer(state = initialeState, action): ProgramsState {
  switch (action.type) {
    case ProgramActionTypes.LoadProgramsSuccess : {
      return {
        ...state,
        programs: action.payload,
        loaded: true,
        loading: false
      };
    }

    case ProgramActionTypes.LoadProgramsFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case ProgramActionTypes.LoadProgramByCedentSuccess : {
      return {
        ...state,
        programs: action.payload,
        loaded: true,
        loading: false
      };
    }

    case ProgramActionTypes.LoadProgramByCedentFail : {
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
