import React from 'react';
import {
    Paper,
    Grid,
    Typography,
    Button,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListItemSecondaryAction,
    Avatar
} from '@material-ui/core';
import Styles from './Style';
import { observer } from 'mobx-react-lite';
import { networkStore } from '../networkStore';
import { Link } from 'react-router-dom';

const Connection = observer(() => {
    const classes = Styles();

    if (networkStore.networkList) {
        return (
            <Paper className={classes.root}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    style={{ padding: '8px 16px' }}>
                    {networkStore.networkList.length > 0 ? (
                        <Typography variant="body1">
                            {networkStore.networkList.length} Connections
                        </Typography>
                    ) : (
                        <Typography variant="body1">No Connections</Typography>
                    )}
                </Grid>
                {networkStore.networkList.length > 0 && <Divider />}
                {networkStore.networkList.length > 0 && (
                    <List className={classes.invitationList}>
                        {networkStore.networkList.map((network, index) => (
                            <ListItem className={classes.invitationItem}>
                                <Link
                                    to={`/profile/${network.people_info[0]._id}`}
                                    className={classes.link}>
                                    <ListItemAvatar>
                                        <Avatar
                                            src={network.people_info[0].avatar}
                                            className={classes.ava}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                className={classes.name}>
                                                {network.people_info[0].name}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography
                                                className={classes.major}>
                                                {
                                                    network.people_info[0]
                                                        .headline
                                                }
                                            </Typography>
                                        }
                                    />
                                </Link>
                                <ListItemSecondaryAction>
                                    <Button
                                        className={classes.btn_accept}
                                        onClick={() => {}}>
                                        Message
                                    </Button>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                )}
            </Paper>
        );
    } else return null;
});

export default Connection;
