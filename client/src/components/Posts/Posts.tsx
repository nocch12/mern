import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import { RootReducerType } from "../../store/index";

import useStyles from "./styles";

type PropTypes = {
  setCurrentId: (id: string) => void;
}

const Posts: React.FC<PropTypes> = ({setCurrentId}) => {
  const posts = useSelector((state: RootReducerType) => state.posts);
  const classes = useStyles();

  return (
    <Fragment>
      <h1>Posts</h1>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.mainContainer}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )}
    </Fragment>
  );
};

export default Posts;
