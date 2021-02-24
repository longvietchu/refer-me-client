import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";

import {
  Button,
  TextField,
  Grid,
  InputAdornment,
  makeStyles,
  FormControlLabel,
  Checkbox,
  Card,
  FormHelperText,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import KEY from "../../assets/AsynStorage";

import { AccountCircle, LockRounded } from "@material-ui/icons";

import { login } from "../../apis/Functions/users";
import { saveColors } from "../../actions/colorsAction";

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "260px",
    backgroundColor: "#3C8DBC",
  },
  root: {
    padding: 40,
  },
  loginTitle: {
    fontSize: "22px",
    color: "#3C8DBC",
    marginBottom: "10px",
  },
  container: {
    flex: 1,
    backgroundColor: "red",
  },
}));

const LoginScreen = (props) => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  const classes = useStyles();
  let history = useHistory();

  const [state, setState] = useState({
    api_name: "api.v1.oauth.sso",
    company_code: "Dcv",
    username: "",
    password: "",
  });

  const { enqueueSnackbar } = useSnackbar();

  const [helperText, sethelperText] = useState("");

  const Login = async () => {
    console.log("Login");

    if (state.username === "" || state.password === "") {
      sethelperText("");
      sethelperText("Bạn vui lòng nhập tên tài khoản và mật khẩu");
    } else {
      const res = await login(state);
      console.log("+++", res.data.data);
      if (res.data && res.data.code == 200) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: res.data.data.fullname,
            empCode: res.data.data.code,
          })
        );
        localStorage.setItem(KEY.API_TOKEN, res.data.data.token);
        localStorage.setItem("company", JSON.stringify(res.data.data.company));
        localStorage.setItem("office", JSON.stringify(res.data.data.office));
        const listColor = { colors: res.data.data.color_list };
        // console.log("list colorsss---", listColor.colors);
        localStorage.setItem(KEY.API_COLLORS, JSON.stringify(listColor.colors));
        props.saveColors(res.data.data.color_list);
        history.push("/home");
        sethelperText("");
        enqueueSnackbar("Đăng nhập thành công!", { variant: "success" });
      } else {
        enqueueSnackbar(res.data.message, { variant: "error" });
        sethelperText("");
        sethelperText("Thông tin đăng nhập không chính xác");
      }
    }
  };

  const LoginEnter = async (e) => {
    if (e.key === "Enter") {
      let res;
      if (state.username === "" || state.password === "") {
        sethelperText("");
        sethelperText("Bạn vui lòng nhập tên tài khoản và mật khẩu");
      } else {
        res = await login(state);
        console.log(res);
        if (res.data && res.data.code == 200) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              name: res.data.data.fullname,
              empCode: res.data.data.code,
            })
          );
          localStorage.setItem(KEY.API_TOKEN, res.data.data.token);
          localStorage.setItem(
            "company",
            JSON.stringify(res.data.data.company)
          );
          localStorage.setItem("office", JSON.stringify(res.data.data.office));
          const listColor = { colors: res.data.data.color_list };
          // console.log("list colorsss---", listColor)
          localStorage.setItem(
            KEY.API_COLLORS,
            JSON.stringify(listColor.colors)
          );
          props.saveColors(res.data.data.color_list);
          history.push("/home");
          sethelperText("");
          enqueueSnackbar("Đăng nhập thành công!", { variant: "success" });
        } else {
          sethelperText("");
          sethelperText("Thông tin đăng nhập không chính xác");
        }
      }
    }
  };

  const height = getWindowDimensions().height;
  const width = getWindowDimensions().width;
  return (
    <Grid
      style={{
        height,
        backgroundImage: `url(https://images.pexels.com/photos/5905443/pexels-photo-5905443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
        backgroundRepeat: "no-repeat",
        width,
        backgroundSize: "cover",
      }}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Card className={classes.root}>
        <Grid container direction="column" justify="center" alignItems="center">
          <BorderColorIcon style={{ fontSize: "35px", marginBottom: "10px" }} />
          <b className={classes.loginTitle}>HỆ THỐNG QUẢN LÝ HỌP</b>
          <i>Bạn vui lòng, nhập đầy đủ thông tin</i>
          <i style={{ color: "red" }}>Tài khoản từ hệ thống HRM</i>
          <TextField
            color="primary"
            label="Tên tài khoản"
            margin="normal"
            required={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            value={state.username}
            onChange={(e) => {
              setState({
                ...state,
                username: e.target.value,
              });
            }}
            onKeyDown={LoginEnter}
          />
          <TextField
            type="password"
            color="primary"
            required={true}
            name="password"
            id="password"
            autoComplete="current-password"
            label="Mật khẩu"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockRounded />
                </InputAdornment>
              ),
            }}
            value={state.password}
            onChange={(e) => {
              setState({
                ...state,
                password: e.target.value,
              });
            }}
            onKeyDown={LoginEnter}
          />
          <div style={{ width: "100%" }}>
            <FormHelperText
              style={{ marginLeft: "16px", color: "red", fontSize: "13px" }}
            >
              {helperText}
            </FormHelperText>
          </div>

          <Button
            onClick={Login}
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Đăng nhập
          </Button>
        </Grid>
      </Card>
    </Grid>
  );
};

const mapStatetoProps = (state) => {
  return {
    colors: state.colorsReducer,
  };
};

export default connect(mapStatetoProps, { saveColors })(LoginScreen);
