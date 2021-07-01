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
import { jobStore } from '../../../jobStore';
import { Link, useHistory } from 'react-router-dom';
import { messageStore } from '../../../../Messaging/messageStore';

const Applicant = observer(() => {
    const classes = Styles();
    let history = useHistory();

    if (jobStore.applicantsList) {
        return (
            <Paper className={classes.root}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    style={{ padding: '8px 16px' }}>
                    {jobStore.applicantsList.length > 0 ? (
                        <Typography variant="body1">
                            {jobStore.applicantsList.length} Applicants
                        </Typography>
                    ) : (
                        <Typography variant="body1">No Applicants</Typography>
                    )}
                </Grid>
                {jobStore.applicantsList.length > 0 && <Divider />}
                {jobStore.applicantsList.length > 0 && (
                    <List className={classes.invitationList}>
                        {jobStore.applicantsList.map((applicant, index) => (
                            <ListItem className={classes.invitationItem}>
                                <Link
                                    to={`/profile/${applicant.user_info._id}`}
                                    className={classes.link}>
                                    <ListItemAvatar>
                                        <Avatar
                                            src={applicant.user_info.avatar}
                                            className={classes.ava}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                className={classes.name}>
                                                {applicant.user_info.name}
                                            </Typography>
                                        }
                                        secondary={
                                            <div>
                                                <Typography
                                                    className={classes.major}>
                                                    {
                                                        applicant.user_info
                                                            .headline
                                                    }
                                                    b
                                                </Typography>
                                                <Typography
                                                    className={classes.major}>
                                                    {applicant.greeting}
                                                </Typography>
                                            </div>
                                        }
                                    />
                                </Link>
                                <ListItemSecondaryAction>
                                    <Button
                                        className={classes.btn_accept}
                                        onClick={async () => {
                                            const createStatus =
                                                await messageStore.createRoom(
                                                    applicant.user_info._id
                                                );
                                            if (createStatus) {
                                                history.push('/messaging');
                                            }
                                        }}>
                                        {messageStore.isLoading
                                            ? 'Messaging..'
                                            : 'Message'}
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

export default Applicant;
