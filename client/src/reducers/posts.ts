import { FETCH_ALL, STORE_POST } from "../actions/posts-actionTypes";
import { ActionTypes } from "../actions/posts";

export interface IPostBeforeStore {
  creator: string;
  title: string;
  message: string;
  tags: string;
  selectedFile: string;
}

export interface IPost {
  _id: string;
  creator: string;
  title: string;
  message: string;
  tags: string[];
  selectedFile: string;
  createdAt: string;
  likeCount: number;
}

export type DefaultPosts = IPost[];

const reducer = (posts: IPost[] = [], action: ActionTypes) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case STORE_POST:
      return [...posts, action.payload];
    default:
      return posts as never;
  }
};

export default reducer;
