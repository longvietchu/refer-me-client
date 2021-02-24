import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Grid,
  Card,
  InputLabel,
  Select,
  FormControl,
  Button,
} from "@material-ui/core";
import PopupDatePicker from "../../Component/Popup/PopupDatePicker.js";
import Colors from "../../assets/Color";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 150,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const {
    openModal,
    listRooms,
    listStatus,
    getKeyWordFilter,
    getDateFilter,
    onChangeDate,
    startDate,
    endDate,
    onSelectedRoom,
    onSelectedStatus,
    roomSelected,
    statusSelected,
    text,
    onSelectedText,
  } = props;

  useEffect(() => {
    console.log("text====", text);
    getKeyWordFilter(text);
  }, [text]);

  useEffect(() => {
    console.log("roomSelected====", roomSelected);
    getKeyWordFilter(roomSelected);
  }, [roomSelected]);

  useEffect(() => {
    getKeyWordFilter(startDate, endDate);
  }, [startDate, endDate]);

  useEffect(() => {
    getKeyWordFilter(statusSelected);
  }, [statusSelected]);

  return (
    <div
      elevation={2}
      style={{
        padding: 10,
        paddingRight: 25,
        paddingLeft: 25,
        marginBottom: 15,
      }}
    >
      <Grid
        container
        xs={12}
        direction={"row"}
        alignItems={"center"}
        justify={"space-between"}
      >
        <Grid item>
          <TextField
            label={"Nhập từ khóa, diễn giả"}
            onChange={(event) => onSelectedText(event.target.value)}
          />
        </Grid>

        <Grid item>
          <PopupDatePicker
            rangeTime={{ startDate, endDate }}
            onChangeDate={onChangeDate}
          />
        </Grid>

        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">- Địa điểm -</InputLabel>
            <Select
              native
              onChange={(event) => onSelectedRoom(event.target.value)}
              inputProps={{
                name: "age",
                id: "age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              {listRooms.map((e) => (
                <option value={e._id}>{e.name}</option>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">- Trạng thái -</InputLabel>
            <Select
              native
              onChange={(event) => onSelectedStatus(event.target.value)}
              inputProps={{
                name: "age",
                id: "age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              {listStatus.map((e) => (
                <option value={e.id}>{e.name}</option>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item>
          <Grid container justify={"flex-end"} style={{ marginTop: 10 }}>
            <Button
              onClick={openModal}
              variant={"contained"}
              style={{ backgroundColor: Colors.green, color: Colors.white }}
            >
              Tạo mới
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
