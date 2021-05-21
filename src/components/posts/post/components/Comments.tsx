import React from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
  ListItemIcon,
  ListItemText,
  Grid,
  Divider,
} from "@material-ui/core";

import Comment from "./Comment";

import Styles from "./Style";

const data = [
  {
    id: "0",
  },
];

const Comments = (data: any) => {
  const classes = Styles();
  return (
    <>
      <div className={classes.upload__header}>
        <Avatar />
        <form className={classes.header__form}>
          <input
            placeholder="Add your comment"
            //   value={uploadData.description}
            //   onChange={(e) =>
            //     setUploadData({ ...uploadData, description: e.target.value })
            //   }
          />
          <input
            id="upload-image"
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => console.log("images")}
          />
          <input
            id="upload-video"
            type="file"
            accept="video/*"
            hidden
            onChange={(e) => console.log("videos")}
          />
        </form>
        <Button
          type="submit"
          variant="outlined"
          className={classes.post_button}
        >
          Post
        </Button>
      </div>
      <Divider />
      <Comment />
    </>
  );
};

export default Comments;
