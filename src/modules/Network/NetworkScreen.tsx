import React from 'react';
import {
    Grid,
    Hidden,
    Container,
    Box,
    Paper,
    Typography
} from '@material-ui/core';

import Header from '../../common/components/header/Header';
import SideBar from './SideBar/SideBar';
import Styles from './Style';
import Invitation from './Invitation/Invitation';
import ConnectCard from './ConnectCard/ConnectCard';

import connects from './connect';

import { Helmet } from 'react-helmet';

const NetworkScreen = () => {
    const classes = Styles();
    return (
        <Grid container className={classes.app}>
            <Helmet>
                <title>Refer Me | Network</title>
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
                <Grid item className={classes.body__feed} xs={12} md={7}>
                    <Grid item className={classes.feed__form}>
                        <Invitation />
                    </Grid>
                    <Grid item className={classes.feed__posts}>
                        <Paper className={classes.paper}>
                            <div style={{ padding: '20px 24px 0' }}>
                                <Typography
                                    style={{
                                        fontSize: '20px',
                                        fontWeight: 'bold'
                                    }}>
                                    Recommended for you
                                </Typography>
                            </div>
                            <Box className={classes.box}>
                                <Container maxWidth={false}>
                                    <Box pt={1}>
                                        <Grid container spacing={3}>
                                            {connects.map((connect) => (
                                                <Grid
                                                    item
                                                    key={connect.id}
                                                    lg={3}
                                                    md={6}
                                                    xs={12}>
                                                    <ConnectCard
                                                        connect={connect}
                                                    />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                </Container>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default NetworkScreen;
