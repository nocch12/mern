import { Dispatch } from "redux";
import * as api from "../api/posts";
import { DefaultPosts } from "../reducers/posts";
import { FETCH_ALL, STORE_POST } from "./posts-actionTypes";

export type ActionTypes = ReturnType<typeof fetchAll> | ReturnType<typeof storePost>;

export const fetchAll = (data: DefaultPosts) => ({
  type: FETCH_ALL,
  payload: data,
});

export const storePost = (data: DefaultPosts) => ({
  type: STORE_POST,
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

export const createPost = (post) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch(fetchAll(data));
  } catch (error) {
    console.log(error.message);
  }
};
