import React from "react";
import { Paper, Avatar, Divider, Link, Grid } from "@material-ui/core";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import Style from "./Style";

import { useHistory } from "react-router-dom";

const SidebarTop = () => {
  const classes = Style();
  let history = useHistory();

  const onClick = (): void => {
    history.push("./mynetwork");
  };
  return (
    <Paper className={classes.sidebar}>
      <div
        className={classes.cover}
        style={{
          backgroundImage: `url("https://tandsgo.com/wp-content/uploads/2020/02/Abstract-blue-and-orange-pattern.jpg")`,
        }}
      ></div>
      <div style={{ padding: "12px 12px 16px" }}>
        <Link color="inherit" underline="none" href="./profile">
          <Grid container direction="column" alignItems="center">
            <Avatar
              className={classes.avatar}
              src="https://media-exp1.licdn.com/dms/image/C5603AQG3xo7I_i2GYw/profile-displayphoto-shrink_100_100/0/1618305141624?e=1626912000&v=beta&t=DBdZKbpM8bu6ldYtL-LyKFIoohQKChsjKkc2cANPKt4"
            />
            <h4>Tung Nguyen</h4>
          </Grid>
        </Link>
        <p
          style={{
            textAlign: "center",
            color: "grey",
            fontSize: "12px",
            padding: "4px 8px",
          }}
        >
          Internship Trainee at Data Communication of VietNam
        </p>
      </div>
      <div className={classes.stats} onClick={onClick}>
        <Divider />
        <div className={classes.stat}>
          <h4>Invitation</h4>
          <p>100</p>
        </div>
        <div className={classes.stat}>
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 400, color: "grey" }}>
              Connections
            </h4>
            <span style={{ fontSize: "12px", fontWeight: "bold" }}>
              Grown your connection
            </span>
          </div>
          <p>1000</p>
        </div>
        <Divider />
      </div>
      <div className={classes.myItems}>
        <LabelImportantIcon style={{ transform: "rotate(-90deg)" }} />
        <h4>My Items</h4>
      </div>
    </Paper>
  );
};

export default SidebarTop;
