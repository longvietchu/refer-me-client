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

import DeleteJob from './DeleteJob';
import Applicant from './Applicant/Applicant';

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
                                        <IconButton
                                            size="small"
                                            style={{ height: 22 }}
                                            onClick={() =>
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
                            <Applicant />
                        </Grid>
                    </Grid>
                </Grid>
                <DeleteJob />
            </Grid>
        );
    } else return <LoadingCard />;
});

export default PostedJob;
