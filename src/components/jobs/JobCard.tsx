import React from "react";
import {
  Card,
  CardContent,
  Button,
  CardActionArea,
  Box,
  Avatar,
  IconButton,
  Typography,
  Snackbar,
  SnackbarOrigin,
} from "@material-ui/core";

import { SnackbarProvider, VariantType, useSnackbar } from "notistack";

import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

import Styles from "./Style";

export interface State extends SnackbarOrigin {
  open: boolean;
}

const JobCard = (job: any, { ...rest }) => {
  const classes = Styles();
  const { enqueueSnackbar } = useSnackbar();

  // const handleClick = (e: any) => {
  //   console.log("abc");
  //   return (
  //     <Alert severity="success">This is a success alert — check it out!</Alert>
  //   );
  // };

  const handleClick = (variant: VariantType, e?: any) => () => {
    if (e) {
      e.stopPropagation();
    }
    enqueueSnackbar("This is a success message!", { variant });
  };

  return (
    <Card className={classes.card} {...rest} onClick={() => console.log("1")}>
      <CardActionArea>
        <CardContent>
          <Box pb={3} className={classes.box}>
            <Avatar
              alt="Jobs"
              src={job.job.src}
              variant="square"
              style={{ height: 72, width: 72 }}
            />
            <IconButton edge="end" onClick={handleClick("success")}>
              <BookmarkBorderIcon style={{ fontSize: "32" }} />
            </IconButton>
          </Box>

          <Typography
            color="textPrimary"
            variant="h5"
            className={classes.title}
          >
            {job.job.title}
          </Typography>
          <Typography variant="body1" className={classes.company}>
            {job.job.company}
          </Typography>
          <Typography gutterBottom variant="body1" className={classes.location}>
            {job.job.location}
          </Typography>

          <Typography variant="body1" className={classes.time}>
            {job.job.time}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default JobCard;
