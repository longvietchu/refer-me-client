import React from "react";
import {
  Paper,
  Typography,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
} from "@material-ui/core";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Messages = () => {
  return (
    <div>
      <Paper>
        <List dense={true} style={{ padding: "0" }}>
          <ListItem>
            <ListItemText
              style={{ margin: "0" }}
              primary={
                <div
                  style={{
                    width: "95%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Typography>Hiền Hie</Typography>
                </div>
              }
              secondary={
                <div
                  style={{
                    width: "95%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Typography variant="caption">Student at TMU</Typography>
                </div>
              }
            />
            <ListItemSecondaryAction>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>

        <Divider />
        
      </Paper>
    </div>
  );
};

export default Messages;
