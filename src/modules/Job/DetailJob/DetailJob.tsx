import {
    Box,
    Button,
    CardContent,
    Grid,
    Hidden,
    Paper,
    Typography
} from '@material-ui/core';
import {
    Business,
    Create,
    Description,
    Directions,
    FiberManualRecord,
    LocationOn,
    PeopleAlt,
    WatchLater,
    Work
} from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory, useParams } from 'react-router';
import Header from '../../../common/components/header/Header';
import LoadingHeader from '../../../common/components/util/LoadingHeader';
import { formatDateTimeDDMM } from '../../../common/config/Function';
import { loginStore } from '../../Login/loginStore';
import { jobStore } from '../jobStore';
import ApplyJob from './ApplyJob';
import Styles from './Style';
import MDEditor from '@uiw/react-md-editor';

const DetailJob = observer(() => {
    const classes = Styles();

    let { _id } = useParams<any>();

    useEffect(() => {
        jobStore.getOneJob(_id);
        jobStore.isApplied(_id);
        return () => {
            jobStore.detailJob = undefined;
        };
    }, []);

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
                    <title>Job | Refer Me</title>
                </Helmet>
                <Grid item container className={classes.app__header}>
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
                                        className={classes.company}>
                                        {jobStore.detailJob.location}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        className={classes.company}>
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
                                    <div className={classes.jobHeader}>
                                        <Typography
                                            variant="body1"
                                            className={classes.title}>
                                            {jobStore.detailJob.title}
                                        </Typography>
                                        {loginStore.userInfo &&
                                            (loginStore.userInfo.id ===
                                            jobStore.detailJob.user_info
                                                ._id ? null : jobStore.isAppliedJob ? (
                                                <Button
                                                    className={classes.btn}
                                                    onClick={() =>
                                                        onClickUnApplyJob()
                                                    }>
                                                    {jobStore.isLoading
                                                        ? 'Cancelling...'
                                                        : 'Cancel'}
                                                </Button>
                                            ) : (
                                                <Button
                                                    className={classes.btn}
                                                    onClick={() => {
                                                        jobStore.applyJobModal =
                                                            true;
                                                    }}>
                                                    Apply
                                                    <Directions />
                                                </Button>
                                            ))}
                                    </div>

                                    {jobStore.detailJob.organization_info ? (
                                        <div>
                                            <Typography
                                                className={classes.company}>
                                                <Business
                                                    className={classes.icon}
                                                />
                                                {
                                                    jobStore.detailJob
                                                        .organization_info.name
                                                }{' '}
                                                <FiberManualRecord
                                                    style={{
                                                        fontSize: 6,
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
                                            <Typography
                                                className={classes.company}>
                                                <PeopleAlt
                                                    className={classes.icon}
                                                />
                                                {
                                                    jobStore.detailJob
                                                        .organization_info
                                                        .company_size
                                                }{' '}
                                                employees
                                            </Typography>
                                        </div>
                                    ) : (
                                        <Typography className={classes.company}>
                                            <Create className={classes.icon} />
                                            Posted by{' '}
                                            {jobStore.detailJob.user_info.name}
                                        </Typography>
                                    )}

                                    <Typography className={classes.company}>
                                        <LocationOn className={classes.icon} />
                                        {jobStore.detailJob.location}
                                    </Typography>
                                    <Typography className={classes.company}>
                                        <Work className={classes.icon} />
                                        {jobStore.detailJob.employment_type}
                                    </Typography>
                                    <Typography className={classes.company}>
                                        <WatchLater className={classes.icon} />
                                        Opened at:{' '}
                                        {formatDateTimeDDMM(
                                            jobStore.detailJob.created_at
                                        )}
                                    </Typography>
                                    <Typography className={classes.company}>
                                        <Description className={classes.icon} />
                                        Description:
                                    </Typography>
                                    <MDEditor.Markdown
                                        source={jobStore.detailJob.description}
                                    />
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
