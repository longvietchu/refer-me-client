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
} from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

import Styles from "./Style";

const JobCard = (job: any, { ...rest }) => {
  const classes = Styles();

  return (
    <Card className={classes.card} {...rest}>
      <CardActionArea>
        <CardContent>
          <Box pb={3} className={classes.box}>
            <Avatar
              alt="Jobs"
              src={job.job.src}
              variant="square"
              style={{ height: 72, width: 72 }}
            />
            <IconButton edge="end" onClick={() => console.log("1")}>
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
