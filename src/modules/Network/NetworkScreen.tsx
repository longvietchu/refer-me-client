import { Divider, Grid, Hidden, Paper, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../common/components/header/Header';
import LoadingCard from '../../common/components/util/LoadingCard';
import ConnectCard from './ConnectCard/ConnectCard';
import CreateConnection from './ConnectCard/CreateConnection';
import Connection from './Connection/Connection';
import Invitation from './Invitation/Invitation';
import { networkStore, NetworkTab } from './networkStore';
import SideBar from './SideBar/SideBar';
import Styles from './Style';

const NetworkScreen = observer(() => {
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
                {networkStore.networkTab === NetworkTab.CONTACT ? (
                    <Grid item className={classes.body__feed} xs={12} md={7}>
                        <Grid item className={classes.feed__form}>
                            <Invitation />
                        </Grid>

                        <Grid item className={classes.feed__posts}>
                            <Paper className={classes.paper}>
                                <div style={{ padding: 16 }}>
                                    <Typography variant="body1">
                                        Expand your network
                                    </Typography>
                                </div>
                                <Divider />
                                <div className={classes.box}>
                                    <Grid container spacing={1}>
                                        {networkStore.recommendList ? (
                                            networkStore.recommendList.map(
                                                (recommend, index) => (
                                                    <Grid
                                                        item
                                                        key={recommend._id}
                                                        md={3}
                                                        xs={12}>
                                                        <ConnectCard
                                                            connect={recommend}
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
                            <Connection />
                        </Grid>
                    </Grid>
                )}
                <CreateConnection />
            </Grid>
        </Grid>
    );
});

export default NetworkScreen;
