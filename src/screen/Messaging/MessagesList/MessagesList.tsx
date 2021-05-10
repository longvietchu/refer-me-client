import React from "react";
import {
  Paper,
  Typography,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Divider,
  Avatar,
  Input,
  Card,
  Grid,
  Menu,
  MenuItem,
} from "@material-ui/core";

import FlipMove from "react-flip-move";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CheckIcon from "@material-ui/icons/Check";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import Styles from "./Style";
import { SendRounded } from "@material-ui/icons";

import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

// interface Message {
//   text: string;
//   user: string;
// }

// interface Sender {
//   name: string;
// }

// interface MessageProps {
//   message: Message;
//   sender: Sender;
// }

const Messages = () => {
  const classes = Styles();
  const [input, setInput] = React.useState("");
  const [isActive, setIsActive] = React.useState(true);
  const [isSeen, setIsSeen] = React.useState(true);
  // const isUser = message.user === sender.name;

  return (
    <PopupState variant="popover" popupId="demoMenu">
      {(popupState) => (
        <div>
          <Paper>
            <List dense={true} style={{ padding: 0 }}>
              <ListItem>
                {!isActive ? (
                  <ListItemText
                    style={{ margin: "0" }}
                    primary={
                      <div
                        style={{
                          width: "95%",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <Typography>Long Chu</Typography>
                      </div>
                    }
                    secondary={
                      <div
                        style={{
                          width: "95%",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <Typography variant="caption">
                          Student at HUST
                        </Typography>
                      </div>
                    }
                  />
                ) : (
                  <ListItemText
                    style={{ margin: "0" }}
                    primary={
                      <div
                        style={{
                          width: "95%",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <Typography>Long Chu</Typography>
                      </div>
                    }
                    secondary={
                      <div
                        style={{
                          width: "95%",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <FiberManualRecordIcon
                          style={{
                            color: "green",
                            fontSize: "10px",
                          }}
                        />
                        <Typography
                          variant="caption"
                          style={{ paddingLeft: 5 }}
                        >
                          Active
                        </Typography>
                      </div>
                    }
                  />
                )}

                <ListItemSecondaryAction>
                  <IconButton {...bindTrigger(popupState)}>
                    <MoreHorizIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>

            <Divider />

            <div>
              <FlipMove className={classes.flipMove}>
                <List component="nav" className={classes.root}>
                  <ListItem alignItems="flex-start">
                    <Grid
                      container
                      direction="row-reverse"
                      justify="flex-start"
                      alignItems="center"
                    >
                      <Card className={classes.cardUser}>
                        <ListItemText
                          secondary={
                            <React.Fragment>
                              <Typography
                                style={{ color: "white", textAlign: "left" }}
                              >
                                Hello Long chill Hello Long chill Hello Long
                                chill Hello Long chill Hello Long chill Hello
                                Long chill Hello Long chill Hello Long chill
                                Hello Long chill Hello Long chill Hello Long
                                chill Hello Long chill Hello Long chill Hello
                                Long chill Hello Long chill Hello Long chill
                                Hello Long chill Hello Long chill Hello Long
                                chill
                              </Typography>
                            </React.Fragment>
                          }
                          style={{ padding: 5 }}
                        />
                      </Card>

                      {isSeen ? <CheckIcon className={classes.tick} /> : null}
                    </Grid>
                  </ListItem>
                  <div className={classes.timeRight}>15:10</div>
                </List>

                <List component="nav" className={classes.root}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar style={{ alignSelf: "flex-start" }}>
                      <Link href="#">
                        <Avatar />
                      </Link>
                    </ListItemAvatar>
                    <Grid container direction="column">
                      <Card className={classes.cardGuest}>
                        <ListItemText
                          secondary={
                            <React.Fragment>
                              <Typography style={{ color: "#000" }}>
                                Hello Long chill Hello Long chill Hello Long
                                chill Hello Long chill Hello Long chill Hello
                                Long chill Hello Long chill Hello Long chill
                                Hello Long chill Hello Long chill Hello Long
                                chill Hello Long chill Hello Long chill Hello
                                Long chill Hello Long chill Hello Long chill
                                Hello Long chill Hello Long chill Hello Long
                                chill
                              </Typography>
                            </React.Fragment>
                          }
                          style={{ padding: 5 }}
                        />
                      </Card>
                      <div className={classes.timeLeft}>15:15</div>
                    </Grid>
                  </ListItem>
                </List>

                <List component="nav" className={classes.root}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar style={{ alignSelf: "flex-start" }}>
                      <Link href="#">
                        <Avatar />
                      </Link>
                    </ListItemAvatar>
                    <Grid container direction="column">
                      <Card className={classes.cardGuest}>
                        <ListItemText
                          secondary={
                            <React.Fragment>
                              <Typography style={{ color: "#000" }}>
                                Hello Long chill Hello Long chill Hello Long
                                chill Hello Long chill Hello Long chill Hello
                                Long chill Hello Long chill Hello Long chill
                                Hello Long chill Hello Long chill Hello Long
                                chill Hello Long chill Hello Long chill Hello
                                Long chill Hello Long chill Hello Long chill
                                Hello Long chill Hello Long chill Hello Long
                                chill
                              </Typography>
                            </React.Fragment>
                          }
                          style={{ padding: 5 }}
                        />
                      </Card>
                      <div className={classes.timeLeft}>15:15</div>
                    </Grid>
                  </ListItem>
                </List>
              </FlipMove>
            </div>

            <Divider />

            <div className={classes.chatFooter}>
              <Input
                className={classes.input}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
              <IconButton
                className={classes.chatButtonIcon}
                type="submit"
                disabled={!input}
                color="primary"
                onClick={(e) => console.log("hello")}
              >
                <SendRounded />
              </IconButton>
            </div>
          </Paper>
          <Menu
            {...bindMenu(popupState)}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            className={classes.menu}
          >
            <MenuItem onClick={popupState.close}>Archive</MenuItem>
            <MenuItem onClick={popupState.close}>Delete</MenuItem>
            <MenuItem onClick={popupState.close}>Mark as unread</MenuItem>
            <MenuItem onClick={popupState.close}>Mute</MenuItem>
          </Menu>
        </div>
      )}
    </PopupState>
  );
};

export default Messages;
