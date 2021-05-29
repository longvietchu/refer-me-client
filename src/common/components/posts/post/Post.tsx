import React, { useState } from "react";

import {
  Avatar,
  ButtonBase,
  Paper,
  Menu,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import SendIcon from "@material-ui/icons/Send";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import ReactPlayer from "react-player";
import TimeAgo from "react-timeago";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import * as images from "../../../assets/images/images";

import Comments from "./components/Comments";
import Style from "./Style";
import { Delete, Edit } from "@material-ui/icons";

interface props {
  profile: string;
  username: string;
  timestamp: any;
  description: string;
  fileType: string;
  fileData: string;
}

const Post = (props: props) => {
  const classes = Style();

  const { profile, username, timestamp, description, fileType, fileData } =
    props;

  const capitalize = (_string: string) => {
    return _string.charAt(0).toUpperCase() + _string.slice(1);
  };

  const [likesCount, setLikesCount] = useState(1);
  const [commentsCount, setCommentsCount] = useState(1);
  const [heartIcontOrder, setHeartIcontOrder] = useState(1);
  const [smileIconOrder, setSmileIconOrder] = useState(1);
  const [thumsUpIconOrder, setThumsUpIconOrder] = useState(1);

  const [showComment, setShowComment] = useState(false);

  const Reactions = () => {
    return (
      <div className={classes.footer__stats}>
        <div>
          <img
            src={images.LinkedInLike}
            alt="linked-in-reaction-1"
            // style={{ order: `${heartIcontOrder} ` }}
          />
          <img
            src={images.LinkedInLove}
            alt="linked-in-reaction-2"
            // style={{ order: `${smileIconOrder} ` }}
          />
          <img
            src={images.LinkedInApplaud}
            alt="linked-in-reaction-3"
            // style={{ order: `${thumsUpIconOrder} ` }}
          />
        </div>
        <h4>{likesCount}</h4>
        <FiberManualRecordRoundedIcon
          style={{ fontSize: 8, color: "grey", paddingLeft: "3px" }}
        />
        <h4>{commentsCount} comments</h4>
      </div>
    );
  };
  return (
    <PopupState variant="popover" popupId="demoMenu">
      {(popupState) => (
        <div>
          <Paper className={classes.post}>
            <div className={classes.post__header}>
              <Avatar src={profile} />
              <div className={classes.header__info}>
                <h4>{capitalize(username)}</h4>
                <p>
                  <TimeAgo
                    // date={new Date(timestamp?.toDate()).toUTCString()}
                    date={new Date()}
                    // units="minute"
                    // formatter={(value, unit, suffix) => `${value} ${unit} ${suffix}`}
                    formatter={() => "5 minute ago"}
                  />
                </p>
              </div>
              <ButtonBase {...bindTrigger(popupState)}>
                <MoreHorizOutlinedIcon />
              </ButtonBase>
            </div>
            <div className={classes.post__body}>
              <div className={classes.body__description}>
                <p>{description}</p>
              </div>
              {fileData && (
                <div className={classes.body__image}>
                  {fileType === "image" ? (
                    <img src={fileData} alt="post" />
                  ) : (
                    <ReactPlayer
                      url={fileData}
                      controls={true}
                      style={{ height: "auto !important" }}
                    />
                  )}
                </div>
              )}
            </div>
            <div className={classes.post__footer}>
              <Reactions />
              <div className={classes.footer__actions}>
                <div className={classes.action__icons}>
                  <ThumbUpAltOutlinedIcon style={{ transform: "scaleX(-1)" }} />
                  <h4>Like</h4>
                </div>
                <div
                  className={classes.action__icons}
                  onClick={() => setShowComment(!showComment)}
                >
                  <CommentOutlinedIcon />
                  <h4>Comment</h4>
                </div>

                <div className={classes.action__icons}>
                  <ReplyOutlinedIcon style={{ transform: "scaleX(-1)" }} />
                  <h4>Share</h4>
                </div>
                <div className={classes.action__icons}>
                  <SendIcon style={{ transform: "rotate(-45deg)" }} />
                  <h4>Send</h4>
                </div>
              </div>
              {showComment && <Comments />}
            </div>
          </Paper>
          <Menu
            {...bindMenu(popupState)}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            // className={classes.menu}
          >
            <ListItem button onClick={popupState.close}>
              <ListItemIcon>
                <Edit />
              </ListItemIcon>
              <ListItemText>Edit</ListItemText>
            </ListItem>
            <ListItem button onClick={popupState.close}>
              <ListItemIcon>
                <Delete />
              </ListItemIcon>
              <ListItemText>Delete</ListItemText>
            </ListItem>
          </Menu>
        </div>
      )}
    </PopupState>
  );
};

export default Post;
