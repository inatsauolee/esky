import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  PostActionTypes,
  AddPostFailAction,
  AddPostSuccessAction,
  UpdatePostFailAction,
  UpdatePostSuccessAction,
  DeletePostFailAction,
  DeletePostSuccessAction,
  LoadPostsFailAction,
  LoadPostsSuccessAction,
  LoadPostByIdSuccessAction,
  LoadPostByIdFailAction,
  LoadPostsByFilterSuccessAction,
  LoadPostsByFilterFailAction,
  LoadPostsByCreatorSuccessAction,
  LoadPostsByCreatorFailAction,
  LoadPostsByStudentSuccessAction,
  LoadPostsByStudentFailAction,
  LoadMyPostsByCreatorSuccessAction,
  LoadMyPostsByCreatorFailAction,
  GetPostCountSuccessAction,
  GetPostCountFailAction,
  LikeAPostSuccessAction,
  LikeAPostFailAction,
  DislikeAPostFailAction,
  DislikeAPostSuccessAction, CommentAPostSuccessAction, CommentAPostFailAction
} from '../actions/post.actions';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {PostService} from "../../services/http/post.service";

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private apiService: PostService) {}

  @Effect()
  addPost$ = this.actions$.pipe(ofType(
    PostActionTypes.AddPost
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.addPost(payload.post)
        .pipe(
          mergeMap((content) => of(new AddPostSuccessAction({content: content, file : payload.file}))),
          catchError(error => of(new AddPostFailAction(error)))
        )
    )
  );

  @Effect()
  updatePost$ = this.actions$.pipe(ofType(
    PostActionTypes.UpdatePost
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.updatePost(payload)
        .pipe(
          mergeMap((content) => of(new UpdatePostSuccessAction(content))),
          catchError(error => of(new UpdatePostFailAction(error)))
        )
    )
  );

  @Effect()
  deletePost$ = this.actions$.pipe(ofType(
    PostActionTypes.DeletePost
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.deletePost(payload)
        .pipe(
          mergeMap((content) => of(new DeletePostSuccessAction(content))),
          catchError(error => of(new DeletePostFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllPosts$ = this.actions$.pipe(ofType(
    PostActionTypes.LoadPosts
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getAllPosts(payload)
        .pipe(
          mergeMap((content) => of(new LoadPostsSuccessAction(content))),
          catchError(error => of(new LoadPostsFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllPostsByCreator$ = this.actions$.pipe(ofType(
    PostActionTypes.LoadPostsByCreator
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getPostsByCreator(payload.pageable, payload.filterValue, payload.idCreator)
        .pipe(
          mergeMap((content) => of(new LoadPostsByCreatorSuccessAction(content))),
          catchError(error => of(new LoadPostsByCreatorFailAction(error)))
        )
    )
  );

  @Effect()
  loadMyPostsByCreator$ = this.actions$.pipe(ofType(
    PostActionTypes.LoadMyPostsByCreator
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getMyPostsByCreator(payload.idCreator)
        .pipe(
          mergeMap((content) => of(new LoadMyPostsByCreatorSuccessAction(content))),
          catchError(error => of(new LoadMyPostsByCreatorFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllPostsByStudent$ = this.actions$.pipe(ofType(
    PostActionTypes.LoadPostsByStudent
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getPostsByStudent(payload.pageable, payload.filterValue, payload.idStudent)
        .pipe(
          mergeMap((content) => of(new LoadPostsByStudentSuccessAction(content))),
          catchError(error => of(new LoadPostsByStudentFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllPostsByFilter$ = this.actions$.pipe(ofType(
    PostActionTypes.LoadPostsByFilter
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getPostsByFilter(payload.pageable, payload.filterValue)
        .pipe(
          mergeMap((content) => of(new LoadPostsByFilterSuccessAction(content))),
          catchError(error => of(new LoadPostsByFilterFailAction(error)))
        )
    )
  );

  @Effect()
  loadAllPostsById$ = this.actions$.pipe(ofType(
    PostActionTypes.LoadPostById
  )).pipe(
    switchMap(({payload}:any) =>
      this.apiService.getPostById(payload)
        .pipe(
          mergeMap((content) => of(new LoadPostByIdSuccessAction(content))),
          catchError(error => of(new LoadPostByIdFailAction(error)))
        )
    )
  );

  @Effect()
  getPostCount$ = this.actions$.pipe(ofType(
      PostActionTypes.GetPostCount
  )).pipe(
      switchMap(({payload}:any) =>
          this.apiService.getPostCount(payload.type, payload.id)
              .pipe(
                  mergeMap((content) => of(new GetPostCountSuccessAction(content))),
                  catchError(error => of(new GetPostCountFailAction(error)))
              )
      )
  );

  @Effect()
  likeAPost$ = this.actions$.pipe(ofType(
      PostActionTypes.LikeAPost
  )).pipe(
      switchMap(({payload}:any) =>
          this.apiService.likeAPost(payload)
              .pipe(
                  mergeMap((content) => of(new LikeAPostSuccessAction(content))),
                  catchError(error => of(new LikeAPostFailAction(error)))
              )
      )
  );

  @Effect()
  dislikeAPost$ = this.actions$.pipe(ofType(
      PostActionTypes.DislikeAPost
  )).pipe(
      switchMap(({payload}:any) =>
          this.apiService.dislikeAPost(payload)
              .pipe(
                  mergeMap((content) => of(new DislikeAPostSuccessAction(content))),
                  catchError(error => of(new DislikeAPostFailAction(error)))
              )
      )
  );

  @Effect()
  commentAPost$ = this.actions$.pipe(ofType(
      PostActionTypes.CommentAPost
  )).pipe(
      switchMap(({payload}:any) =>
          this.apiService.commentAPost(payload)
              .pipe(
                  mergeMap((content) => of(new CommentAPostSuccessAction(content))),
                  catchError(error => of(new CommentAPostFailAction(error)))
              )
      )
  );
}
