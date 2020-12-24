import { combineReducers } from "redux";

import posts from "./posts";

export const rootReducer = combineReducers({
  posts,
});

export type RootReducer = ReturnType<typeof rootReducer>;