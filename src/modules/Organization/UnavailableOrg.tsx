import React from 'react';
import Header from '../../common/components/header/Header';
import { Grid, Hidden } from '@material-ui/core';
import Styles from './Style';
import { Helmet } from 'react-helmet';

const UnavailableOrg = () => {
    const classes = Styles();
    return (
        <Grid container className={classes.app}>
            <Helmet>
                <title>Refer Me</title>
            </Helmet>
            <Grid item container className={classes.app__header}>
                <Header />
            </Grid>
            <Grid item container className={classes.app__body}>
                <div className={classes.noOrgContainer}>
                    <img
                        src="/images/404-org.jpg"
                        alt="No News Org"
                        className={classes.noOrgImage}
                    />
                    <p className={classes.noOrgText}>
                        Oops!
                        <br />
                        This page is not available
                    </p>
                </div>
            </Grid>
        </Grid>
    );
};

export default UnavailableOrg;
