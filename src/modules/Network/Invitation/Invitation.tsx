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
                </Grid>

                {networkStore.invitationList.length > 0 && <Divider />}
                {networkStore.invitationList.length > 0 && (
                    <List className={classes.invitationList}>
                        {networkStore.invitationList.map(
                            (invitation, index) => (
                                <ListItem className={classes.invitationItem}>
                                    <Link
                                        to={`/profile/${invitation.sender_id}`}
                                        className={classes.link}>
                                        <ListItemAvatar>
                                            <Avatar
                                                src={
                                                    invitation.user_info.avatar
                                                }
                                                className={classes.ava}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    className={classes.name}>
                                                    {invitation.user_info.name}
                                                </Typography>
                                            }
                                            secondary={
                                                <Typography
                                                    className={classes.major}>
                                                    {
                                                        invitation.user_info
                                                            .headline
                                                    }
                                                    <p
                                                        style={{
                                                            color: '#333'
                                                        }}>
                                                        {invitation.greeting}
                                                    </p>
                                                </Typography>
                                            }
                                        />
                                    </Link>
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
                            )
                        )}
                    </List>
                )}
            </Paper>
        );
    } else return null;
});

export default Invitation;
