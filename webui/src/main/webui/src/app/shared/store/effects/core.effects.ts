import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {catchError, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {CoreService} from "../../services/http/core.service";
import {CategoryActionTypes, LoadCategoriesFailAction, LoadCategoriesSuccessAction} from "../actions/core.actions";

@Injectable()
export class CoreEffects {
  constructor(private actions$: Actions, private apiService: CoreService) {}

  @Effect()
  loadAllCategories$ = this.actions$.pipe(ofType(
    CategoryActionTypes.LoadCategories
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getAllCategories(payload)
        .pipe(
          mergeMap((content) => of(new LoadCategoriesSuccessAction(content))),
          catchError(error => of(new LoadCategoriesFailAction(error)))
        )
    )
  );
}
