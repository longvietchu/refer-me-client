import { Grid, Hidden } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../common/components/header/Header';
import Widgets from '../../common/components/widgets/Widgets';
import Content from './content/Content';
import Sidebar from './sidebar/Sidebar';
import Styles from './Style';

const NotificationsScreen = () => {
    const classes = Styles();
    return (
        <Grid container className={classes.app}>
            <Helmet>
                <title>Notifications | Refer Me</title>
            </Helmet>
            <Grid
                item
                container
                className={classes.app__header}
                // style={{
                //   boxShadow: mode && "0px 5px 10px -10px rgba(0,0,0,0.75)",
                // }}
            >
                <Header />
            </Grid>
            <Grid item container className={classes.app__body}>
                <Hidden smDown>
                    <Grid item className={classes.body__sidebar} md={2}>
                        {/* Sidebar */}
                        <Sidebar />
                    </Grid>
                </Hidden>
                <Grid item className={classes.body__feed} xs={12} sm={8} md={5}>
                    {/* Content */}
                    <Grid item className={classes.feed__form}>
                        <Content />
                    </Grid>
                    <Grid item className={classes.feed__posts}>
                        {/* <Posts /> */}
                    </Grid>
                </Grid>
                <Hidden smDown>
                    <Grid item className={classes.body__widgets} md={3}>
                        {/* Widgets */}
                        <Widgets />
                    </Grid>
                </Hidden>
            </Grid>
        </Grid>
    );
};

export default NotificationsScreen;
