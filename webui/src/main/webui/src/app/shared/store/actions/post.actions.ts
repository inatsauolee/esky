import {Action} from '@ngrx/store';
import {Post} from "../../entities/post";
import {Pageable} from "../../entities/pageable";
import {Like} from "../../entities/like";
import {Comment} from "../../entities/comment";

export enum PostActionTypes {
  AddPost = '[Post] Add Post',
  AddPostFail = '[Post] Add Post Fail',
  AddPostSuccess = '[Post] Add Post Success',

  UpdatePost = '[Post] Update Post',
  UpdatePostFail = '[Post] Update Post Fail',
  UpdatePostSuccess = '[Post] Update Post Success',

  DeletePost = '[Post] Delete Post',
  DeletePostFail = '[Post] Delete Post Fail',
  DeletePostSuccess = '[Post] Delete Post Success',

  LoadPosts = '[Post] Load All Posts',
  LoadPostsFail = '[Post] Load All Posts Fail',
  LoadPostsSuccess = '[Post] Load All Posts Success',

  LoadPostsByFilter = '[Post] Load All Posts By Filter',
  LoadPostsByFilterFail = '[Post] Load All Posts By Filter Fail',
  LoadPostsByFilterSuccess = '[Post] Load All Posts By Filter Success',

  LoadPostsByCreator = '[Post] Load All Posts By Creator',
  LoadPostsByCreatorFail = '[Post] Load All Posts By Creator Fail',
  LoadPostsByCreatorSuccess = '[Post] Load All Posts By Creator Success',

  LoadMyPostsByCreator = '[Post] Load My Posts By Creator',
  LoadMyPostsByCreatorFail = '[Post] Load My Posts By Creator Fail',
  LoadMyPostsByCreatorSuccess = '[Post] Load My Posts By Creator Success',

  LoadPostsByStudent = '[Post] Load All Posts By Student',
  LoadPostsByStudentFail = '[Post] Load All Posts By Student Fail',
  LoadPostsByStudentSuccess = '[Post] Load All Posts By Student Success',
  
  LoadPostById = '[Post] Load Post By Id',
  LoadPostByIdFail = '[Post] Load Post By Id Fail',
  LoadPostByIdSuccess = '[Post] Load Post By Id Success',

  GetPostCount = '[Post] Get Post Count ',
  GetPostCountFail = '[Post] Get Post Count Fail',
  GetPostCountSuccess = '[Post] Get Post Count Success',

  LikeAPost = '[Post] Like A Post',
  LikeAPostFail = '[Post] Like A Post Fail',
  LikeAPostSuccess = '[Post] Like A Post Success',

  DislikeAPost = '[Post] Dislike A Post',
  DislikeAPostFail = '[Post] Dislike A Post Fail',
  DislikeAPostSuccess = '[Post] Dislike A Post Success',

  CommentAPost = '[Post] Comment A Post',
  CommentAPostFail = '[Post] Comment A Post Fail',
  CommentAPostSuccess = '[Post] Comment A Post Success',
}

export class AddPostAction implements Action {
  readonly type = PostActionTypes.AddPost;

  constructor(public payload: {post: Post, file: any}) {
  }
}

export class AddPostFailAction implements Action {
  readonly type = PostActionTypes.AddPostFail;

  constructor(public payload: any) {
  }
}

export class AddPostSuccessAction implements Action {
  readonly type = PostActionTypes.AddPostSuccess;

  constructor(public payload: any) {
  }
}

export class UpdatePostAction implements Action {
  readonly type = PostActionTypes.UpdatePost;

  constructor(public payload: Post) {
  }
}

export class UpdatePostFailAction implements Action {
  readonly type = PostActionTypes.UpdatePostFail;

  constructor(public payload: any) {
  }
}

export class UpdatePostSuccessAction implements Action {
  readonly type = PostActionTypes.UpdatePostSuccess;

  constructor(public payload: any) {
  }
}

export class DeletePostAction implements Action {
  readonly type = PostActionTypes.DeletePost;

  constructor(public payload: number) {
  }
}

export class DeletePostFailAction implements Action {
  readonly type = PostActionTypes.DeletePostFail;

  constructor(public payload: any) {
  }
}

export class DeletePostSuccessAction implements Action {
  readonly type = PostActionTypes.DeletePostSuccess;

  constructor(public payload: any) {
  }
}

export class LoadPostsAction implements Action {
  readonly type = PostActionTypes.LoadPosts;

  constructor(public payload: Pageable) {
  }
}

export class LoadPostsFailAction implements Action {
  readonly type = PostActionTypes.LoadPostsFail;

  constructor(public payload: any) {
  }
}

export class LoadPostsSuccessAction implements Action {
  readonly type = PostActionTypes.LoadPostsSuccess;

  constructor(public payload: any) {
  }
}

export class LoadPostsByCreatorAction implements Action {
  readonly type = PostActionTypes.LoadPostsByCreator;

  constructor(public payload: {pageable: Pageable, filterValue: string, idCreator: number}) {
  }
}

export class LoadPostsByCreatorFailAction implements Action {
  readonly type = PostActionTypes.LoadPostsByCreatorFail;

  constructor(public payload: any) {
  }
}

export class LoadPostsByCreatorSuccessAction implements Action {
  readonly type = PostActionTypes.LoadPostsByCreatorSuccess;

  constructor(public payload: any) {
  }
}

export class LoadMyPostsByCreatorAction implements Action {
  readonly type = PostActionTypes.LoadMyPostsByCreator;

  constructor(public payload: {idCreator: number}) {
  }
}

export class LoadMyPostsByCreatorFailAction implements Action {
  readonly type = PostActionTypes.LoadMyPostsByCreatorFail;

  constructor(public payload: any) {
  }
}

export class LoadMyPostsByCreatorSuccessAction implements Action {
  readonly type = PostActionTypes.LoadMyPostsByCreatorSuccess;

  constructor(public payload: any) {
  }
}

export class LoadPostsByStudentAction implements Action {
  readonly type = PostActionTypes.LoadPostsByStudent;

  constructor(public payload: {pageable: Pageable, filterValue: string, idStudent: number}) {
  }
}

export class LoadPostsByStudentFailAction implements Action {
  readonly type = PostActionTypes.LoadPostsByStudentFail;

  constructor(public payload: any) {
  }
}

export class LoadPostsByStudentSuccessAction implements Action {
  readonly type = PostActionTypes.LoadPostsByStudentSuccess;

  constructor(public payload: any) {
  }
}

export class LoadPostsByFilterAction implements Action {
  readonly type = PostActionTypes.LoadPostsByFilter;

  constructor(public payload: {pageable: Pageable, filterValue: string}) {
  }
}

export class LoadPostsByFilterFailAction implements Action {
  readonly type = PostActionTypes.LoadPostsByFilterFail;

  constructor(public payload: any) {
  }
}

export class LoadPostsByFilterSuccessAction implements Action {
  readonly type = PostActionTypes.LoadPostsByFilterSuccess;

  constructor(public payload: any) {
  }
}

export class LoadPostByIdAction implements Action {
  readonly type = PostActionTypes.LoadPostById;

  constructor(public payload: any) {
  }
}

export class LoadPostByIdFailAction implements Action {
  readonly type = PostActionTypes.LoadPostByIdFail;

  constructor(public payload: any) {
  }
}

export class LoadPostByIdSuccessAction implements Action {
  readonly type = PostActionTypes.LoadPostByIdSuccess;

  constructor(public payload: any) {
  }
}

export class GetPostCountAction implements Action {
  readonly type = PostActionTypes.GetPostCount;

  constructor(public payload: {type: string, id: number}) {
  }
}

export class GetPostCountFailAction implements Action {
  readonly type = PostActionTypes.GetPostCountFail;

  constructor(public payload: any) {
  }
}

export class GetPostCountSuccessAction implements Action {
  readonly type = PostActionTypes.GetPostCountSuccess;

  constructor(public payload: any) {
  }
}

export class LikeAPostAction implements Action {
  readonly type = PostActionTypes.LikeAPost;

  constructor(public payload: Like) {
  }
}

export class LikeAPostFailAction implements Action {
  readonly type = PostActionTypes.LikeAPostFail;

  constructor(public payload: any) {
  }
}

export class LikeAPostSuccessAction implements Action {
  readonly type = PostActionTypes.LikeAPostSuccess;

  constructor(public payload: any) {
  }
}

export class DislikeAPostAction implements Action {
  readonly type = PostActionTypes.DislikeAPost;

  constructor(public payload: any) {
  }
}

export class DislikeAPostFailAction implements Action {
  readonly type = PostActionTypes.DislikeAPostFail;

  constructor(public payload: any) {
  }
}

export class DislikeAPostSuccessAction implements Action {
  readonly type = PostActionTypes.DislikeAPostSuccess;

  constructor(public payload: any) {
  }
}

export class CommentAPostAction implements Action {
  readonly type = PostActionTypes.CommentAPost;

  constructor(public payload: Comment) {
  }
}

export class CommentAPostFailAction implements Action {
  readonly type = PostActionTypes.CommentAPostFail;

  constructor(public payload: any) {
  }
}

export class CommentAPostSuccessAction implements Action {
  readonly type = PostActionTypes.CommentAPostSuccess;

  constructor(public payload: any) {
  }
}

export type PostActions =
  AddPostAction |
  AddPostFailAction |
  AddPostSuccessAction |

  UpdatePostAction |
  UpdatePostFailAction |
  UpdatePostSuccessAction |

  DeletePostAction |
  DeletePostFailAction |
  DeletePostSuccessAction |

  LoadPostsAction |
  LoadPostsFailAction |
  LoadPostsSuccessAction |

  LoadPostsByCreatorAction |
  LoadPostsByCreatorFailAction |
  LoadPostsByCreatorSuccessAction |

  LoadMyPostsByCreatorAction |
  LoadMyPostsByCreatorFailAction |
  LoadMyPostsByCreatorSuccessAction |

  LoadPostsByStudentAction |
  LoadPostsByStudentFailAction |
  LoadPostsByStudentSuccessAction |

  LoadPostsByFilterAction |
  LoadPostsByFilterFailAction |
  LoadPostsByFilterSuccessAction |

  LoadPostByIdAction |
  LoadPostByIdFailAction |
  LoadPostByIdSuccessAction |

  LikeAPostAction |
  LikeAPostFailAction |
  LikeAPostSuccessAction |

  DislikeAPostAction |
  DislikeAPostFailAction |
  DislikeAPostSuccessAction |

  CommentAPostAction |
  CommentAPostFailAction |
  CommentAPostSuccessAction |

  GetPostCountAction |
  GetPostCountFailAction |
  GetPostCountSuccessAction;
