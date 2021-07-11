import React from 'react';
import Header from '../../common/components/header/Header';
import { Grid, Hidden } from '@material-ui/core';
import Styles from './Style';
import Sidebar from '../../common/components/sidebar/Sidebar';
import Form from '../../common/components/form/Form';
import PostList from '../Post/PostList';
import Widgets from '../../common/components/widgets/Widgets';
import { Helmet } from 'react-helmet';
import CreatePostModal from './CreatePostModal';
import EditPost from '../Post/components/EditPost';
import DeletePost from '../Post/components/DeletePost';

const HomeScreen = () => {
    const classes = Styles();

    return (
        <Grid container className={classes.app}>
            <Helmet>
                <title>Refer Me | Feed</title>
            </Helmet>
            <Grid item container className={classes.app__header}>
                <Header />
            </Grid>
            <Grid item container className={classes.app__body}>
                <Hidden smDown>
                    <Grid item className={classes.body__sidebar} md={3}>
                        <Sidebar />
                    </Grid>
                </Hidden>
                <Grid item className={classes.body__feed} xs={12} sm={8} md={5}>
                    <Grid item className={classes.feed__form}>
                        <Form />      
                    </Grid>
                    <Grid item className={classes.feed__posts}>
                        <PostList />
                        <EditPost />
                        <DeletePost />
                    </Grid>
                </Grid>
                <Hidden smDown>
                    <Grid item className={classes.body__widgets} md={2}>
                        <Widgets />
                    </Grid>
                </Hidden>
                <CreatePostModal />
            </Grid>
        </Grid>
    );
};

export default HomeScreen;
