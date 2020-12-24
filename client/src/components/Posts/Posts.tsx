import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import {RootReducer} from "../../reducers/index";

import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state: RootReducer) => state.posts);
  const classes = useStyles();

  console.log(posts);
  

  return (
    <Fragment>
      <h1>Posts</h1>
      <Post />
      <Post />
    </Fragment>
  );
};

export default Posts;
