import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../common/components/header/Header';
import { signupStore } from '../SignUp/sigupStore';
import Styles from './Style';

const ChangePasswordScreen = observer(() => {
    const classes = Styles();

    return (
        <Grid container className={classes.app}>
            <Helmet>
                <title>Settings</title>
            </Helmet>
            <Grid item container className={classes.app__header}>
                <Header />
            </Grid>
            <Grid item container className={classes.app__body}>
                {/* <Hidden smDown>
                    <Grid item className={classes.body__sidebar} xs>
                        <Paper style={{ borderRadius: 5 }}>
                            <ListItem>
                                <ListItemText style={{ textAlign: 'center' }}>
                                    Security
                                </ListItemText>
                            </ListItem>
                        </Paper>
                    </Grid>
                </Hidden> */}
                <Grid item className={classes.body__feed} xs={12} md={7}>
                    <Grid item className={classes.feed__form}>
                        <Paper>
                            <Grid style={{ padding: '10px 20px' }}>
                                <Typography variant="h5">
                                    Change password
                                </Typography>
                                <Typography variant="caption">
                                    Choose a unique password to protect your
                                    account
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                direction="column"
                                spacing={3}
                                style={{ padding: '10px 50px' }}>
                                <Grid item>
                                    <TextField
                                        required
                                        style={{ width: '50%' }}
                                        label="Current password"
                                        value={
                                            signupStore.changePasswordInput
                                                .currentPassword
                                        }
                                        onChange={(e) =>
                                            (signupStore.changePasswordInput.currentPassword =
                                                e.target.value)
                                        }
                                        type="password"
                                        inputProps={{
                                            autocomplete: 'current-password',
                                            form: {
                                                autocomplete: 'off'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        style={{ width: '50%' }}
                                        label="New password"
                                        value={
                                            signupStore.changePasswordInput
                                                .newPassword
                                        }
                                        onChange={(e) =>
                                            (signupStore.changePasswordInput.newPassword =
                                                e.target.value)
                                        }
                                        type="password"
                                        inputProps={{
                                            autocomplete: 'new-password',
                                            form: {
                                                autocomplete: 'off'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        style={{ width: '50%' }}
                                        label="Confirm new password"
                                        value={
                                            signupStore.changePasswordInput
                                                .confirmPassword
                                        }
                                        onChange={(e) =>
                                            (signupStore.changePasswordInput.confirmPassword =
                                                e.target.value)
                                        }
                                        type="password"
                                        inputProps={{
                                            autocomplete: 'confirm-password',
                                            form: {
                                                autocomplete: 'off'
                                            }
                                        }}
                                    />
                                </Grid>
                                {signupStore.validateChangePass.length > 0 && (
                                    <Grid item>
                                        <p className={classes.validate}>
                                            {signupStore.validateChangePass}
                                        </p>
                                    </Grid>
                                )}
                                <Grid item>
                                    <Button
                                        className={classes.btn}
                                        disabled={
                                            signupStore.changePasswordInput
                                                .currentPassword === '' ||
                                            signupStore.changePasswordInput
                                                .newPassword === '' ||
                                            signupStore.changePasswordInput
                                                .confirmPassword === ''
                                                ? true
                                                : false
                                        }
                                        onClick={() => {
                                            signupStore.changePassword();
                                        }}>
                                        {signupStore.isLoading
                                            ? 'Changing...'
                                            : 'Confirm'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
});

export default ChangePasswordScreen;
