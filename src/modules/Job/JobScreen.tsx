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
    Button
} from '@material-ui/core';

import Header from '../../common/components/header/Header';

import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CreateIcon from '@material-ui/icons/Create';

import ModalPostJob from './ModalPostJob';
import JobCard from './JobCard/JobCard';
import LoadingCard from '../../common/components/util/LoadingCard';

import Styles from './Style';

import { IJob } from './JobContainer';
import { observer } from 'mobx-react-lite';

import { jobStore } from './jobStore';

// interface IProps {
//     onSave: any;
//     job: IJob[];
// }

const JobScreen = observer(() => {
    const classes = Styles();

    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    const openModal = (): void => {
        setModalIsOpen(true);
    };

    const closeModal = (): void => {
        setModalIsOpen(false);
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
                                <IconButton>
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
                            <div style={{ padding: '20px 24px 0' }}>
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

                {/* <Grid item className={classes.body__feed} xs={12} md={12}>
                    <Grid item className={classes.feed__form}>
                        <Paper className={classes.paper_search}>
                            <Typography
                                align="center"
                                variant="h5"
                                style={{ padding: '14px' }}>
                                Search for your next job
                            </Typography>

                            <Grid
                                container
                                direction="row"
                                justify="space-evenly"
                                alignItems="center"
                                style={{ paddingBottom: '20px' }}>
                                <Grid item xs={12} sm={5}>
                                    <Paper
                                        component="form"
                                        className={classes.root}>
                                        <IconButton
                                            type="submit"
                                            className={classes.iconButton}
                                            aria-label="search">
                                            <SearchIcon />
                                        </IconButton>
                                        <InputBase
                                            className={classes.input}
                                            placeholder="Search by title, skill, or company"
                                        />
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={5}>
                                    <Paper
                                        component="form"
                                        className={classes.root}>
                                        <IconButton
                                            type="submit"
                                            className={classes.iconButton}
                                            aria-label="search">
                                            <LocationOnIcon />
                                        </IconButton>
                                        <InputBase
                                            className={classes.input}
                                            placeholder="City, state, or zip code"
                                        />
                                    </Paper>
                                </Grid>

                                <Grid item>
                                    <Button
                                        variant="contained"
                                        className={classes.btn}>
                                        Search
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid> */}

                {/* <Grid item className={classes.body__feed} xs={12} md={12}>
                    <Grid item className={classes.feed__form}>
                        <Paper className={classes.paper}>
                            <div style={{ padding: '20px 24px 0' }}>
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
                </Grid> */}
            </Grid>
            <ModalPostJob modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </Grid>
    );
});

export default JobScreen;
