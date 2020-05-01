import {CourseActionTypes} from '../actions/course.actions';
import {Course} from "../../entities/course";

export interface CourseState {
  courses: Course[],
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
    case CourseActionTypes.AddCourseSuccess : {
      state.courses.unshift(action.payload);
      return {
        ...state,
        loaded: true,
        loading: false
      };
    }

    case CourseActionTypes.AddCourseFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case CourseActionTypes.DeleteCourseSuccess : {
      // state.courses.unshift(action.payload);
      return {
        ...state,
        loaded: true,
        loading: false
      };
    }

    case CourseActionTypes.DeleteCourseFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

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

    case CourseActionTypes.LoadCoursesByCreatorSuccess : {
      return {
        ...state,
        courses: action.payload,
        loaded: true,
        loading: false
      };
    }

    case CourseActionTypes.LoadCoursesByCreatorFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case CourseActionTypes.LoadMyCoursesByCreatorSuccess : {
      return {
        ...state,
        courses: action.payload,
        loaded: true,
        loading: false
      };
    }

    case CourseActionTypes.LoadMyCoursesByCreatorFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case CourseActionTypes.LoadCoursesByStudentSuccess : {
      return {
        ...state,
        courses: action.payload,
        loaded: true,
        loading: false
      };
    }

    case CourseActionTypes.LoadCoursesByStudentFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case CourseActionTypes.LoadCoursesByFilterSuccess : {
      return {
        ...state,
        courses: action.payload,
        loaded: true,
        loading: false
      };
    }

    case CourseActionTypes.LoadCoursesByFilterFail : {
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
