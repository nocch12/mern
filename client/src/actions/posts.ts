import { Dispatch } from "redux";
import * as api from "../api/posts";
import { IPost, IPostBeforeStore } from "../reducers/posts";
import { FETCH_ALL, STORE_POST, UPDATED_POST } from "./posts-actionTypes";

export type ActionTypes =
  | ReturnType<typeof fetchAll>
  | ReturnType<typeof storePost>
  | ReturnType<typeof updatedPost>;

export const fetchAll = (data: IPost[]) => ({
  type: FETCH_ALL,
  payload: data,
});

export const storePost = (data: IPost) => ({
  type: STORE_POST,
  payload: data,
});

export const updatedPost = (data: IPost) => ({
  type: UPDATED_POST,
  payload: data,
});

export const getPosts = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch(fetchAll(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post: IPostBeforeStore) => async (
  dispatch: Dispatch
) => {
  try {
    const { data } = await api.createPost(post);
    dispatch(storePost(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id: string, post: IPostBeforeStore) => async (
  dispatch: Dispatch
) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch(updatedPost(data));
  } catch (error) {
    console.log(error.message);
  }
};
