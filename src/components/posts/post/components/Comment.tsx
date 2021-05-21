import React, { useState } from "react";
import {
  Avatar,
  Paper,
  TextField,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemIcon,
  Link,
  Typography,
  ListItemSecondaryAction,
  IconButton,
  Card,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import BackspaceIcon from "@material-ui/icons/Backspace";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { useHistory } from "react-router-dom";

import Styles from "./Style";

const Comment = () => {
  const classes = Styles();
  const [editting, setEditting] = useState(false);
  const [bodyEdit, setBodyEdit] = useState("");

  return (
    <div className={classes.all_comment}>
      <div className={classes.upload__header}>
        <Avatar style={{ alignSelf: "flex-start" }} />
        <Grid
          container
          direction="column"
          className={classes.comment_container}
        >
          <Typography component="span" className={classes.username}>
            username
          </Typography>
          <Typography component="span" className={classes.comment}>
            Comment
          </Typography>
        </Grid>
        <IconButton edge="start">
          <MoreHorizIcon />
        </IconButton>
      </div>
      <div className={classes.created_at}>15:15</div>
    </div>
  );
};

export default Comment;
