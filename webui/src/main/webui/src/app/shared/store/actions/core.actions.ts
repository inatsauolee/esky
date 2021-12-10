import {Action} from '@ngrx/store';
import {Pageable} from "../../entities/pageable";
import {Category} from "../../entities/category";

export enum CoreActionTypes {
  AddCategory = '[Category] Add Category',
  AddCategoryFail = '[Category] Add Category Fail',
  AddCategorySuccess = '[Category] Add Category Success',
  
  LoadCategories = '[Category] Load All Categories',
  LoadCategoriesFail = '[Category] Load All Categories Fail',
  LoadCategoriesSuccess = '[Category] Load All Categories Success',
}

export class AddCategoryAction implements Action {
  readonly type = CoreActionTypes.AddCategory;

  constructor(public payload: Category) {
  }
}

export class AddCategoryFailAction implements Action {
  readonly type = CoreActionTypes.AddCategoryFail;

  constructor(public payload: any) {
  }
}

export class AddCategorySuccessAction implements Action {
  readonly type = CoreActionTypes.AddCategorySuccess;

  constructor(public payload: any) {
  }
}

export class LoadCategoriesAction implements Action {
  readonly type = CoreActionTypes.LoadCategories;

  constructor(public payload: Pageable) {
    console.log("ehhhe")
  }
}

export class LoadCategoriesFailAction implements Action {
  readonly type = CoreActionTypes.LoadCategoriesFail;

  constructor(public payload: any) {
  }
}

export class LoadCategoriesSuccessAction implements Action {
  readonly type = CoreActionTypes.LoadCategoriesSuccess;

  constructor(public payload: any) {
  }
}
export type CaoreActions =

  AddCategoryAction |
  AddCategoryFailAction |
  AddCategorySuccessAction |

  LoadCategoriesAction |
  LoadCategoriesFailAction |
  LoadCategoriesSuccessAction;
