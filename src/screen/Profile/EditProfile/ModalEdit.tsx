import React from "react";
import Styles from "./Style";

import {
  Grid,
  Paper,
  IconButton,
  Typography,
  Fab,
  Box,
  Avatar,
  TextField,
  Button,
} from "@material-ui/core";

import { CameraAlt, Close } from "@material-ui/icons";

const ModalEdit = (props: any) => {
  const classes = Styles();
  //   const ref = React.forwardRef()
  return (
    <Grid container className={classes.container}>
      <Paper className={classes.paper}>
        <Grid component="nav" className={classes.header} item>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <IconButton onClick={props.closeModal}>
              <Close className={classes.icon} />{" "}
            </IconButton>
            <Typography className={classes.typo} variant="h4">
              Edit profile
            </Typography>
          </div>
          <Fab
            variant="extended"
            size="small"
            className={classes.btn}
            type="submit"
          >
            <div className={classes.btnDiv}>
              <span>Save</span>
            </div>
          </Fab>
        </Grid>
        <Grid className={classes.darkArea} item>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <IconButton
              className={classes.camera}
              aria-label="upload picture"
              component="span"
            >
              <CameraAlt className={classes.icon} />
            </IconButton>
          </label>
          <div className={classes.avatarBox}>
            <Box>
              <Avatar className={classes.avatar}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <IconButton aria-label="upload picture" component="span">
                    <CameraAlt className={classes.icon} />
                  </IconButton>
                </label>
              </Avatar>
            </Box>
          </div>
        </Grid>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                className={classes.textField}
                name="Name"
                variant="filled"
                fullWidth
                id="Name"
                label="Name"
                autoFocus
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textField}
                name="Headline"
                variant="filled"
                multiline
                fullWidth
                id="Headline"
                label="Headline"
                autoFocus
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textField}
                name="location"
                variant="filled"
                fullWidth
                placeholder="Add your location"
                id="location"
                label="Location"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textField}
                name="website"
                variant="filled"
                required
                placeholder="Add your website"
                fullWidth
                id="website"
                label="website"
                autoFocus
              />
            </Grid>
          </Grid>
        </form>
        <Grid item xs={12}>
          <div style={{ marginLeft: "5%" }}>
            <Typography>
              Birth date.{" "}
              <Button
                style={{
                  color: "rgba(29,161,242,1.00)",
                  textTransform: "capitalize",
                }}
              >
                Edit
              </Button>
            </Typography>
          </div>
          <div style={{ marginLeft: "5%" }}>
            <Typography>Add your date of birth</Typography>
          </div>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ModalEdit;
