import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import {
  Grid,
  Typography,
  TextField,
  Divider,
  InputAdornment,
  Button,
  IconButton,
} from "@material-ui/core";

import Modal from "react-modal";
import MUIRichTextEditor from "mui-rte";

import WorkIcon from "@material-ui/icons/Work";
import BusinessIcon from "@material-ui/icons/Business";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CloseIcon from "@material-ui/icons/Close";

import Styles from "./Style";

const defaultTheme = createMuiTheme();

Object.assign(defaultTheme, {
  overrides: {
    MUIRichTextEditor: {
      root: {
        border: "1px solid gray",
      },
      editor: {
        padding: 8,
      },
      placeHolder: {
        padding: 8,
        position: "static",
      },
      toolbar: { borderBottom: "1px solid gray" },
    },
  },
});

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    height: "80%",
    width: "30%",
    paddingBottom: 5,
    paddingTop: 10,
    borderRadius: 10,
  },
};

interface props {
  modalIsOpen: boolean;
  closeModal: VoidFunction;
}

const employments = [
  {
    value: "initial",
    label: "Choose one...",
  },
  {
    value: "full",
    label: "Full-time",
  },
  {
    value: "part",
    label: "Part-time",
  },
  {
    value: "contract",
    label: "Contract",
  },
  {
    value: "temporary",
    label: "Temporary",
  },
  {
    value: "internship",
    label: "Internship",
  },
];

const ModalPostJob = (props: props) => {
  const classes = Styles();

  const { modalIsOpen, closeModal } = props;
  const [employmentType, setEmploymentType] = React.useState("initial");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmploymentType(event.target.value);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Grid container justify="space-between" alignItems="center">
              <Typography variant="h6">Post a new job</Typography>
              <IconButton onClick={closeModal}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Divider />

          <Grid item>
            <TextField
              label="Job title"
              required
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <WorkIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Company"
              required
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BusinessIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Job location"
              required
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-select-currency-native"
              label="Employment type"
              required
              variant="outlined"
              fullWidth
              select
              value={employmentType}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
            >
              {employments.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>

          <Grid item>
            <MuiThemeProvider theme={defaultTheme}>
              <Typography variant="subtitle1" style={{ paddingLeft: 2 }}>
                Add a job description
              </Typography>

              <MUIRichTextEditor
                label="Type something here..."
                inlineToolbar={true}
                inlineToolbarControls={["bold", "italic", "my-style", "link"]}
                controls={[
                  "bold",
                  "italic",
                  "underline",
                  "strikethrough",
                  "numberList",
                  "bulletList",
                ]}
              />
            </MuiThemeProvider>
          </Grid>

          <Grid style={{ alignSelf: "center" }}>
            <Button
              className={classes.btn_post}
              onClick={(e) => console.log("click")}
            >
              Post job
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};

export default ModalPostJob;
