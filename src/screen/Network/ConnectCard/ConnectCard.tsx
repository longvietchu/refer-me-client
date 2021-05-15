import React from "react";
import {
  Paper,
  Card,
  CardContent,
  Box,
  Avatar,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";

import Styles from "./Style";

const ConnectCard = (connect: any, { ...rest }) => {
  const classes = Styles();
  return (
    <Card className={classes.card} {...rest}>
      <CardContent>
        <Box pb={3} className={classes.box}>
          <Avatar alt="Product" className={classes.ava_top} />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          className={classes.name}
        >
          {connect.connect.name}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
          className={classes.occupation}
        >
          {connect.connect.occupation}
        </Typography>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Avatar
            variant="square"
            src="https://media-exp1.licdn.com/dms/image/C510BAQGVaXAZYQ2QwA/company-logo_100_100/0/1519908097940?e=1629331200&v=beta&t=fpH6ECLnMjnGW-HHWbZfvQTHOvsgHed0kqWLO6tp3Sw"
            className={classes.logo}
          />
          <Typography
            align="center"
            color="textPrimary"
            variant="body1"
            className={classes.education}
          >
            {connect.connect.education}
          </Typography>
        </Grid>
        <Grid container justify="center">
          <Button className={classes.btn}>Connect</Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ConnectCard;
