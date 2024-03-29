import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import { Divider, Grid, Hidden, Paper, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';
import Header from '../../../common/components/header/Header';
import LoadingCard from '../../../common/components/util/LoadingCard';
import ApplyJob from '../DetailJob/ApplyJob';

import MyJobCard from './MyJobCard/MyJobCard';
import { jobStore, JobTab } from '../jobStore';
import { loginStore } from '../../Login/loginStore';
import SideBar from './SideBar/SideBar';
import Styles from './Style';

const MyJob = observer(() => {
    const classes = Styles();

    useEffect(() => {
        if (loginStore.userInfo) {
            jobStore.getJobOfUser(loginStore.userInfo.id);
            jobStore.getApplyJob();
        }
    }, []);

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
                                        {jobStore.myJobList ? (
                                            jobStore.myJobList.map(
                                                (job, index) => (
                                                    <Grid
                                                        item
                                                        key={job._id}
                                                        lg={3}
                                                        md={6}
                                                        xs={12}>
                                                        <MyJobCard
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
                                        {jobStore.myApplyJobList ? (
                                            jobStore.myApplyJobList.map(
                                                (job, index) => (
                                                    <Grid
                                                        item
                                                        key={job._id}
                                                        lg={3}
                                                        md={6}
                                                        xs={12}>
                                                        <MyJobCard
                                                            job={job.job_info}
                                                        />
                                                    </Grid>
                                                )

                                                // console.log('jobbbb', job)
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
