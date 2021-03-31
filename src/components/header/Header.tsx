import Logo from "../../assets/images/logo.png";
import { Paper, Avatar, Tooltip } from "@material-ui/core";
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
import MenuItem from "./menuItem/MenuItem";

const Header = () => {
  const classes = Style();

  //   const { photoURL } = useSelector((state) => state.user); this code to pick photo user from redux

  const items = [
    { Icon: <HomeIcon />, title: "Home", arrow: false },
    { Icon: <GroupIcon />, title: "My Network", arrow: false },
    { Icon: <WorkIcon />, title: "Jobs", arrow: false },
    { Icon: <TelegramIcon />, title: "Messaging", arrow: false },
    { Icon: <NotificationsIcon />, title: "Notifications", arrow: false },
    {
      Icon: (
        <Tooltip title="Sign-Out" arrow>
          <Avatar className={classes.avatar}>TN</Avatar>
        </Tooltip>
      ),
      title: "Me",
      arrow: true,
      onClick: () => console.log("you are log out"),
    },
    { Icon: <AppsIcon />, title: "Works", arrow: true },
  ];

  return (
    <Paper elevation={0} className={classes.header}>
      <div className={classes.header__container}>
        <div className={classes.header__logo}>
          <img src={Logo} alt="logo" />
          <div className={classes.search}>
            <SearchIcon />
            <input placeholder="Search" />
          </div>
          <Avatar className={classes.avatar}>TN</Avatar>
        </div>
        <div className={classes.header__nav}>
          {items.map(({ Icon, title, arrow, onClick }, i) => (
            <MenuItem
              key={i}
              Icon={Icon}
              title={title}
              arrow={arrow}
              onClick={onClick}
            />
          ))}
          <MenuItem
            key={"mode"}
            Icon={<BrightnessHighIcon />}
            title={"Theme"}
            onClick={() => console.log("Change theme")}
          />
        </div>
        <Paper className={classes.header__bottom__nav}>
          <HomeIcon />
          <GroupIcon />
          <AddBoxIcon />
          <BrightnessHighIcon onClick={() => console.log("Change theme")} />
          <ExitToAppIcon onClick={() => console.log("You are log out")} />
        </Paper>
      </div>
    </Paper>
  );
};

export default Header;
