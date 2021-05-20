import React, { useState } from "react";
import {
  Paper,
  Button,
  TextField,
  InputAdornment,
  Typography,
  FormHelperText,
} from "@material-ui/core";
import Logo from "../../../assets/images/text_logo.png";
import Style from "./Style";

import { AccountCircle, LockRounded } from "@material-ui/icons";

import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";

const LoginCard = () => {
  const classes = Style();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [helperText, sethelperText] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  let history = useHistory();
  const Login = () => {
    if (state.username === "" || state.password === "") {
      sethelperText("");
      sethelperText("Please enter your email address and password");
    } else if (state.username != "tungnh" || state.password != "123456") {
      sethelperText("");
      sethelperText("that's not the right email or password");
    } else {
      history.push("/home");
      enqueueSnackbar("Login success!", { variant: "success" });
    }
  };

  return (
    <Paper elevation={3} className={classes.card}>
      <header className={classes.header}>
        <img src={Logo} alt="logo" />
      </header>

      <Typography variant="h4">Sign in</Typography>

      <form className={classes.form}>
        <TextField
          color="primary"
          margin="normal"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          type="email"
          value={state.username}
          placeholder="email or phone"
          onChange={(e) => {
            setState({
              ...state,
              username: e.target.value,
            });
          }}
        />
        <TextField
          color="primary"
          margin="normal"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockRounded />
              </InputAdornment>
            ),
          }}
          type="password"
          value={state.password}
          placeholder="password"
          onChange={(e) => {
            setState({
              ...state,
              password: e.target.value,
            });
          }}
        />

        <div style={{ width: "100%" }}>
          <FormHelperText
            style={{ marginLeft: "16px", color: "red", fontSize: "13px" }}
          >
            {helperText}
          </FormHelperText>
        </div>

        <Button onClick={Login}>Log In</Button>
      </form>

      <div className={classes.google}>
        <section>
          <div></div>
          <p>OR</p>
          <div></div>
        </section>
        {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
      </div>
    </Paper>
  );
};

export default LoginCard;
