import React, { useState } from "react";
import {
  Card,
  Grid,
  Hidden,
  Paper,
  IconButton,
  Divider,
  InputBase,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@material-ui/core";
import Widgets from "../../components/widgets/Widgets";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CreateIcon from "@material-ui/icons/Create";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

import Form from "../../components/form/Form";
import Posts from "../../components/posts/Posts";
import Header from "../../components/header/Header";

import Styles from "./Style";

const MessagingScreen = () => {
  const classes = Styles();

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Grid className={classes.app}>
      <Grid
        item
        container
        className={classes.app__header}
        // style={{
        //   boxShadow: mode && "0px 5px 10px -10px rgba(0,0,0,0.75)",
        // }}
      >
        {/* Header */}
        <Header />
      </Grid>
      <Grid item container className={classes.app__body}>
        <Hidden smDown>
          <Grid item className={classes.body__sidebar} xs>
            <Paper style={{ overflow: "hidden" }}>
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
                  //   variant="filled"
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
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
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
          </Grid>
        </Hidden>

        <Grid item className={classes.body__feed} xs={12} sm={8} md={5}>
          <Grid item className={classes.feed__form}>
            <Form />
          </Grid>
          <Grid item className={classes.feed__posts}>
            <Posts />
          </Grid>
        </Grid>

        <Hidden smDown>
          <Grid item className={classes.body__widgets} xs>
            <Widgets />
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default MessagingScreen;
