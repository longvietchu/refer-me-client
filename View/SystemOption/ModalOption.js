import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import {
  Divider,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Colors from "../../assets/Color";

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

export default function ModalOption(props) {
  const {
    modalIsOpen,
    closeModal,
    submitCreateOption,
    onSelectedName,
    onSelectedCode,
    name,
    code,
  } = props;

  const submitForm = () => {
    submitCreateOption({
      api_name: "api.v1.category.option.store",
      name,
      code,
    });
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
                  label="Tên tùy chọn"
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
