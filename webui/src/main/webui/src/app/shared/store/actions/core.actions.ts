import {Action} from '@ngrx/store';
import {Pageable} from "../../entities/pageable";

export enum CategoryActionTypes {
  LoadCategories = '[Category] Load All Categories',
  LoadCategoriesFail = '[Category] Load All Categories Fail',
  LoadCategoriesSuccess = '[Category] Load All Categories Success',
}

export class LoadCategoriesAction implements Action {
  readonly type = CategoryActionTypes.LoadCategories;

  constructor(public payload: Pageable) {
    console.log("ehhhe")
  }
}

export class LoadCategoriesFailAction implements Action {
  readonly type = CategoryActionTypes.LoadCategoriesFail;

  constructor(public payload: any) {
  }
}

export class LoadCategoriesSuccessAction implements Action {
  readonly type = CategoryActionTypes.LoadCategoriesSuccess;

  constructor(public payload: any) {
  }
}
export type CategoryActions =
  LoadCategoriesAction |
  LoadCategoriesFailAction |
  LoadCategoriesSuccessAction;
