import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import {
    Divider,
    Grid,
    Hidden,
    Paper,
    Typography,
    Card,
    CardContent,
    CardActionArea,
    Box,
    Button,
    IconButton
} from '@material-ui/core';
import Header from '../../../common/components/header/Header';

import {
    LocationOn,
    Work,
    WatchLater,
    Create,
    Description,
    Directions,
    Business,
    FiberManualRecord
} from '@material-ui/icons';

import { useHistory, useParams } from 'react-router';

import { observer } from 'mobx-react-lite';

import { jobStore } from '../jobStore';
import { loginStore } from '../../Login/loginStore';

import Styles from './Style';
import LoadingCard from '../../../common/components/util/LoadingCard';
import LoadingHeader from '../../../common/components/util/LoadingHeader';
import { formatDateTimeDDMM } from '../../../common/config/Function';
import ApplyJob from './ApplyJob';

const DetailJob = observer(() => {
    const classes = Styles();

    let { _id } = useParams<any>();

    useEffect(() => {
        jobStore.getOneJob(_id);
        jobStore.isApplied(_id);
    }, []);

    let history = useHistory();

    const onClickUnApplyJob = async () => {
        if (jobStore.detailJob) {
            const isUnApplySuccess = await jobStore.unApplyJob(
                jobStore.detailJob._id
            );
            if (isUnApplySuccess !== null) {
                // history.push(`/profile/${loginStore.userInfo.id}`);
                window.location.reload();
            }
        }
    };

    if (jobStore.detailJob) {
        return (
            <Grid container className={classes.app}>
                <Helmet>
                    <title>Jobs | RefMe</title>
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
                                                    height: 72,
                                                    width: 72
                                                }}
                                            />
                                        ) : (
                                            <img
                                                alt="Jobs"
                                                src="/images/no-avatar.png"
                                                style={{
                                                    height: 72,
                                                    width: 72
                                                }}
                                            />
                                        )}
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
                                    <Typography
                                        variant="body1"
                                        className={classes.title}>
                                        {jobStore.detailJob.title}
                                    </Typography>

                                    {jobStore.detailJob.organization_info ? (
                                        <div>
                                            <Typography
                                                className={classes.company}>
                                                <Create
                                                    className={classes.icon}
                                                />
                                                Posted by{' '}
                                                {
                                                    jobStore.detailJob
                                                        .organization_info.name
                                                }
                                            </Typography>
                                            <Typography
                                                className={classes.company}>
                                                <Business
                                                    className={classes.icon}
                                                />
                                                {
                                                    jobStore.detailJob
                                                        .organization_info
                                                        .company_size
                                                }{' '}
                                                employees
                                                <FiberManualRecord
                                                    style={{
                                                        fontSize: '6px',
                                                        alignSelf: 'center',
                                                        margin: '2px 4px'
                                                    }}
                                                />
                                                {
                                                    jobStore.detailJob
                                                        .organization_info
                                                        .industry
                                                }
                                            </Typography>
                                        </div>
                                    ) : (
                                        <Typography className={classes.company}>
                                            <Create className={classes.icon} />
                                            Posted by{' '}
                                            {jobStore.detailJob.user_info.name}
                                        </Typography>
                                    )}

                                    <Typography className={classes.location}>
                                        <LocationOn className={classes.icon} />
                                        {jobStore.detailJob.location}
                                    </Typography>
                                    <Typography
                                        className={classes.employement_type}>
                                        <Work className={classes.icon} />
                                        {jobStore.detailJob.employment_type}
                                    </Typography>
                                    <Typography className={classes.time}>
                                        <WatchLater className={classes.icon} />
                                        posted at:{' '}
                                        {formatDateTimeDDMM(
                                            jobStore.detailJob.created_at
                                        )}
                                    </Typography>
                                    <Typography>
                                        <Description className={classes.icon} />
                                        Job description:{' '}
                                        <Typography style={{ margin: 8 }}>
                                            {jobStore.detailJob.description}
                                        </Typography>
                                    </Typography>

                                    {loginStore.userInfo &&
                                    loginStore.userInfo.id ===
                                        jobStore.detailJob.user_info
                                            ._id ? null : jobStore.isAppliedJob ? (
                                        <IconButton
                                            className={classes.btn}
                                            onClick={() => onClickUnApplyJob()}>
                                            <Typography>
                                                {jobStore.isLoading
                                                    ? 'Cancelling...'
                                                    : 'Cancel'}
                                            </Typography>
                                        </IconButton>
                                    ) : (
                                        <IconButton
                                            className={classes.btn}
                                            onClick={() => {
                                                jobStore.applyJobModal = true;
                                            }}>
                                            <Typography>Apply</Typography>
                                            <Directions />
                                        </IconButton>
                                    )}
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                    <ApplyJob />
                </Grid>
            </Grid>
        );
    } else return <LoadingHeader />;
});

export default DetailJob;
