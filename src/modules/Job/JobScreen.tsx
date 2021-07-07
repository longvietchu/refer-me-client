import React from 'react';
import { Helmet } from 'react-helmet';

import {
    Box,
    Container,
    Grid,
    Typography,
    IconButton,
    Paper,
    InputBase,
    Button,
    TextField,
    InputAdornment
} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import Header from '../../common/components/header/Header';

import BookmarkIcon from '@material-ui/icons/Bookmark';
import CreateIcon from '@material-ui/icons/Create';

import ModalPostJob from './ModalPostJob';
import JobCard from './JobCard/JobCard';
import LoadingCard from '../../common/components/util/LoadingCard';

import Styles from './Style';

import { observer } from 'mobx-react-lite';

import { jobStore } from './jobStore';
import { loginStore } from '../Login/loginStore';
import SearchIcon from '@material-ui/icons/Search';

const JobScreen = observer(() => {
    const classes = Styles();

    let history = useHistory();

    // React.useEffect(() => {
    //     jobStore.searchJob();
    // }, [jobStore.inputKeyword]);

    const searchKeyword = async (event: any) => {
        if (event.key === 'Enter') {
            await jobStore.searchJob();
        }
    };

    return (
        <Grid container className={classes.app}>
            <Helmet>
                <title>Jobs | RefMe</title>
            </Helmet>
            <Grid item container className={classes.app__header}>
                {/* Header */}
                <Header />
            </Grid>

            <Grid container item className={classes.app_body}>
                <Grid item className={classes.body__feed} xs={12} md={12}>
                    <Grid item className={classes.feed__form}>
                        <Paper className={classes.paper}>
                            <Grid container justify="space-between">
                                <IconButton
                                    onClick={() => {
                                        if (loginStore.userInfo) {
                                            history.push(`/myjob`);
                                        }
                                    }}>
                                    <BookmarkIcon />
                                    <Typography
                                        component="span"
                                        style={{
                                            paddingLeft: 8,
                                            color: '#00000099',
                                            fontWeight: 'bold'
                                        }}>
                                        My Jobs
                                    </Typography>
                                </IconButton>

                                <IconButton
                                    className={classes.btn_post}
                                    onClick={() => (jobStore.modalJob = true)}>
                                    <CreateIcon style={{ fontSize: '20px' }} />
                                    <Typography>Post a free job</Typography>
                                </IconButton>
                            </Grid>
                        </Paper>

                        <Paper className={classes.paperListJob}>
                            <Grid
                                container
                                justify="space-between"
                                style={{ padding: '20px 24px 0' }}>
                                <div>
                                    <Typography
                                        style={{
                                            fontSize: '20px',
                                            fontWeight: 'bold'
                                        }}>
                                        Recommended for you
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        style={{ fontSize: '14px' }}>
                                        Based on your profile and search history
                                    </Typography>
                                </div>
                                <TextField
                                    placeholder="Search job title"
                                    onKeyDown={searchKeyword}
                                    value={jobStore.inputKeyword}
                                    onChange={(e) =>
                                        (jobStore.inputKeyword = e.target.value)
                                    }
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() =>
                                                        jobStore.searchJob()
                                                    }>
                                                    <SearchIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Box className={classes.box}>
                                <Container maxWidth={false}>
                                    <Box pt={3}>
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
                                    </Box>
                                </Container>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <ModalPostJob />
        </Grid>
    );
});

export default JobScreen;
