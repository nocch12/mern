import { FETCH_ALL } from '../actions/posts-actionTypes'
import { ActionTypes } from '../actions/posts'

export type DefaultPosts = any[];

const reducer = (posts: DefaultPosts = [], action: ActionTypes) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case "CREATE":
      return posts;
    default:
      return posts as never;
  }
};

export default reducer;