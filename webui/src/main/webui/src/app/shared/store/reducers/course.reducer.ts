import {CourseActionTypes} from '../actions/course.actions';

export interface CourseState {
  courses: any[],
  loading: boolean,
  loaded: boolean,
  load: boolean
}

const initialeState: CourseState = {
  courses: [],
  loading: false,
  loaded: false,
  load: false
};

export function courseReducer(state = initialeState, action): CourseState {
  switch (action.type) {
    case CourseActionTypes.LoadCoursesSuccess : {
      return {
        ...state,
        courses: action.payload,
        loaded: true,
        loading: false
      };
    }

    case CourseActionTypes.LoadCoursesFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case CourseActionTypes.LoadCourseByIdSuccess : {
      return {
        ...state,
        courses: action.payload,
        loaded: true,
        loading: false
      };
    }

    case CourseActionTypes.LoadCourseByIdFail : {
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
