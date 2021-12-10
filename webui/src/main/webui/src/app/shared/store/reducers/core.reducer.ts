import {Category} from "../../entities/category";
import {CoreActionTypes} from "../actions/core.actions";

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
    case CoreActionTypes.AddCategorySuccess : {
      return {
        ...state,
        categories: [...state.categories, action.payload],
        loaded: true,
        loading: false
      };
    }

    case CoreActionTypes.AddCategoryFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case CoreActionTypes.LoadCategoriesSuccess : {
      return {
        ...state,
        categories: action.payload,
        loaded: true,
        loading: false
      };
    }

    case CoreActionTypes.LoadCategoriesFail : {
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
