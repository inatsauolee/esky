import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SharedState} from '../reducers';
import {Course} from "../../entities/course";
import {Color} from "../../constant/tools";

export const selectSharedState = createFeatureSelector<SharedState>('sharedState');

export const selectCourseState = createSelector(
  selectSharedState,
  s => s.courseState
);

export const getAllCourses = createSelector(
  selectCourseState,
  state => state.courses
);

export const getCourseCount = createSelector(
  selectCourseState,
  state => state.count
);

export const getMyCoursesForCalendar = createSelector(
  selectCourseState,
  state => {
      let eventList = [];
      state.courses.map(course => eventList.push(buildEvent(course)));
      return eventList;
  });

export function buildEvent(course: Course) {
    const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
    return {
        id: course.id,
        title: course.name,
        start: yearMonth + '-01',
        color: Color.random()
    };
}
