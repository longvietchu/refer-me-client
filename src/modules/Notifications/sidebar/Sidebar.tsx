import React from "react";
import { Card, Paper, Avatar, Divider } from "@material-ui/core";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";

import Styles from "./Style";

const Sidebar = () => {
  const classes = Styles();
  return (
    <Card className={classes.sidebar}>
      <div className={classes.container}>
        <h3 className={classes.notifi}>Notifcations</h3>
        <p className={classes.txt}>
          You’re all caught up! Check back later for new notifications
        </p>
      </div>
    </Card>
  );
};

export default Sidebar;
