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
    height: 300,
    paddingBottom: 5,
    paddingTop: 10,
  },
};

const useStyles = makeStyles((theme) => ({
  line1: {
    width: 230,
    paddingLeft: 20,
    marginRight: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  line2: {
    width: 230,
    paddingLeft: 20,
    marginRight: 20,
  },
}));

export default function UpdateEmployeeOffice(props) {
  const classes = useStyles();
  const {
    modalIsOpen,
    closeModal,
    listOffice,
    listEmployee,
    employeeSelected,
    submitUpdateEmployee,
    onSelectedOffice,
    officeSelected,
    employeeName,
    onSelectedEmployeeName,
  } = props;

  const updateForm = () => {
    submitUpdateEmployee({
      api_name: "api.v1.employee.employee.update_office",
      id: employeeSelected._id,
      office: officeSelected,
    });
  };

  useEffect(() => {
    if (employeeSelected._id) onSelectedEmployeeName(employeeSelected._id);
    if (employeeSelected.office) onSelectedOffice(employeeSelected.office._id);
  }, [employeeSelected]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container direction={"column"} spacing={3}>
          <Grid item>
            <Typography variant={"h6"}>Chỉnh sửa</Typography>
          </Grid>

          <Divider />

          <div className={classes.line1}>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">- Văn phòng -</InputLabel>
              <Select
                native
                value={officeSelected}
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

          <div className={classes.line2}>
            <FormControl fullWidth className={classes.formControl} disabled>
              <InputLabel htmlFor="age-native-simple">
                - Tên nhân viên -
              </InputLabel>
              <Select
                native
                value={employeeName}
                onChange={(event) => onSelectedEmployeeName(event.target.value)}
                inputProps={{
                  name: "age",
                  id: "age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                {listEmployee.map((e) => (
                  <option value={e._id}>{e.fullname}</option>
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
                onClick={updateForm}
                variant={"contained"}
                style={{ backgroundColor: Colors.green, color: Colors.white }}
              >
                Cập nhật
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </Modal>
  );
}
