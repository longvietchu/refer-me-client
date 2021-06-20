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
    Button
} from '@material-ui/core';
import Header from '../../../common/components/header/Header';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WorkIcon from '@material-ui/icons/Work';

import { useParams } from 'react-router';

import { observer } from 'mobx-react-lite';

import { jobStore } from '../jobStore';

import Styles from './Style';
import LoadingCard from '../../../common/components/util/LoadingCard';
import { formatDateTimeDDMM } from '../../../common/config/Function';

const DetailJob = observer(() => {
    const classes = Styles();

    let { _id } = useParams<any>();

    useEffect(() => {
        jobStore.getOneJob(_id);
    }, [_id]);

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
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: '20px'
                                        }}>
                                        {jobStore.detailJob.title}
                                    </Typography>

                                    {jobStore.detailJob.organization_info &&
                                    jobStore.detailJob.organization_info
                                        .name ? (
                                        <Typography
                                            variant="body1"
                                            className={classes.company}>
                                            Posted by{' '}
                                            {
                                                jobStore.detailJob
                                                    .organization_info.name
                                            }
                                        </Typography>
                                    ) : (
                                        <Typography
                                            variant="body1"
                                            className={classes.company}>
                                            Posted by{' '}
                                            {jobStore.detailJob.user_info.name}
                                        </Typography>
                                    )}
                                    <Typography variant="body1">
                                        <LocationOnIcon
                                            style={{
                                                fontSize: '16px',
                                                marginRight: 6
                                            }}
                                        />
                                        {jobStore.detailJob.location}
                                    </Typography>
                                    <Typography variant="body1">
                                        <WorkIcon
                                            style={{
                                                fontSize: '16px',
                                                marginRight: 6
                                            }}
                                        />
                                        {jobStore.detailJob.employment_type}
                                    </Typography>
                                    <Typography variant="body1">
                                        posted at:{' '}
                                        {formatDateTimeDDMM(
                                            jobStore.detailJob.created_at
                                        )}
                                    </Typography>
                                    <Typography>
                                        Job description:{' '}
                                        <Typography style={{ margin: 8 }}>
                                            {jobStore.detailJob.description}
                                        </Typography>
                                    </Typography>

                                    <Button>Apply</Button>
                                </div>
                                <Divider />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    } else return <LoadingCard />;
});

export default DetailJob;
