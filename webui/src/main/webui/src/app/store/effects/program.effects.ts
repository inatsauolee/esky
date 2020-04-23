import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  ProgramActionTypes,
  LoadProgramsFailAction,
  LoadProgramsSuccessAction,
  LoadProgramByCedentSuccessAction, LoadProgramByCedentFailAction
} from '../actions/program.actions';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ProgramService} from "../../services/program.service";

@Injectable()
export class ProgramEffects {
  constructor(private actions$: Actions, private apiService: ProgramService) {}

  @Effect()
  loadAllPrograms$ = this.actions$.pipe(ofType(
    ProgramActionTypes.LoadPrograms
  )).pipe(
    switchMap(() =>
      this.apiService.getAllPrograms()
        .pipe(
          mergeMap((content) => of(new LoadProgramsSuccessAction(content))),
          catchError(error => of(new LoadProgramsFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllProgramsByCedent$ = this.actions$.pipe(ofType(
    ProgramActionTypes.LoadProgramByCedent
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getProgramByCedent(payload)
        .pipe(
          mergeMap((content) => of(new LoadProgramByCedentSuccessAction(content))),
          catchError(error => of(new LoadProgramByCedentFailAction(error)))
        )
    )
  );
}
