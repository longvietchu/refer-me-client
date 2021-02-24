import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Popover,
  Typography,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import { useHistory } from "react-router-dom";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import KEY from "../../assets/AsynStorage";
import { logout } from "../../apis/Functions/users";

export default function SimplePopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let history = useHistory();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const onClickLogout = async () => {
    const res = await logout({ api_name: "api.v1.employee.logout" });
    console.log("res-------", res);
    if (res.data.code == 200) {
      localStorage.removeItem(KEY.API_TOKEN);
      localStorage.removeItem("company");
      history.push("/");
    }
  };

  return (
    <div>
      <Button aria-describedby={id} color="primary" onClick={handleClick}>
        <Avatar alt="Remy Sharp" src="/asset/avatar.jpg" />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <AutorenewIcon />
            </ListItemIcon>
            <ListItemText primary="Đổi mật khẩu" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Cài đặt" />
          </ListItem>
          <ListItem button onClick={onClickLogout}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Đăng xuất" style={{ color: "red" }} />
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}
