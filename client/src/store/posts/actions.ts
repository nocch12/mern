import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IPost, IPostBeforeStore, State } from "./types";
import * as api from "../../api/posts";

export const fetchAll = (state: State, action: PayloadAction<State>) =>
  action.payload;

export const storePost = (state: State, action: PayloadAction<IPost>) => [
  ...state,
  action.payload,
];

export const updatedPost = (state: State, action: PayloadAction<IPost>) =>
  state.map((post) =>
    post._id === action.payload._id ? action.payload : post
  );

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    const { data } = await api.fetchPosts();
    return data;
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (post: IPostBeforeStore) => {
    const { data } = await api.createPost(post);
    return data;
  }
);

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async (arg: {id: string, post: IPostBeforeStore}) => {
    const { data } = await api.updatePost(arg.id, arg.post);
    return data;
  }
);

