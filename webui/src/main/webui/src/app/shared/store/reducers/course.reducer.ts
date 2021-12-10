import {CourseActionTypes} from '../actions/course.actions';
import {Course} from "../../entities/course";
import {isItAlreadyLiked} from "../../constant/tools";

export interface CourseState {
  courses: Course[],
  count: number,
  loading: boolean,
  loaded: boolean,
  load: boolean
}

const initialState: CourseState = {
  courses: [],
  count: 0,
  loading: false,
  loaded: false,
  load: false
};

export function courseReducer(state = initialState, action): CourseState {
  switch (action.type) {
    case CourseActionTypes.AddCourseSuccess : {
      let base64Data = action.payload.creator.file ? action.payload.creator.file.fileByte : null;
      action.payload.creator.retrievedImage = 'data:image/jpeg;base64,' + base64Data;
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
      let courseList = [];
      if(action.payload) {
        console.log("hhhh")
        action.payload.map(course => {
          let base64Data = course.creator.file ? course.creator.file.fileByte : null;
          course.creator.retrievedImage = 'data:image/jpeg;base64,' + base64Data;
          courseList.push(course);
        });
      }
      return {
        ...state,
        courses: courseList,
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
      let courseList = [];
      if(action.payload) {
        action.payload.map(course => {
          let base64Data = course.creator.file ? course.creator.file.fileByte : null;
          course.creator.retrievedImage = 'data:image/jpeg;base64,' + base64Data;
          courseList.push(course);
        });
      }
      return {
        ...state,
        courses: courseList,
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

    case CourseActionTypes.GetCourseCountSuccess : {
      return {
        ...state,
        count: action.payload,
        loaded: true,
        loading: false
      };
    }

    case CourseActionTypes.GetCourseCountFail : {
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
