import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import {
  Divider,
  Grid,
  Typography,
  TextField,
  Button,
  InputLabel,
  Select,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  TimePicker,
} from "@material-ui/pickers";
import { green } from "@material-ui/core/colors";
import Colors from "../../assets/Color";
import { formatDatetime } from "../../config/Function";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    height: 360,
    paddingBottom: 5,
    paddingTop: 10,
  },
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  picker: {
    marginTop: 20,
    width: 205,
    paddingLeft: 20,
    marginRight: 20,
  },
  mulltiline: {
    width: 445,
  },
  line3: {
    width: 230,
    paddingLeft: 20,
    marginRight: 20,
  },
}));

export default function ModalRoom(props) {
  const classes = useStyles();
  const {
    modalIsOpen,
    closeModal,
    listOffice,
    submitCreateRoom,
    onSelectedOffice,
    onSelectedName,
    onSelectedCode,
    officeSelected,
    name,
    code,
  } = props;

  const submitForm = () => {
    submitCreateRoom({
      api_name: "api.v1.category.room.store",
      name,
      code,
      office: officeSelected,
    });
    // console.log("aaaa")
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container direction={"column"} spacing={3}>
          <Grid item>
            <Typography variant={"h6"}>Tạo mới</Typography>
          </Grid>
          <Divider />
          <Grid item>
            <Grid container direction={"row"}>
              <Grid style={{ width: "100%" }} item>
                <TextField
                  label="Tên phòng họp"
                  variant="outlined"
                  required={true}
                  onChange={(event) => onSelectedName(event.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction={"row"}>
              <Grid style={{ width: "100%" }} item>
                <TextField
                  label="Mã"
                  variant="outlined"
                  required={true}
                  onChange={(event) => onSelectedCode(event.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>

          <div className={classes.line3}>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">- Văn phòng -</InputLabel>
              <Select
                native
                onChange={(event) => onSelectedOffice(event.target.value)}
                inputProps={{
                  name: "age",
                  id: "age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                {listOffice.map((e) => (
                  <option value={e._id}>{e.name}</option>
                ))}
              </Select>
            </FormControl>
          </div>

          <Divider style={{ marginTop: 10 }} />

          <Grid item>
            <Grid
              container
              direction={"row"}
              alignItems={"center"}
              justify={"flex-end"}
            >
              <Button
                onClick={closeModal}
                variant={"contained"}
                style={{
                  backgroundColor: Colors.red,
                  color: Colors.white,
                  marginRight: 20,
                }}
              >
                Hủy
              </Button>
              <Button
                onClick={submitForm}
                variant={"contained"}
                style={{ backgroundColor: Colors.green, color: Colors.white }}
              >
                Tạo
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </Modal>
  );
}
