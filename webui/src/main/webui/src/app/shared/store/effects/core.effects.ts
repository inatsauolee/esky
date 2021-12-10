import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {catchError, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {CoreService} from "../../services/http/core.service";
import {
  AddCategoryFailAction,
  AddCategorySuccessAction,
  CoreActionTypes,
  LoadCategoriesFailAction,
  LoadCategoriesSuccessAction
} from "../actions/core.actions";

@Injectable()
export class CoreEffects {
  constructor(private actions$: Actions, private apiService: CoreService) {}

  @Effect()
  addCategory$ = this.actions$.pipe(ofType(
      CoreActionTypes.AddCategory
  )).pipe(
      switchMap(({payload}:any) =>
          this.apiService.addCategory(payload)
              .pipe(
                  mergeMap((content) => of(new AddCategorySuccessAction(content))),
                  catchError(error => of(new AddCategoryFailAction(error)))
              )
      )
  );

  @Effect()
  loadAllCategories$ = this.actions$.pipe(ofType(
    CoreActionTypes.LoadCategories
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
