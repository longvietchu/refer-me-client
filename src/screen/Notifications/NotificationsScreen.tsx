import React from "react";
import { Grid, Card, Hidden } from "@material-ui/core";
import Sidebar from "./sidebar/Sidebar";
import Content from "./content/Content";
import Styles from "./Style";
import Widgets from "../../components/widgets/Widgets";
import Header from "../../components/header/Header";

import { Helmet } from "react-helmet";

const NotificationsScreen = () => {
  const classes = Styles();
  return (
    <Grid container className={classes.app}>
      <Helmet>
        <title>Notifications | RefMe</title>
      </Helmet>
      <Grid
        item
        container
        className={classes.app__header}
        // style={{
        //   boxShadow: mode && "0px 5px 10px -10px rgba(0,0,0,0.75)",
        // }}
      >
        <Header />
      </Grid>
      <Grid item container className={classes.app__body}>
        <Hidden smDown>
          <Grid item className={classes.body__sidebar} md={2}>
            {/* Sidebar */}
            <Sidebar />
          </Grid>
        </Hidden>
        <Grid item className={classes.body__feed} xs={12} sm={8} md={5}>
          {/* Content */}
          <Grid item className={classes.feed__form}>
            <Content />
          </Grid>
          <Grid item className={classes.feed__posts}>
            {/* <Posts /> */}
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item className={classes.body__widgets} md={3}>
            {/* Widgets */}
            <Widgets />
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default NotificationsScreen;
