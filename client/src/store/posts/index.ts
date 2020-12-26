import { State } from "./types";
import * as actions from "./actions";
import { createSlice } from "@reduxjs/toolkit";

const initialState: State = [];

const slice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(actions.getPosts.fulfilled, (state, { payload }) => {
      return payload;
    })
    builder.addCase(actions.createPost.fulfilled, (state, { payload }) => {
      return [...state, payload];
    })
    builder.addCase(actions.updatePost.fulfilled, (state, { payload }) => {
      return state.map((post) =>
        post._id === payload._id ? payload : post
      );
    })
  }
});

export default slice;