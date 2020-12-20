import { fetchPosts } from "../api/posts";
import { Dispatch } from "redux";

export const getPosts = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await fetchPosts();
    const action = {
      type: "FETCH_ALL",
      payload: data,
    };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
