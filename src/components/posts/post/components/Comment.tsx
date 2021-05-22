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
  ButtonBase,
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
  const [isHidden, setIsHidden] = useState(true);

  function ReadMore({ children }: any) {
    if (children.props.length <= 258)
      return (
        <>
          <div>{children}</div>
        </>
      );
    else {
      return (
        <>
          <div className={isHidden ? classes.hidden : undefined}>
            {children}
          </div>
          <ButtonBase onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? "...see more" : null}
          </ButtonBase>
        </>
      );
    }
  }

  return (
    <div className={classes.all_comment}>
      <List dense={true} style={{ padding: 0 }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar style={{ minWidth: 50, marginTop: 0 }}>
            <Avatar />
          </ListItemAvatar>
          <ListItemText style={{ margin: "0" }}>
            <div
              style={{
                fontWeight: "bold",
                width: "90%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Username
            </div>

            <ReadMore>
              <Typography variant="caption">
                Comment Comment Comment Comment Comment Comment Comment Comment
                Comment Comment Comment Comment Comment Comment Comment Comment
                Comment Comment Comment Comment Comment Comment Comment Comment
                Comment Comment Comment Comment CommentComment Comment Comment
                Comment Comment Comment Comment Comment Comment Comment Comment
                Comment Comment Comment Comment Comment Comment Comment Comment
                Comment Comment Comment Comment Comment Comment Comment Comment
                Comment Comment
              </Typography>
            </ReadMore>
          </ListItemText>

          <ListItemSecondaryAction
            style={{ display: "flex", right: 10, top: "0%", marginTop: "14px" }}
          >
            <ListItemText
              primary={
                <div
                  style={{
                    fontSize: "12px",
                    color: "#00000099",
                    marginRight: 4,
                    marginTop: 3,
                  }}
                >
                  15h
                </div>
              }
            />
            <ButtonBase>
              <MoreHorizIcon />
            </ButtonBase>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
};

export default Comment;
