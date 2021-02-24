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
    minWidth: 260,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const {
    openModal,
    listOffice,
    onfilterOffice,
    getOfficeFilter,
    office,
  } = props;

  useEffect(() => {
    getOfficeFilter(office);
  }, [office]);

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
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">
              - Văn phòng/Chi nhánh -
            </InputLabel>
            <Select
              native
              fullWidth
              onChange={(e) => onfilterOffice(e.target.value)}
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
