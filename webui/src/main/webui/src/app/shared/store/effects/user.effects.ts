import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  UserActionTypes,
  LoadUsersFailAction,
  LoadUsersSuccessAction,
  LoadUserByIdSuccessAction,
  LoadUserByIdFailAction,
  LoginSuccessAction,
  LoadUsersByRoleSuccessAction,
  LoadUsersByRoleFailAction,
  LoadUserByCreatorSuccessAction,
  LoadUserByCreatorFailAction, LoadUserByFilterFailAction, LoadUserByFilterSuccessAction
} from '../actions/user.actions';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {UserService} from "../../services/http/user.service";
import {AuthenticationService} from "../../services/http/authentication.service";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private apiService: UserService, private authService: AuthenticationService) {}

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
  loadUsersByRole$ = this.actions$.pipe(ofType(
    UserActionTypes.LoadUsersByRole
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getUsersByRole(payload.pageable, payload.filterValue, payload.role)
        .pipe(
          mergeMap((content) => of(new LoadUsersByRoleSuccessAction(content))),
          catchError(error => of(new LoadUsersByRoleFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllUsersById$ = this.actions$.pipe(ofType(
    UserActionTypes.LoadUserById
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getUserById(payload)
        .pipe(
          mergeMap((content) => of(new LoadUserByIdSuccessAction(content))),
          catchError(error => of(new LoadUserByIdFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllUsersByCreator$ = this.actions$.pipe(ofType(
    UserActionTypes.LoadUserByCreator
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getUserByCreator(payload.pageable, payload.filterValue, payload.idCreator)
        .pipe(
          mergeMap((content) => of(new LoadUserByCreatorSuccessAction(content))),
          catchError(error => of(new LoadUserByCreatorFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllUsersByFilter$ = this.actions$.pipe(ofType(
    UserActionTypes.LoadUserByFilter
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getUserByFilter(payload.pageable, payload.filterValue)
        .pipe(
          mergeMap((content) => of(new LoadUserByFilterSuccessAction(content))),
          catchError(error => of(new LoadUserByFilterFailAction(error)))
        )
    )
  );

  @Effect()
  login$ = this.actions$.pipe(ofType(
    UserActionTypes.Login
  )).pipe(
    switchMap(({payload}:any) =>
      this.authService.login(payload.username, payload.password)
        .pipe(
          mergeMap((content) => of(new LoginSuccessAction(content))),
          catchError(error => of(new LoginSuccessAction(error)))
        )
    )
  );
}
