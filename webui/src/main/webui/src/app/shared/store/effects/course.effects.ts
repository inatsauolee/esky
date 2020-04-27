import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  CourseActionTypes,
  AddCourseFailAction,
  AddCourseSuccessAction,
  UpdateCourseFailAction,
  UpdateCourseSuccessAction,
  DeleteCourseFailAction,
  DeleteCourseSuccessAction,
  LoadCoursesFailAction,
  LoadCoursesSuccessAction,
  LoadCourseByIdSuccessAction, LoadCourseByIdFailAction
} from '../actions/course.actions';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {CourseService} from "../../services/http/course.service";

@Injectable()
export class CourseEffects {
  constructor(private actions$: Actions, private apiService: CourseService) {}

  @Effect()
  addCourse$ = this.actions$.pipe(ofType(
    CourseActionTypes.AddCourse
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.addCourse(payload)
        .pipe(
          mergeMap((content) => of(new AddCourseSuccessAction(content))),
          catchError(error => of(new AddCourseFailAction(error)))
        )
    )
  );

  @Effect()
  updateCourse$ = this.actions$.pipe(ofType(
    CourseActionTypes.UpdateCourse
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.updateCourse(payload)
        .pipe(
          mergeMap((content) => of(new UpdateCourseSuccessAction(content))),
          catchError(error => of(new UpdateCourseFailAction(error)))
        )
    )
  );

  @Effect()
  deleteCourse$ = this.actions$.pipe(ofType(
    CourseActionTypes.DeleteCourse
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.deleteCourse(payload.id)
        .pipe(
          mergeMap((content) => of(new DeleteCourseSuccessAction(content))),
          catchError(error => of(new DeleteCourseFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllCourses$ = this.actions$.pipe(ofType(
    CourseActionTypes.LoadCourses
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getAllCourses('0', '10', 'ASC', 'id')
        .pipe(
          mergeMap((content) => of(new LoadCoursesSuccessAction(content))),
          catchError(error => of(new LoadCoursesFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllCoursesById$ = this.actions$.pipe(ofType(
    CourseActionTypes.LoadCourseById
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getCourseById(payload)
        .pipe(
          mergeMap((content) => of(new LoadCourseByIdSuccessAction(content))),
          catchError(error => of(new LoadCourseByIdFailAction(error)))
        )
    )
  );
}
