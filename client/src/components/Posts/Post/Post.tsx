import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import {
  ThumbUpAlt as ThumbUpAltIcon,
  Delete as DeleteIcon,
  MoreHoriz as MoreHorizIcon,
} from "@material-ui/icons";
import moment from 'moment';
import useStyles from "./styles";

import { IPost } from "../../../store/posts/types";

type Props = {
  post: IPost;
  setCurrentId: (id: string) => void;
};

const Post: React.FC<Props> = ({ post, setCurrentId }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">{post.tags.map(tag => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
      <CardContent>
        <Typography variant="h5" gutterBottom>{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />
          Like
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
