import {Post} from "../../entities/post";
import {PostActionTypes} from "../actions/post.actions";
import {isItAlreadyLiked} from "../../constant/tools";

export interface PostState {
  posts: Post[],
  count: number,
  loading: boolean,
  loaded: boolean,
  load: boolean
}

const initialState: PostState = {
  posts: [],
  count: 0,
  loading: false,
  loaded: false,
  load: false
};

export function postReducer(state = initialState, action): PostState {
  switch (action.type) {
    case PostActionTypes.AddPostSuccess : {
      let post = action.payload.content;
      (post as any).retrievedImage = action.payload.file;
      (post as any).liked = false;
      state.posts.unshift(post);
      return {
        ...state,
        loaded: true,
        loading: false
      };
    }

    case PostActionTypes.AddPostFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case PostActionTypes.DeletePostSuccess : {
      // state.posts.unshift(action.payload);
      return {
        ...state,
        loaded: true,
        loading: false
      };
    }

    case PostActionTypes.DeletePostFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case PostActionTypes.LoadPostsSuccess : {
      let postList = [];
      if(action.payload) {
        action.payload.map(post => {
          let base64Data = post.file ? post.file.fileByte : null;
          (post as any).retrievedImage = 'data:image/jpeg;base64,' + base64Data;
          (post as any).liked = isItAlreadyLiked(post.id, post.likes);
          postList.push(post);
        });
      }
      return {
        ...state,
        posts: postList,
        loaded: true,
        loading: false
      };
    }

    case PostActionTypes.LoadPostsFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case PostActionTypes.LoadPostsByCreatorSuccess : {
      return {
        ...state,
        posts: action.payload,
        loaded: true,
        loading: false
      };
    }

    case PostActionTypes.LoadPostsByCreatorFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case PostActionTypes.LoadMyPostsByCreatorSuccess : {
      return {
        ...state,
        posts: action.payload,
        loaded: true,
        loading: false
      };
    }

    case PostActionTypes.LoadMyPostsByCreatorFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case PostActionTypes.LoadPostsByStudentSuccess : {
      return {
        ...state,
        posts: action.payload,
        loaded: true,
        loading: false
      };
    }

    case PostActionTypes.LoadPostsByStudentFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case PostActionTypes.LoadPostsByFilterSuccess : {
      return {
        ...state,
        posts: action.payload,
        loaded: true,
        loading: false
      };
    }

    case PostActionTypes.LoadPostsByFilterFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case PostActionTypes.LoadPostByIdSuccess : {
      return {
        ...state,
        posts: action.payload,
        loaded: true,
        loading: false
      };
    }

    case PostActionTypes.LoadPostByIdFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case PostActionTypes.GetPostCountSuccess : {
      return {
        ...state,
        count: action.payload,
        loaded: true,
        loading: false
      };
    }

    case PostActionTypes.GetPostCountFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case PostActionTypes.LikeAPostSuccess : {
      state.posts.map(post => {
        if(post.id == action.payload.post) {
          if(!post.likes)
            post.likes = [];
          post.likes.push(action.payload);
          (post as any).liked = true;
        }
      });
      return {
        ...state,
        loaded: true,
        loading: false
      };
    }

    case PostActionTypes.LikeAPostFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case PostActionTypes.DislikeAPostSuccess : {
      state.posts.map(post => {
        if(post.id == action.payload.post) {
          if(post.likes) {
            post.likes.pop();
            (post as any).liked = false;
          }
        }
      });
      return {
        ...state,
        loaded: true,
        loading: false
      };
    }

    case PostActionTypes.DislikeAPostFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case PostActionTypes.CommentAPostSuccess : {

      let currentPost =  JSON.parse(localStorage.getItem('currentPost'));
      if(!currentPost.comments)
        currentPost.comments = [];
      currentPost.comments.push(action.payload);
      localStorage.setItem('currentPost', JSON.stringify(currentPost));
      return {
        ...state,
        loaded: true,
        loading: false
      };
    }

    case PostActionTypes.CommentAPostFail : {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    default: {
      return state;
    }

  }

}
