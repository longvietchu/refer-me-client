import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import {
  IconButton,
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
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  TimePicker,
} from "@material-ui/pickers";
import Colors from "../../assets/Color";
import { formatDatetime } from "../../config/Function";
import CloseIcon from "@material-ui/icons/Close";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
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
    marginTop: 38,
    width: 205,
    paddingLeft: 20,
    marginRight: 20,
  },
  line4: {
    marginTop: 38,
    marginBottom: 10,
    width: 205,
    paddingLeft: 20,
    marginRight: 20,
  },
  Option: {
    marginBottom: 10,
    paddingLeft: 16,
    marginRight: 20,
  },
  txtInput: {
    width: 200,
    marginTop: 0,
  },
}));

export default function RejectMeeting(props) {
  const classes = useStyles();

  const { modalIsOpen, closeModal, submitRejectMeeting, itemSelected } = props;

  const [status, setStatus] = useState();

  useEffect(() => {
    if (itemSelected.status) setStatus(itemSelected.status);
  }, [itemSelected]);

  console.log("itemSelected++", itemSelected);

  const rejectForm = () => {
    submitRejectMeeting({
      api_name: "api.v1.features.meeting.update_status",
      _id: itemSelected._id,
      status: 0,
    });
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Grid container direction={"column"} spacing={3}>
        <Grid item>
          <Typography>Hủy duyệt!</Typography>
        </Grid>
        <Divider />
        <Grid item style={{ paddingTop: 10, paddingBottom: 10 }}>
          <Typography style={{ marginTop: 20, marginBottom: 20 }}>
            Bạn có muốn hủy duyệt không?
          </Typography>
        </Grid>
        <Divider />
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
              Hủy bỏ
            </Button>
            <Button
              onClick={rejectForm}
              variant={"contained"}
              style={{ backgroundColor: Colors.green, color: Colors.white }}
            >
              Đồng ý
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
}
