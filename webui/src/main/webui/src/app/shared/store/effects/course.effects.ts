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
  LoadCourseByIdSuccessAction,
  LoadCourseByIdFailAction,
  LoadCoursesByFilterSuccessAction,
  LoadCoursesByFilterFailAction,
  LoadCoursesByCreatorSuccessAction,
  LoadCoursesByCreatorFailAction,
  LoadCoursesByStudentSuccessAction,
  LoadCoursesByStudentFailAction,
  LoadMyCoursesByCreatorSuccessAction,
  LoadMyCoursesByCreatorFailAction,
  GetCourseCountSuccessAction, GetCourseCountFailAction
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
      this.apiService.deleteCourse(payload)
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
      this.apiService.getAllCourses(payload)
        .pipe(
          mergeMap((content) => of(new LoadCoursesSuccessAction(content))),
          catchError(error => of(new LoadCoursesFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllCoursesByCreator$ = this.actions$.pipe(ofType(
    CourseActionTypes.LoadCoursesByCreator
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getCoursesByCreator(payload.pageable, payload.filterValue, payload.idCreator)
        .pipe(
          mergeMap((content) => of(new LoadCoursesByCreatorSuccessAction(content))),
          catchError(error => of(new LoadCoursesByCreatorFailAction(error)))
        )
    )
  );

  @Effect()
  loadMyCoursesByCreator$ = this.actions$.pipe(ofType(
    CourseActionTypes.LoadMyCoursesByCreator
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getMyCoursesByCreator(payload.idCreator)
        .pipe(
          mergeMap((content) => of(new LoadMyCoursesByCreatorSuccessAction(content))),
          catchError(error => of(new LoadMyCoursesByCreatorFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllCoursesByStudent$ = this.actions$.pipe(ofType(
    CourseActionTypes.LoadCoursesByStudent
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getCoursesByStudent(payload.pageable, payload.filterValue, payload.idStudent)
        .pipe(
          mergeMap((content) => of(new LoadCoursesByStudentSuccessAction(content))),
          catchError(error => of(new LoadCoursesByStudentFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllCoursesByFilter$ = this.actions$.pipe(ofType(
    CourseActionTypes.LoadCoursesByFilter
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getCoursesByFilter(payload.pageable, payload.filterValue)
        .pipe(
          mergeMap((content) => of(new LoadCoursesByFilterSuccessAction(content))),
          catchError(error => of(new LoadCoursesByFilterFailAction(error)))
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

  @Effect()
  getCourseCount$ = this.actions$.pipe(ofType(
    CourseActionTypes.GetCourseCount
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getCourseCount(payload.type, payload.id)
        .pipe(
          mergeMap((content) => of(new GetCourseCountSuccessAction(content))),
          catchError(error => of(new GetCourseCountFailAction(error)))
        )
    )
  );
}
