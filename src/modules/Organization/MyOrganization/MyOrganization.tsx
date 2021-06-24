import React, { useEffect } from 'react';
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
import { Link, useHistory } from 'react-router-dom';

import Header from '../../../common/components/header/Header';

import BookmarkIcon from '@material-ui/icons/Bookmark';
import CreateIcon from '@material-ui/icons/Create';

import OrganizationCard from '../OrganizationCard/OrganizationCard';
import LoadingCard from '../../../common/components/util/LoadingCard';

import Styles from './Style';

import { observer } from 'mobx-react-lite';

import { loginStore } from '../../Login/loginStore';
import { organizationStore } from '../organizationStore';

// interface IProps {
//     onSave: any;
//     job: IJob[];
// }

const MyOrganization = observer(() => {
    const classes = Styles();

    let history = useHistory();

    useEffect(() => {
        organizationStore.getMyOrganization();
    }, []);

    if (organizationStore.myOrganization) {
        return (
            <Grid container className={classes.app}>
                <Helmet>
                    <title>Your Organizations | RefMe</title>
                </Helmet>
                <Grid item container className={classes.app__header}>
                    {/* Header */}
                    <Header />
                </Grid>

                <Grid container item className={classes.app_body}>
                    <Grid item className={classes.body__feed} xs={12} md={12}>
                        <Grid item className={classes.feed__form}>
                            {organizationStore.myOrganization.length > 0 ? (
                                <Paper
                                    className={classes.paperListOrganization}>
                                    <div style={{ padding: '20px 24px 0' }}>
                                        <Typography
                                            style={{
                                                fontSize: '20px',
                                                fontWeight: 'bold'
                                            }}>
                                            All your organization
                                        </Typography>
                                    </div>
                                    <Box className={classes.box}>
                                        <Container maxWidth={false}>
                                            <Box pt={3}>
                                                <Grid container spacing={5}>
                                                    {organizationStore.myOrganization ? (
                                                        organizationStore.myOrganization.map(
                                                            (
                                                                organization,
                                                                index
                                                            ) => (
                                                                <Grid
                                                                    item
                                                                    key={
                                                                        organization._id
                                                                    }
                                                                    lg={3}
                                                                    md={6}
                                                                    xs={12}>
                                                                    <OrganizationCard
                                                                        organization={
                                                                            organization
                                                                        }
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
                            ) : (
                                <Paper
                                    className={classes.paperListOrganization}>
                                    <div style={{ padding: '20px 24px 0' }}>
                                        <Typography
                                            style={{
                                                fontSize: '20px',
                                                fontWeight: 'bold'
                                            }}>
                                            You haven't had organization yet
                                        </Typography>
                                    </div>
                                    <Button
                                        onClick={() =>
                                            history.push('/organization/new')
                                        }
                                        className={classes.btn_post}>
                                        Create your organization now
                                    </Button>
                                </Paper>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    } else return null;
});

export default MyOrganization;
