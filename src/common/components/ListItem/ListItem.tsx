import React, { createRef, Fragment } from "react";

import {
  Popover,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CancelIcon from "@material-ui/icons/Cancel";
import NotificationsOffIcon from "@material-ui/icons/NotificationsOff";

import Styles from "./Style";
interface props {
  open: boolean;
  onClose: () => void;
  anchorEl: HTMLButtonElement | null;
}

const PopupItems = (props: props) => {
  const classes = Styles();
  const wrapper = createRef();

  console.log("props", props);

  return (
    <Popover
      ref={wrapper}
      className={classes.popover}
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <List className={classes.root}>
        <ListItem button>
          <ListItemAvatar className={classes.listAva}>
            <DeleteIcon />
          </ListItemAvatar>
          <ListItemText
            primary="Delete"
            secondary={
              <Fragment>
                <Typography component="span" variant="body2">
                  Delete this notifcation
                </Typography>
              </Fragment>
            }
          />
        </ListItem>

        <ListItem button>
          <ListItemAvatar className={classes.listAva}>
            <CancelIcon />
          </ListItemAvatar>
          <ListItemText
            primary="Mute Long Chu"
            secondary={
              <Fragment>
                <Typography component="span" variant="body2">
                  Stop seeing Long's updates
                </Typography>
              </Fragment>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemAvatar className={classes.listAva}>
            <NotificationsOffIcon />
          </ListItemAvatar>
          <ListItemText
            primary="Turn off"
            secondary={
              <Fragment>
                <Typography component="span" variant="body2">
                  Stop receiving notifications like this
                </Typography>
              </Fragment>
            }
          />
        </ListItem>
      </List>
    </Popover>
  );
};

export default PopupItems;
