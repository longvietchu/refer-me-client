import React from "react";
import Logo from "../../assets/images/logo.png";
import {
  Paper,
  Avatar,
  Popover,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Button,
  Grid,
  Link,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import WorkIcon from "@material-ui/icons/Work";
import TelegramIcon from "@material-ui/icons/Telegram";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AppsIcon from "@material-ui/icons/Apps";

import Style from "./Style";
import MenuItems from "./menuItem/MenuItem";

import { useHistory } from "react-router-dom";

const Header = () => {
  const classes = Style();
  const [anchorEl, setAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);
  let history = useHistory();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const SignOut = () => {
    history.push("./");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //   const { photoURL } = useSelector((state) => state.user); this code to pick photo user from redux

  const items = [
    {
      Icon: <HomeIcon />,
      title: "Home",
      arrow: false,
      onClick: () => history.push("/home"),
    },
    {
      Icon: <GroupIcon />,
      title: "My Network",
      arrow: false,
      onClick: () => history.push("/mynetwork"),
    },
    {
      Icon: <WorkIcon />,
      title: "Jobs",
      arrow: false,
      onClick: () => history.push("/jobs"),
    },
    {
      Icon: <TelegramIcon />,
      title: "Messaging",
      arrow: false,
      onClick: () => history.push("/messaging"),
    },
    {
      Icon: <NotificationsIcon />,
      title: "Notifications",
      arrow: false,
      onClick: () => history.push("/notifications"),
    },
    {
      Icon: (
        <Avatar
          className={classes.avatar}
          src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/121083834_1699921320175513_6807580545774400741_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hfVRPKiVyaAAX-_QYhQ&_nc_ht=scontent.fhan4-1.fna&oh=fb6798aedb06700257a6b62a9815e721&oe=608BA140"
        />
      ),
      title: "Me",
      arrow: true,
      onClick: handleClick,
    },
    { Icon: <AppsIcon />, title: "Works", arrow: true },
  ];

  const bottomItems = [
    { Icon: <HomeIcon />, title: "Home", arrow: false },
    { Icon: <GroupIcon />, title: "My Network", arrow: false },
    { Icon: <AddBoxIcon />, title: "Add Post", arrow: false },
    {
      Icon: <NotificationsIcon />,
      title: "Notifications",
      arrow: false,
      onClick: () => history.push("/notifications"),
    },
    { Icon: <WorkIcon />, title: "Jobs", arrow: false },
  ];

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.header}>
        <div className={classes.header__container}>
          <div className={classes.header__logo}>
            <img src={Logo} alt="logo" onClick={() => history.push("/home")} />
            <div className={classes.search}>
              <SearchIcon />
              <input placeholder="Search" />
            </div>
            <Avatar
              className={classes.avatar}
              src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/121083834_1699921320175513_6807580545774400741_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hfVRPKiVyaAAX-_QYhQ&_nc_ht=scontent.fhan4-1.fna&oh=fb6798aedb06700257a6b62a9815e721&oe=608BA140"
            />
          </div>
          <div className={classes.header__nav}>
            {items.map(({ Icon, title, arrow, onClick }, i) => (
              <MenuItems
                key={i}
                Icon={Icon}
                title={title}
                arrow={arrow}
                onClick={onClick}
              />
            ))}
            <MenuItems
              key={"mode"}
              Icon={<BrightnessHighIcon />}
              title={"Theme"}
              onClick={() => console.log("Change theme")}
            />
          </div>
          <Paper className={classes.header__bottom__nav}>
            {bottomItems.map(({ Icon, title, arrow, onClick }, i) => (
              <MenuItems
                key={i}
                Icon={Icon}
                title={title}
                arrow={arrow}
                onClick={onClick}
              />
            ))}
          </Paper>
        </div>
      </Paper>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        className={classes.menu}
        PaperProps={{
          style: {
            width: "20%",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <List style={{ padding: 0 }}>
          <ListItem alignItems="flex-start" button>
            <ListItemAvatar style={{ minWidth: "50px" }}>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography className={classes.name}>Tung Nguyen</Typography>
              }
              secondary={
                <Typography className={classes.headline}>
                  Internship Trainee at Data Communication of VietNam
                </Typography>
              }
            />
          </ListItem>
        </List>

        <Grid container justify="center">
          <Button className={classes.btn}>View Profile</Button>
        </Grid>

        <Divider style={{ marginTop: "10px" }} />

        <Grid container direction="column" style={{ padding: 12 }}>
          <Typography style={{ fontWeight: "bold" }}>Account</Typography>
          <Link href="#" style={{ color: "#808080", lineHeight: "20px" }}>
            Setting
          </Link>
          <Link href="#" style={{ color: "#808080", lineHeight: "20px" }}>
            Help
          </Link>
        </Grid>

        <Divider />

        <Grid container direction="column" style={{ padding: 12 }}>
          <Typography style={{ fontWeight: "bold" }}>Manage</Typography>
          <Link href="#" style={{ color: "#808080", lineHeight: "20px" }}>
            Post & Activity
          </Link>
          <Link href="#" style={{ color: "#808080", lineHeight: "20px" }}>
            Job Posting
          </Link>
        </Grid>

        <Divider style={{ marginBottom: "10px" }} />

        <Grid container justify="center" style={{ marginBottom: 10 }}>
          <Button className={classes.btn} onClick={SignOut}>
            sign out
          </Button>
        </Grid>
      </Popover>
    </div>
  );
};

export default Header;
