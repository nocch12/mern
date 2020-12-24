import { Dispatch } from "redux";
import { fetchPosts } from "../api/posts";
import { DefaultPosts } from "../reducers/posts";
import { FETCH_ALL } from "./posts-actionTypes";

export type ActionTypes = ReturnType<typeof fetchAll>;

export const fetchAll = (data: DefaultPosts) => {
  return {
    type: FETCH_ALL,
    payload: data
  }
}

export const getPosts = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await fetchPosts();
    dispatch(fetchAll(data));
  } catch (error) {
    console.log(error.message);
  }
};
