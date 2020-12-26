import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postSlice from "./posts/index";


export const rootReducer = combineReducers({
  posts: postSlice.reducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;