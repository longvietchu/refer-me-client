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

import { VariantType, useSnackbar } from "notistack";

import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";

import Styles from "./Style";

interface props {
  job: any;
  onSave: any;
}

const JobCard = (props: props, { ...rest }) => {
  const classes = Styles();

  const { onSave, job } = props;
  console.log("job", job);

  // const [isSave, setIsSave] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  // const onSave = (
  //   e: { stopPropagation: () => void },
  //   variant: VariantType,
  //   id: string
  // ) => {
  //   e.stopPropagation();
  //   console.log("b", id);
  //   enqueueSnackbar("This is a success message!", { variant });
  //   setIsSave(!isSave);
  // };

  return (
    <Card className={classes.card} {...rest} onClick={() => console.log("1")}>
      <CardActionArea>
        <CardContent>
          <Box pb={3} className={classes.box}>
            <Avatar
              alt="Jobs"
              src={job.src}
              variant="square"
              style={{ height: 72, width: 72 }}
            />
            {!job.isSave ? (
              <IconButton
                edge="end"
                onClick={(e) => onSave(e, "success", job.id)}
              >
                <BookmarkBorderIcon style={{ fontSize: "32" }} />
              </IconButton>
            ) : (
              <IconButton
                edge="end"
                onClick={(e) => onSave(e, "error", job.id)}
              >
                <BookmarkIcon style={{ fontSize: "32", color: "#00000099" }} />
              </IconButton>
            )}
          </Box>

          <Typography
            color="textPrimary"
            variant="h5"
            className={classes.title}
          >
            {job.title}
          </Typography>
          <Typography variant="body1" className={classes.company}>
            {job.company}
          </Typography>
          <Typography gutterBottom variant="body1" className={classes.location}>
            {job.location}
          </Typography>

          <Typography variant="body1" className={classes.time}>
            {job.time}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default JobCard;
