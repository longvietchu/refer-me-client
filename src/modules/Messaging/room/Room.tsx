import React from "react";
import {
  Paper,
  Grid,
  Typography,
  IconButton,
  Divider,
  InputBase,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CreateIcon from "@material-ui/icons/Create";
import SearchIcon from "@material-ui/icons/Search";

import Styles from "./Style";

const Room = () => {
  const classes = Styles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.room}>
      <Paper className={classes.paper}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography
            variant="body1"
            style={{
              // fontSize: 16,
              padding: "0px 16px",
            }}
          >
            Messaging
          </Typography>
          <Grid item>
            <IconButton>
              <CreateIcon />
            </IconButton>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Divider />
        <Grid container item>
          <InputBase
            className={classes.input}
            placeholder="Search messages"
            inputProps={{ "aria-label": "search messages" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Grid>

        <List component="nav" className={classes.root}>
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
            alignItems="flex-start"
          >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    style={{ display: "inline" }}
                    color="textPrimary"
                  >
                    Long Chu
                  </Typography>
                  <Typography className={classes.typo}>
                    You: Hello Long chill
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    style={{ fontSize: 14 }}
                  >
                    May 3
                  </Typography>
                </React.Fragment>
              }
              style={{ marginLeft: 20 }}
            />
          </ListItem>
        </List>
        <Divider variant="inset" component="li" />

        <List component="nav" className={classes.root}>
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
            alignItems="flex-start"
          >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    style={{ display: "inline" }}
                    color="textPrimary"
                  >
                    Long Chu
                  </Typography>
                  <Typography className={classes.typo}>
                    You: Hello Long chill
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    style={{ fontSize: 14 }}
                  >
                    May 3
                  </Typography>
                </React.Fragment>
              }
              style={{ marginLeft: 20 }}
            />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};

export default Room;
