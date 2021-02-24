import React, { useState, useEffect } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import Colors from "../../assets/Color";

const Header = (props) => {
  const { openModal, onSelectedText, getKeywordFilter, text } = props;

  useEffect(() => {
    getKeywordFilter(text);
  }, [text]);

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
            onChange={(event) => onSelectedText(event.target.value)}
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
