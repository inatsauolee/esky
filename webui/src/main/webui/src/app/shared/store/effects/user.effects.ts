import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  UserActionTypes,
  LoadUsersFailAction,
  LoadUsersSuccessAction,
  LoadUserByCedentSuccessAction, LoadUserByCedentFailAction
} from '../actions/user.actions';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {UserService} from "../../services/http/user.service";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private apiService: UserService) {}

  @Effect()
  loadAllUsers$ = this.actions$.pipe(ofType(
    UserActionTypes.LoadUsers
  )).pipe(
    switchMap(() =>
      this.apiService.getAllUsers()
        .pipe(
          mergeMap((content) => of(new LoadUsersSuccessAction(content))),
          catchError(error => of(new LoadUsersFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllUsersByCedent$ = this.actions$.pipe(ofType(
    UserActionTypes.LoadUserByCedent
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getUserByCedent(payload)
        .pipe(
          mergeMap((content) => of(new LoadUserByCedentSuccessAction(content))),
          catchError(error => of(new LoadUserByCedentFailAction(error)))
        )
    )
  );
}
