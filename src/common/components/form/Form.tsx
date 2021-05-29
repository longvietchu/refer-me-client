import React, { useState, useEffect } from "react";
import Styles from "./Style";

import {
  Paper,
  useTheme,
  Chip,
  LinearProgress,
  Avatar,
  Link,
} from "@material-ui/core";

import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import YouTubeIcon from "@material-ui/icons/YouTube";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import CreateIcon from "@material-ui/icons/Create";

import { LinkedInBlue, LinkedInLightBlue } from "../../assets/Colors";

const Form = () => {
  const classes = Styles();
  const theme = useTheme();

  const [uploadData, setUploadData] = useState({
    description: "",
    file: {
      type: "",
      name: "",
      data: "",
    },
  });

  const [progress, setProgress] = useState("");

  const resetState = () => {
    setUploadData({
      description: "",
      file: {
        type: "",
        name: "",
        data: "",
      },
    });
    setProgress("");
  };

  return (
    <Paper className={classes.upload}>
      <div className={classes.upload__header}>
        <Link href="./profile">
          <Avatar
            className={classes.ava}
            src="https://media-exp1.licdn.com/dms/image/C5603AQG3xo7I_i2GYw/profile-displayphoto-shrink_100_100/0/1618305141624?e=1626912000&v=beta&t=DBdZKbpM8bu6ldYtL-LyKFIoohQKChsjKkc2cANPKt4"
          />
        </Link>
        <form className={classes.header__form}>
          <CreateIcon />
          <input
            placeholder="Start a post"
            value={uploadData.description}
            onChange={(e) =>
              setUploadData({ ...uploadData, description: e.target.value })
            }
          />
          <input
            id="upload-image"
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => console.log("images")}
          />
          <input
            id="upload-video"
            type="file"
            accept="video/*"
            hidden
            onChange={(e) => console.log("videos")}
          />
          <button type="submit">Post</button>
        </form>
      </div>

      {uploadData.file.name && !progress && (
        <div className={classes.selectedFile}>
          <Chip
            color="primary"
            size="small"
            onDelete={resetState}
            icon={
              uploadData.file.type === "image" ? (
                <PhotoSizeSelectActualIcon />
              ) : (
                <VideocamRoundedIcon />
              )
            }
            label={uploadData.file.name}
          />
        </div>
      )}

      {progress ? (
        <div className={classes.uploading}>
          <LinearProgress
            variant="determinate"
            // value={progress}
            className={classes.progress}
          />
          <p>{progress} %</p>
        </div>
      ) : (
        ""
      )}

      <div className={classes.upload__media}>
        <label htmlFor="upload-image" className={classes.media__options}>
          <PhotoSizeSelectActualIcon
            style={{
              color:
                theme.palette.type === "dark"
                  ? LinkedInLightBlue
                  : LinkedInBlue,
            }}
          />
          <h4>Photo</h4>
        </label>
        <label htmlFor="upload-video" className={classes.media__options}>
          <YouTubeIcon style={{ color: "#7fc15e" }} />
          <h4>Video</h4>
        </label>
        <div className={classes.media__options}>
          <AssignmentTurnedInIcon style={{ color: "#cea2cc" }} />
          <h4>Goal</h4>
        </div>
        <div className={classes.media__options}>
          <CalendarViewDayIcon style={{ color: "#f5987e" }} />
          <h4>Write article</h4>
        </div>
      </div>
    </Paper>
  );
};

export default Form;
