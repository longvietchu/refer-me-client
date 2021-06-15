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

const Invitation = () => {
    const classes = Styles();
    const [invite, setInvite] = React.useState(null);

    return (
        <Paper className={classes.root}>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                style={{ padding: '8px 16px' }}>
                {invite ? (
                    <Typography variant="body1">
                        No pending invitations
                    </Typography>
                ) : (
                    <Typography variant="body1">Invitations</Typography>
                )}
                <Button
                    style={{
                        textTransform: 'capitalize'
                    }}>
                    <Typography component="span" style={{ color: '#00000099' }}>
                        Manage
                    </Typography>
                </Button>
            </Grid>

            <Divider />

            {invite ? null : (
                <List disablePadding>
                    <ListItem>
                        <ListItemAvatar>
                            <Link href="#" color="inherit" underline="none">
                                <Avatar className={classes.ava} />
                            </Link>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Link href="#" color="inherit">
                                    <Typography
                                        component="span"
                                        className={classes.name}>
                                        tung nguyen
                                    </Typography>
                                </Link>
                            }
                            secondary={
                                <Link href="#" color="inherit" underline="none">
                                    <Typography
                                        component="span"
                                        className={classes.major}>
                                        programming
                                    </Typography>
                                </Link>
                            }
                        />
                        <ListItemSecondaryAction>
                            <Button className={classes.btn_ignore}>
                                Ignore
                            </Button>
                            <Button className={classes.btn_accept}>
                                Accept
                            </Button>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            )}
        </Paper>
    );
};

export default Invitation;
