import React from 'react';
import {
    Paper,
    List,
    ListSubheader,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemSecondaryAction,
    Typography
} from '@material-ui/core';
import Footer from '../../../../common/components/footer/Footer';
import { Group, Create } from '@material-ui/icons';
import Styles from './Style';
import { observer } from 'mobx-react-lite';
import { jobStore, JobTab } from '../../jobStore';

const SideBar = observer(() => {
    const classes = Styles();
    return (
        <div className={classes.sidebar}>
            <Paper className={classes.root}>
                <List
                    component="nav"
                    aria-labelledby="manage my jobs"
                    subheader={
                        <ListSubheader
                            component="span"
                            color="inherit"
                            id="manage my jobs">
                            Manage my jobs
                        </ListSubheader>
                    }>
                    <ListItem
                        selected={
                            jobStore.jobTab === JobTab.POSTED ? true : false
                        }
                        onClick={() => (jobStore.jobTab = JobTab.POSTED)}>
                        <ListItemIcon>
                            <Create />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    <Typography
                                        variant="body2"
                                        className={
                                            jobStore.jobTab === JobTab.POSTED
                                                ? classes.titleActive
                                                : classes.title
                                        }>
                                        Posted
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        {/* <ListItemSecondaryAction>
                            <Typography className={classes.amount}>
                                {jobStore.invitationList &&
                                    jobStore.invitationList.length}
                            </Typography>
                        </ListItemSecondaryAction> */}
                    </ListItem>

                    <ListItem
                        selected={
                            jobStore.jobTab === JobTab.APPLIED ? true : false
                        }
                        onClick={() => (jobStore.jobTab = JobTab.APPLIED)}>
                        <ListItemIcon>
                            <Group />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    <Typography
                                        variant="body2"
                                        className={
                                            jobStore.jobTab === JobTab.APPLIED
                                                ? classes.titleActive
                                                : classes.title
                                        }>
                                        Applied
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        {/* <ListItemSecondaryAction>
                            <Typography className={classes.amount}>
                                {jobStore.jobList && jobStore.jobList.length}
                            </Typography>
                        </ListItemSecondaryAction> */}
                    </ListItem>
                </List>
            </Paper>
            <div className={classes.sidebar__bottom}>
                <Footer />
            </div>
        </div>
    );
});

export default SideBar;
