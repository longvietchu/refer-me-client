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
    Avatar,
    Link
} from '@material-ui/core';
import Styles from './Style';
import { observer } from 'mobx-react-lite';
import { networkStore } from '../networkStore';

const Invitation = observer(() => {
    const classes = Styles();

    if (networkStore.invitationList) {
        return (
            <Paper className={classes.root}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    style={{ padding: '8px 16px' }}>
                    {networkStore.invitationList.length > 0 ? (
                        <Typography variant="body1">Invitations</Typography>
                    ) : (
                        <Typography variant="body1">
                            No pending invitations
                        </Typography>
                    )}
                    <Button
                        style={{
                            textTransform: 'capitalize'
                        }}>
                        <Typography
                            component="span"
                            style={{ color: '#00000099' }}>
                            Manage
                        </Typography>
                    </Button>
                </Grid>

                <Divider />
                <List disablePadding>
                    {networkStore.invitationList.map((invitation, index) => (
                        <ListItem>
                            <ListItemAvatar>
                                <Link href="#" color="inherit" underline="none">
                                    <Avatar
                                        src={invitation.user_info.avatar}
                                        className={classes.ava}
                                    />
                                </Link>
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Link href="#" color="inherit">
                                        <Typography
                                            component="span"
                                            className={classes.name}>
                                            {invitation.user_info.name}
                                        </Typography>
                                    </Link>
                                }
                                secondary={
                                    <Link
                                        href="#"
                                        color="inherit"
                                        underline="none">
                                        <Typography
                                            component="span"
                                            className={classes.major}>
                                            {invitation.user_info.headline}
                                        </Typography>
                                    </Link>
                                }
                            />
                            <ListItemSecondaryAction>
                                <Button
                                    className={classes.btn_accept}
                                    onClick={() =>
                                        networkStore.acceptInvitation(
                                            invitation._id
                                        )
                                    }>
                                    Accept
                                </Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        );
    } else return null;
});

export default Invitation;
