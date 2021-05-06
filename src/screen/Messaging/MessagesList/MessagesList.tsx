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
} from "@material-ui/core";

import FlipMove from "react-flip-move";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import Styles from "./Style";
import { SendRounded } from "@material-ui/icons";

const Messages = () => {
  const classes = Styles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [input, setInput] = React.useState("");

  return (
    <div>
      <Paper>
        <List dense={true} style={{ padding: "0" }}>
          <ListItem>
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
                  <Typography variant="caption">Student at HUST</Typography>
                </div>
              }
            />
            <ListItemSecondaryAction>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>

        <Divider />

        <div>
          <FlipMove
            style={{
              height: "400px",
              overflowY: "scroll",
            }}
          >
            <List component="nav" className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Link variant="body2" href="#" color="inherit">
                      Long Chu
                    </Link>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography>
                        Hello Long chill Hello Long chill Hello Long chill Hello
                        Long chill Hello Long chill Hello Long chill Hello Long
                        chill Hello Long chill Hello Long chill Hello Long chill
                        Hello Long chill Hello Long chill Hello Long chillHello
                        Long chillHello Long chillvHello Long chillHello Long
                        chillv
                      </Typography>
                    </React.Fragment>
                  }
                  style={{ margin: "0" }}
                />
              </ListItem>
            </List>

            <List component="nav" className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Link variant="body2" href="#" color="inherit">
                      Tùng Nguyễn
                    </Link>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography>Hello Long chill</Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>

            <List component="nav" className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Link variant="body2" href="#" color="inherit">
                      Long Chu
                    </Link>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography>
                        Hello Long chill Hello Long chill Hello Long chill Hello
                        Long chill Hello Long chill Hello Long chill Hello Long
                        chill Hello Long chill Hello Long chill Hello Long chill
                        Hello Long chill Hello Long chill Hello Long chillHello
                        Long chillHello Long chillvHello Long chillHello Long
                        chillv
                      </Typography>
                    </React.Fragment>
                  }
                  style={{ margin: "0" }}
                />
              </ListItem>
            </List>

            <List component="nav" className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Link variant="body2" href="#" color="inherit">
                      Long Chu
                    </Link>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography>
                        Hello Long chill Hello Long chill Hello Long chill Hello
                        Long chill Hello Long chill Hello Long chill Hello Long
                        chill Hello Long chill Hello Long chill Hello Long chill
                        Hello Long chill Hello Long chill Hello Long chillHello
                        Long chillHello Long chillvHello Long chillHello Long
                        chillv
                      </Typography>
                    </React.Fragment>
                  }
                  style={{ margin: "0" }}
                />
              </ListItem>
            </List>

            <List component="nav" className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Link variant="body2" href="#" color="inherit">
                      Long Chu
                    </Link>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography>
                        Hello Long chill Hello Long chill Hello Long chill Hello
                        Long chill Hello Long chill Hello Long chill Hello Long
                        chill Hello Long chill Hello Long chill Hello Long chill
                        Hello Long chill Hello Long chill Hello Long chillHello
                        Long chillHello Long chillvHello Long chillHello Long
                        chillv
                      </Typography>
                    </React.Fragment>
                  }
                  style={{ margin: "0" }}
                />
              </ListItem>
            </List>

            <List component="nav" className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Link variant="body2" href="#" color="inherit">
                      Long Chu
                    </Link>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography>
                        Hello Long chill Hello Long chill Hello Long chill Hello
                        Long chill Hello Long chill Hello Long chill Hello Long
                        chill Hello Long chill Hello Long chill Hello Long chill
                        Hello Long chill Hello Long chill Hello Long chillHello
                        Long chillHello Long chillvHello Long chillHello Long
                        chillv
                      </Typography>
                    </React.Fragment>
                  }
                  style={{ margin: "0" }}
                />
              </ListItem>
            </List>

            <List component="nav" className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Link variant="body2" href="#" color="inherit">
                      Long Chu
                    </Link>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography>
                        Hello Long chill Hello Long chill Hello Long chill Hello
                        Long chill Hello Long chill Hello Long chill Hello Long
                        chill Hello Long chill Hello Long chill Hello Long chill
                        Hello Long chill Hello Long chill Hello Long chillHello
                        Long chillHello Long chillvHello Long chillHello Long
                        chillv
                      </Typography>
                    </React.Fragment>
                  }
                  style={{ margin: "0" }}
                />
              </ListItem>
            </List>
          </FlipMove>
        </div>

        <Divider />

        <div className={classes.chatFooter}>
          <form className={classes.form} onSubmit={(e) => console.log(e)}>
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
            >
              <SendRounded />
            </IconButton>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default Messages;
