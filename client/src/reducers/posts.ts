import { FETCH_ALL, STORE_POST } from "../actions/posts-actionTypes";
import { ActionTypes } from "../actions/posts";

export interface IPostData {
  creator: string;
  title: string;
  message: string;
  tags: string;
  selectedFile: string;
}

export type DefaultPosts = IPostData[];

const reducer = (posts: DefaultPosts = [], action: ActionTypes) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case STORE_POST:
      return [posts, action.payload];
    default:
      return posts as never;
  }
};

export default reducer;
