import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SharedState} from '../reducers';
import {Post} from "../../entities/post";

export const selectSharedState = createFeatureSelector<SharedState>('sharedState');

export const selectPostState = createSelector(
  selectSharedState,
    s => s.postState
);

export const getAllPosts = createSelector(
  selectPostState,
  state => state.posts
);

export const getPostCount = createSelector(
    selectPostState,
    state => state.count
);

export const getAllPostsForMultiSelect = createSelector(
  selectPostState,
  state => {
      return state.posts.map(post => postToMultiSelectItem(post));
  }
);

export function postToMultiSelectItem(post: Post) {
    return {label: post.text, value: post.id};
}