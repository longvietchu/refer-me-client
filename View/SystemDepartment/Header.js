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

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 150,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { getDepartmentFilter, onSelectedKeyWord, keyword } = props;

  useEffect(() => {
    getDepartmentFilter(keyword);
  }, [keyword]);

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
        direction={"row"}
        alignItems={"center"}
        justify={"space-between"}
      >
        <Grid item>
          <TextField
            label={"Nhập từ khóa"}
            onChange={(event) => onSelectedKeyWord(event.target.value)}
          />
        </Grid>

        <Grid item>
          <Grid container justify={"flex-end"} style={{ marginTop: 10 }}>
            <Button
              onClick={() => {
                console.log("tri");
              }}
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
