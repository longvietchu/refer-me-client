import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import Widgets from "../../components/widgets/Widgets";

import Form from "../../components/form/Form";
import Posts from "../../components/posts/Posts";
import MessagesList from "./MessagesList/MessagesList";
import Header from "../../components/header/Header";
import Room from "./room/Room";

import Styles from "./Style";

const MessagingScreen = () => {
  const classes = Styles();

  return (
    <Grid className={classes.app}>
      <Grid item container className={classes.app__header}>
        {/* Header */}
        <Header />
      </Grid>
      <Grid item container className={classes.app__body}>
        <Hidden smDown>
          <Grid item className={classes.body__sidebar} xs>
            <Room />
          </Grid>
        </Hidden>

        <Grid item className={classes.body__feed} xs={12} sm={8} md={5}>
          {/* <Grid item className={classes.feed__form}>
            <Form />
          </Grid> */}
          {/* <Grid item className={classes.feed__posts}>
            <Posts />
          </Grid> */}
          <Grid item className={classes.feed__posts}>
            <MessagesList />
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
