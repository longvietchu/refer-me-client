import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import { observer } from 'mobx-react-lite';
import { useSnackbar } from 'notistack';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import Header from '../../../common/components/header/Header';
import { organizationStore } from '../organizationStore';
import Styles from './Style';
import DateFnsUtils from '@date-io/date-fns';

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
                <title>Refer Me</title>
            </Helmet>
            <Grid item container className={classes.app__header}>
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
                                        label="Description"
                                        fullWidth
                                        multiline
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

                                <Grid container item>
                                    <Grid item>
                                        {/* <TextField
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
                                        /> */}
                                        <MuiPickersUtilsProvider
                                            utils={DateFnsUtils}>
                                            <DatePicker
                                                autoOk
                                                clearable
                                                disableFuture
                                                openTo="year"
                                                format="dd/MM/yyyy"
                                                views={[
                                                    'year',
                                                    'month',
                                                    'date'
                                                ]}
                                                label="Date of birth"
                                                value={
                                                    organizationStore
                                                        .inputOrganization
                                                        .founded
                                                }
                                                onChange={(date: any) =>
                                                    (organizationStore.inputOrganization.founded =
                                                        date)
                                                }
                                            />
                                        </MuiPickersUtilsProvider>
                                    </Grid>
                                </Grid>
                                <Button
                                    className={classes.btn}
                                    onClick={(e) => onClickCreateOrganization()}
                                    disabled={
                                        organizationStore.isLoading
                                            ? true
                                            : false
                                    }>
                                    {organizationStore.isLoading
                                        ? 'Creating...'
                                        : 'Create organization'}
                                </Button>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
});

export default CreateOrganization;
