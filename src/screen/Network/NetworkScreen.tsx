import React from "react";
import { Grid, Hidden, IconButton, Paper, Typography } from "@material-ui/core";

import Header from "../../components/header/Header";
import SideBar from "./SideBar/SideBar";
import Styles from "./Style";
import Invitation from "./Invitation/Invitation";
import ConnectCard from "./ConnectCard/ConnectCard";

const NetworkScreen = () => {
  const classes = Styles();
  return (
    <Grid
      container
      className={classes.app}
      // style={{ backgroundColor: mode ? darkPrimary : LinkedInBgColor }}
    >
      <Grid item container className={classes.app__header}>
        {/* Header */}
        <Header />
      </Grid>
      <Grid item container className={classes.app__body}>
        <Hidden smDown>
          <Grid item className={classes.body__sidebar} xs={5}>
            <SideBar />
          </Grid>
        </Hidden>
        <Grid item className={classes.body__feed} xs={7}>
          <Grid item className={classes.feed__form}>
            <Invitation />
          </Grid>
          <Grid item className={classes.feed__posts}>
            <ConnectCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NetworkScreen;
