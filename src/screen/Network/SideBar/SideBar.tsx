import React from "react";
import {
  Paper,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
} from "@material-ui/core";

import Footer from "../../../components/footer/Footer";

import GroupIcon from "@material-ui/icons/Group";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import PagesOutlinedIcon from "@material-ui/icons/PagesOutlined";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Styles from "./Style";

const network1 = [
  { id: "0", icon: <GroupIcon />, title: "Connections", amount: "10" },
];

const network2 = [
  {
    id: "1",
    icon: <PermContactCalendarOutlinedIcon />,
    title: "Contacts",
    amount: "160",
  },
  {
    id: "2",
    icon: <PeopleOutlineIcon />,
    title: "People | Follow",
    amount: "10",
  },
  { id: "3", icon: <GroupIcon />, title: "Groups", amount: "" },
  {
    id: "4",
    icon: <EventAvailableOutlinedIcon />,
    title: "Events",
    amount: "",
  },
  { id: "5", icon: <PagesOutlinedIcon />, title: "pages", amount: "6" },
  {
    id: "6",
    icon: <MailOutlineOutlinedIcon />,
    title: "Newsletters",
    amount: "",
  },
  { id: "7", icon: <LocalOfferOutlinedIcon />, title: "Hashtags", amount: "" },
];

const SideBar = () => {
  const classes = Styles();
  const [expand, setExpand] = React.useState(true);

  return (
    <div>
      <Paper className={classes.root}>
        <List
          component="nav"
          aria-labelledby="manage my network"
          subheader={
            <ListSubheader
              component="span"
              color="inherit"
              id="manage my network"
            >
              Manage my network
            </ListSubheader>
          }
        >
          {network1.map((item) => (
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography variant="body2" className={classes.title}>
                      {item.title}
                    </Typography>
                  </React.Fragment>
                }
              />
              <ListItemSecondaryAction>
                <Typography className={classes.amount}>
                  {item.amount}
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
          {expand &&
            network2.map((item) => (
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography variant="body2" className={classes.title}>
                        {item.title}
                      </Typography>
                    </React.Fragment>
                  }
                />
                <ListItemSecondaryAction>
                  <Typography className={classes.amount}>
                    {item.amount}
                  </Typography>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
        </List>
        <div className={classes.expand} onClick={() => setExpand(!expand)}>
          <Typography component="h4">
            {expand ? "Show less" : "Show more"}
          </Typography>
          <ExpandMoreIcon
            style={{ transform: expand ? "rotate(180deg)" : "" }}
          />
        </div>
      </Paper>
      <div className={classes.sidebar__bottom}>
        <Footer />
      </div>
    </div>
  );
};

export default SideBar;
