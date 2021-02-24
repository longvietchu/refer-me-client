import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  ListItemIcon,
  Container,
  Toolbar,
  AppBar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
  Link,
  Badge,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Colors from "../../assets/Color";
import Popper from "../Popup/Popper";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    // "&:focus": {
    //   backgroundColor: theme.palette.primary.main,
    //   "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
    //     color: theme.palette.common.white,
    //   },
    // },
  },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    ...theme.mixins.toolbar,
    backgroundColor: "white",
    color: "black",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "blue",
    paddingTop: 5,
    paddingBottom: 5,
  },
  item: {
    float: "left",
    paddingLeft: 10,
    paddingRight: 10,
    borderRight: "1px solid",
  },
  itemLast: {
    float: "left",
    paddingLeft: 10,
    paddingRight: 10,
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  customLink: {
    color: Colors.main,
  },
  customLinkActive: {
    color: "green",
  },
}));

const ListLinks = [
  { name: "Trang chủ", page: "/home" },
  { name: "Cuộc họp", page: "/meeting" },
  { name: "Seminar", page: "/seminar" },
  { name: "Khách đăng ký", page: "/visiter" },
  // { name: "Báo cáo", page: "/report" },
  { name: "Hệ thống", page: "/setting" },
];

export default function ButtonAppBar() {
  const [pageActive, setPageActive] = useState("/home");
  const [name, setName] = useState("");
  let history = useHistory();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setPageActive(window.location.href.substring(21));
  });

  useEffect(() => {
    let info = JSON.parse(localStorage.getItem("user"));
    setName(info.name);
  }, []);

  return (
    <AppBar className={classes.appbar} position="static">
      <Container>
        <Toolbar>
          <Container>
            {ListLinks.map((e, index) => {
              if (index != ListLinks.length - 1)
                return (
                  <div className={classes.item}>
                    <Link
                      aria-current={"page"}
                      className={
                        e.page == pageActive
                          ? classes.customLinkActive
                          : classes.customLink
                      }
                      href={e.page}
                    >
                      {e.name}
                    </Link>
                  </div>
                );
              else
                return (
                  <div className={classes.itemLast}>
                    <Link
                      aria-current={"page"}
                      className={
                        e.page == pageActive
                          ? classes.customLinkActive
                          : classes.customLink
                      }
                      onClick={handleClick}
                      style={{ cursor: "pointer" }}
                    >
                      {e.name}
                    </Link>
                  </div>
                );
            })}
          </Container>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{ marginLeft: "60px", marginTop: "5px" }}
          >
            <StyledMenuItem>
              <ListItemText
                primary="QL Văn phòng"
                onClick={() => {
                  history.push("/systemoffice");
                }}
              />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText
                primary="DM Nhóm quyền"
                onClick={() => {
                  history.push("/systemrole");
                }}
              />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText
                primary="DM Phòng/Ban"
                onClick={() => {
                  history.push("/systemdepartment");
                }}
              />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText
                primary="DM Phòng họp"
                onClick={() => {
                  history.push("/systemlistroom");
                }}
              />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText
                primary="DM Loại cuộc họp"
                onClick={() => {
                  history.push("/systemtypemeeting");
                }}
              />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText
                primary="DM Mức độ quan trọng"
                onClick={() => {
                  history.push("/systemlevelmeeting");
                }}
              />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText
                primary="DM Tùy chọn"
                onClick={() => {
                  history.push("/systemoptionmeeting");
                }}
              />
            </StyledMenuItem>
          </StyledMenu>
          <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </MenuItem>
          <ListItemIcon
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Popper />
            <div>
              <Typography
                style={{ textAlign: "center", color: "black" }}
                variant="caption"
                noWrap
              >
                {name}
              </Typography>
            </div>
          </ListItemIcon>
          {/* <Avatar alt="Remy Sharp" className={classes.small} src="/static/images/avatar/1.jpg" /> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
