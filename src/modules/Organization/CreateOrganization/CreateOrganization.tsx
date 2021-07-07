import React, { useState, useEffect } from 'react';
import {
    Grid,
    Typography,
    IconButton,
    Paper,
    InputBase,
    Button,
    TextField
} from '@material-ui/core';
import Header from '../../../common/components/header/Header';
import { Helmet } from 'react-helmet';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import Styles from './Style';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
    DatePicker
} from '@material-ui/pickers';
import 'date-fns';

import DateFnsUtils from '@date-io/date-fns';

import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { observer } from 'mobx-react-lite';
import { organizationStore } from '../organizationStore';

const CreateOrganization = observer(() => {
    const classes = Styles();
    let history = useHistory();
    const { enqueueSnackbar } = useSnackbar();

    const onClickCreateOrganization = async () => {
        let isUpdateSuccess = await organizationStore.createOrganization();
        if (isUpdateSuccess) {
            history.push(`/myorganization`);
            enqueueSnackbar('Create success!', { variant: 'success' });
        }
    };

    return (
        <Grid
            container
            className={classes.app}
            // style={{ backgroundColor: mode ? darkPrimary : LinkedInBgColor }}
        >
            <Helmet>
                <title>RefMe</title>
            </Helmet>
            <Grid item container className={classes.app__header}>
                {/* Header */}
                <Header />
            </Grid>
            <Grid item container className={classes.app__body}>
                <Grid item className={classes.body__feed} xs={12} md={7}>
                    <Grid item className={classes.feed__form}>
                        <Paper>
                            <Typography
                                variant="h3"
                                style={{
                                    color: '#0a66c2',
                                    fontSize: 'var(--font-size-medium)',
                                    fontWeight: 'bold',
                                    padding: 14
                                }}>
                                Organization details
                            </Typography>

                            <Grid
                                container
                                direction="column"
                                spacing={3}
                                style={{ padding: 14 }}>
                                <Grid item>
                                    <TextField
                                        required
                                        label="Name"
                                        variant="outlined"
                                        fullWidth
                                        onChange={(e) =>
                                            (organizationStore.inputOrganization.name =
                                                e.target.value)
                                        }
                                        value={
                                            organizationStore.inputOrganization
                                                .name
                                        }
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        label="Website"
                                        variant="outlined"
                                        placeholder="Begin with http:// or https:// or wwww."
                                        fullWidth
                                        onChange={(e) =>
                                            (organizationStore.inputOrganization.website =
                                                e.target.value)
                                        }
                                        value={
                                            organizationStore.inputOrganization
                                                .website
                                        }
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        label="Industry"
                                        variant="outlined"
                                        placeholder="Type your organization industry"
                                        fullWidth
                                        onChange={(e) =>
                                            (organizationStore.inputOrganization.industry =
                                                e.target.value)
                                        }
                                        value={
                                            organizationStore.inputOrganization
                                                .industry
                                        }
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        label="Organization size"
                                        variant="outlined"
                                        fullWidth
                                        onChange={(e) =>
                                            (organizationStore.inputOrganization.company_size =
                                                e.target.value)
                                        }
                                        value={
                                            organizationStore.inputOrganization
                                                .company_size
                                        }
                                    />
                                </Grid>

                                <Grid item>
                                    <TextField
                                        label="description"
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Type your organization description here..."
                                        onChange={(e) =>
                                            (organizationStore.inputOrganization.description =
                                                e.target.value)
                                        }
                                        value={
                                            organizationStore.inputOrganization
                                                .description
                                        }
                                    />
                                </Grid>

                                <Grid container item justify="space-around">
                                    <Grid item>
                                        <TextField
                                            id="date"
                                            label="Organization founding"
                                            type="date"
                                            defaultValue="2017-05-24"
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            onChange={(e) =>
                                                (organizationStore.inputOrganization.founded =
                                                    e.target.value)
                                            }
                                            value={
                                                organizationStore
                                                    .inputOrganization.founded
                                            }
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Button
                            className={classes.btn}
                            onClick={(e) => onClickCreateOrganization()}
                            disabled={
                                organizationStore.isLoading ? true : false
                            }>
                            {organizationStore.isLoading
                                ? 'Creating...'
                                : 'Create organization'}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
});

export default CreateOrganization;
