import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
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

const Header = (props) => {
  const {
    openModal,
    getKeyWordFilter,
    startDate,
    endDate,
    onChangeDate,
    text,
    onSelectedText,
  } = props;

  useEffect(() => {
    getKeyWordFilter(text);
  }, [text]);

  useEffect(() => {
    getKeyWordFilter(startDate, endDate);
  }, [startDate, endDate]);

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
            label={"Nhập từ khóa, đầu mối"}
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
