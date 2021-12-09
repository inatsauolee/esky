import {CategoryActionTypes} from "../actions/core.actions";
import {Category} from "../../entities/category";

export interface CoreState {
  categories: Category[],
  count: number,
  loading: boolean,
  loaded: boolean,
  load: boolean
}

const initialState: CoreState = {
  categories: [],
  count: 0,
  loading: false,
  loaded: false,
  load: false
};

export function coreReducer(state = initialState, action): CoreState {
  switch (action.type) {
    case CategoryActionTypes.LoadCategoriesSuccess : {
      return {
        ...state,
        categories: action.payload,
        loaded: true,
        loading: false
      };
    }

    case CategoryActionTypes.LoadCategoriesFail : {
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
