import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  ClassActionTypes,
  AddClassFailAction,
  AddClassSuccessAction,
  UpdateClassFailAction,
  UpdateClassSuccessAction,
  DeleteClassFailAction,
  DeleteClassSuccessAction,
  LoadClassesFailAction,
  LoadClassesSuccessAction,
  LoadClassByIdSuccessAction,
  LoadClassByIdFailAction,
  LoadClassesByFilterSuccessAction,
  LoadClassesByFilterFailAction,
  LoadClassesByCreatorSuccessAction,
  LoadClassesByCreatorFailAction,
  LoadClassesByStudentSuccessAction,
  LoadClassesByStudentFailAction, LoadMyClassesByCreatorSuccessAction, LoadMyClassesByCreatorFailAction
} from '../actions/class.actions';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ClassService} from "../../services/http/class.service";

@Injectable()
export class ClassEffects {
  constructor(private actions$: Actions, private apiService: ClassService) {}

  @Effect()
  addClass$ = this.actions$.pipe(ofType(
    ClassActionTypes.AddClass
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.addClass(payload)
        .pipe(
          mergeMap((content) => of(new AddClassSuccessAction(content))),
          catchError(error => of(new AddClassFailAction(error)))
        )
    )
  );

  @Effect()
  updateClass$ = this.actions$.pipe(ofType(
    ClassActionTypes.UpdateClass
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.updateClass(payload)
        .pipe(
          mergeMap((content) => of(new UpdateClassSuccessAction(content))),
          catchError(error => of(new UpdateClassFailAction(error)))
        )
    )
  );

  @Effect()
  deleteClass$ = this.actions$.pipe(ofType(
    ClassActionTypes.DeleteClass
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.deleteClass(payload)
        .pipe(
          mergeMap((content) => of(new DeleteClassSuccessAction(content))),
          catchError(error => of(new DeleteClassFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllClasses$ = this.actions$.pipe(ofType(
    ClassActionTypes.LoadClasses
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getAllClasses(payload)
        .pipe(
          mergeMap((content) => of(new LoadClassesSuccessAction(content))),
          catchError(error => of(new LoadClassesFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllClassesByCreator$ = this.actions$.pipe(ofType(
    ClassActionTypes.LoadClassesByCreator
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getClassesByCreator(payload.pageable, payload.filterValue, payload.idCreator)
        .pipe(
          mergeMap((content) => of(new LoadClassesByCreatorSuccessAction(content))),
          catchError(error => of(new LoadClassesByCreatorFailAction(error)))
        )
    )
  );

  @Effect()
  loadMyClassesByCreator$ = this.actions$.pipe(ofType(
    ClassActionTypes.LoadMyClassesByCreator
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getMyClassesByCreator(payload.idCreator)
        .pipe(
          mergeMap((content) => of(new LoadMyClassesByCreatorSuccessAction(content))),
          catchError(error => of(new LoadMyClassesByCreatorFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllClassesByStudent$ = this.actions$.pipe(ofType(
    ClassActionTypes.LoadClassesByStudent
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getClassesByStudent(payload.pageable, payload.filterValue, payload.idStudent)
        .pipe(
          mergeMap((content) => of(new LoadClassesByStudentSuccessAction(content))),
          catchError(error => of(new LoadClassesByStudentFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllClassesByFilter$ = this.actions$.pipe(ofType(
    ClassActionTypes.LoadClassesByFilter
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getClassesByFilter(payload.pageable, payload.filterValue)
        .pipe(
          mergeMap((content) => of(new LoadClassesByFilterSuccessAction(content))),
          catchError(error => of(new LoadClassesByFilterFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllClassesById$ = this.actions$.pipe(ofType(
    ClassActionTypes.LoadClassById
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getClassById(payload)
        .pipe(
          mergeMap((content) => of(new LoadClassByIdSuccessAction(content))),
          catchError(error => of(new LoadClassByIdFailAction(error)))
        )
    )
  );
}
