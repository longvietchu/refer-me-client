import { Divider, Grid, Hidden, Paper, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../../common/components/header/Header';
import LoadingCard from '../../../common/components/util/LoadingCard';
import ApplyJob from '../DetailJob/ApplyJob';
// import ConnectCard from './ConnectCard/ConnectCard';
// import CreateConnection from './ConnectCard/CreateConnection';
// import Connection from './Connection/Connection';
import JobCard from '../JobCard/JobCard';
import { jobStore, JobTab } from '../jobStore';
import SideBar from './SideBar/SideBar';
import Styles from './Style';

const MyJob = observer(() => {
    const classes = Styles();
    return (
        <Grid container className={classes.app}>
            <Helmet>
                <title>My Jobs | Refer Me</title>
            </Helmet>
            <Grid item container className={classes.app__header}>
                <Header />
            </Grid>
            <Grid item container className={classes.app__body}>
                <Hidden smDown>
                    <Grid item className={classes.body__sidebar} xs>
                        <SideBar />
                    </Grid>
                </Hidden>
                {jobStore.jobTab === JobTab.POSTED ? (
                    <Grid item className={classes.body__feed} xs={12} md={7}>
                        <Grid item className={classes.feed__posts}>
                            <Paper className={classes.paper}>
                                <div style={{ padding: 16 }}>
                                    <Typography variant="body1">
                                        Posted Jobs
                                    </Typography>
                                </div>
                                <Divider />
                                <div className={classes.box}>
                                    <Grid container spacing={5}>
                                        {jobStore.jobList ? (
                                            jobStore.jobList.map(
                                                (job, index) => (
                                                    <Grid
                                                        item
                                                        key={job._id}
                                                        lg={3}
                                                        md={6}
                                                        xs={12}>
                                                        <JobCard
                                                            job={job}
                                                            // onSave={onSave}
                                                        />
                                                    </Grid>
                                                )
                                            )
                                        ) : (
                                            <LoadingCard />
                                        )}
                                    </Grid>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid item className={classes.body__feed} xs={12} md={7}>
                        <Grid item className={classes.feed__form}>
                            <Paper className={classes.paper}>
                                <div style={{ padding: 16 }}>
                                    <Typography variant="body1">
                                        Applied Jobs
                                    </Typography>
                                </div>
                                <Divider />
                                <div className={classes.box}>
                                    <Grid container spacing={5}>
                                        {jobStore.jobList ? (
                                            jobStore.jobList.map(
                                                (job, index) => (
                                                    <Grid
                                                        item
                                                        key={job._id}
                                                        lg={3}
                                                        md={6}
                                                        xs={12}>
                                                        <JobCard
                                                            job={job}
                                                            // onSave={onSave}
                                                        />
                                                    </Grid>
                                                )
                                            )
                                        ) : (
                                            <LoadingCard />
                                        )}
                                    </Grid>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                )}
                <ApplyJob />
            </Grid>
        </Grid>
    );
});

export default MyJob;
