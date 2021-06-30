import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import {
    Divider,
    Grid,
    Hidden,
    Paper,
    Typography,
    CardContent,
    Box,
    Button,
    IconButton,
    ButtonBase
} from '@material-ui/core';
import Header from '../../../../common/components/header/Header';

import {
    LocationOn,
    Work,
    WatchLater,
    Create,
    Description,
    Directions,
    Business,
    FiberManualRecord,
    Cancel
} from '@material-ui/icons';

import { useParams } from 'react-router';

import { observer } from 'mobx-react-lite';

import { jobStore } from '../../jobStore';
import { loginStore } from '../../../Login/loginStore';

import Styles from './Style';
import LoadingCard from '../../../../common/components/util/LoadingCard';
import { formatDateTimeDDMM } from '../../../../common/config/Function';

import ApplicantCard from './ApplicantCard/ApplicantCard';
import DeleteJob from './DeleteJob';
import CreateConnection from './ApplicantCard/CreateConnection';

const PostedJob = observer(() => {
    const classes = Styles();

    let { _id } = useParams<any>();

    useEffect(() => {
        jobStore.getOneJob(_id);
        jobStore.getAllApplicants(_id);
    }, []);

    if (jobStore.detailJob) {
        return (
            <Grid container className={classes.app}>
                <Helmet>
                    <title>Posted Jobs | Refer Me</title>
                </Helmet>
                <Grid item container className={classes.app__header}>
                    {/* Header */}
                    <Header />
                </Grid>
                <Grid item container className={classes.app__body}>
                    <Hidden smDown>
                        <Grid item className={classes.body__sidebar} xs>
                            <Paper className={classes.paper}>
                                <CardContent>
                                    <Box pb={3} className={classes.box}>
                                        {jobStore.detailJob.organization_info &&
                                        jobStore.detailJob.organization_info
                                            .avatar ? (
                                            <img
                                                alt="Jobs"
                                                src={
                                                    jobStore.detailJob
                                                        .organization_info
                                                        .avatar
                                                }
                                                style={{
                                                    width: 72
                                                }}
                                            />
                                        ) : (
                                            <img
                                                alt="Jobs"
                                                src="/images/no-avatar.png"
                                                style={{
                                                    width: 72
                                                }}
                                            />
                                        )}
                                        {/* <ButtonBase style={{ height: 22 }}>
                                            <Cancel />
                                        </ButtonBase> */}
                                        <IconButton
                                            size="small"
                                            style={{ height: 22 }}
                                            onClick={() =>
                                                // jobStore.deleteJob(_id)
                                                (jobStore.modalDeleteJob = true)
                                            }>
                                            <Cancel />
                                        </IconButton>
                                    </Box>

                                    <Typography
                                        color="textPrimary"
                                        variant="h5"
                                        className={classes.title}>
                                        {jobStore.detailJob.title}
                                    </Typography>
                                    {jobStore.detailJob.organization_info &&
                                    jobStore.detailJob.organization_info
                                        .name ? (
                                        <Typography
                                            variant="body1"
                                            className={classes.company}>
                                            {
                                                jobStore.detailJob
                                                    .organization_info.name
                                            }
                                        </Typography>
                                    ) : (
                                        <Typography
                                            variant="body1"
                                            className={classes.company}>
                                            {jobStore.detailJob.user_info.name}
                                        </Typography>
                                    )}

                                    <Typography
                                        gutterBottom
                                        variant="body1"
                                        className={classes.location}>
                                        {jobStore.detailJob.location}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        className={classes.time}>
                                        {formatDateTimeDDMM(
                                            jobStore.detailJob.created_at
                                        )}
                                    </Typography>
                                </CardContent>
                            </Paper>
                        </Grid>
                    </Hidden>

                    <Grid item className={classes.body__feed} xs={12} md={7}>
                        <Grid item className={classes.feed__posts}>
                            <Paper className={classes.paper}>
                                <div style={{ padding: 16 }}>
                                    <Typography variant="body1">
                                        All Aplicants
                                    </Typography>
                                </div>
                                <Divider />
                                {jobStore.applicantsList &&
                                jobStore.applicantsList.length > 0 ? (
                                    <div className={classes.box_applicant}>
                                        <Grid container spacing={5}>
                                            {jobStore.applicantsList ? (
                                                jobStore.applicantsList.map(
                                                    (applicant, index) => (
                                                        <Grid
                                                            item
                                                            key={applicant._id}
                                                            lg={3}
                                                            md={6}
                                                            xs={12}>
                                                            <ApplicantCard
                                                                applicant={
                                                                    applicant
                                                                }
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
                                ) : (
                                    <div>You don't have any candidates</div>
                                )}
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <DeleteJob />
                <CreateConnection />
            </Grid>
        );
    } else return <LoadingCard />;
});

export default PostedJob;
