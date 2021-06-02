import React, { useState } from 'react';
import {
    Grid,
    Paper,
    Hidden,
    Button,
    ListItem,
    ListItemText,
    Typography,
    TextField
} from '@material-ui/core';
import Header from '../../common/components/header/Header';
import { Helmet } from 'react-helmet';

import Styles from './Style';
const ChangePasswordScreen = () => {
    const classes = Styles();

    const [state, setState] = useState({
        oldPassword: '',
        newPassword: '',
        cfPassword: ''
    });

    return (
        <Grid
            container
            className={classes.app}
            // style={{ backgroundColor: mode ? darkPrimary : LinkedInBgColor }}
        >
            <Helmet>
                <title>Settings</title>
            </Helmet>
            <Grid item container className={classes.app__header}>
                {/* Header */}
                <Header />
            </Grid>
            <Grid item container className={classes.app__body}>
                <Hidden smDown>
                    <Grid item className={classes.body__sidebar} xs>
                        <Paper style={{ borderRadius: 5 }}>
                            <ListItem>
                                <ListItemText style={{ textAlign: 'center' }}>
                                    Sign in & security
                                </ListItemText>
                            </ListItem>
                        </Paper>
                    </Grid>
                </Hidden>
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
                                {/* <Grid item>
                                    <TextField
                                        style={{ width: 0, height: 0 }}
                                        type="password"
                                        name=""
                                        value=""
                                        aria-readonly={true}
                                        variant="outlined"
                                    />
                                </Grid> */}
                                <Grid item>
                                    <TextField
                                        variant="outlined"
                                        style={{ width: '50%' }}
                                        label="Type your current password"
                                        value={state.oldPassword}
                                        onChange={(e) =>
                                            setState({
                                                ...state,
                                                oldPassword: e.target.value
                                            })
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
                                        variant="outlined"
                                        style={{ width: '50%' }}
                                        label="Type your new password"
                                        value={state.newPassword}
                                        onChange={(e) =>
                                            setState({
                                                ...state,
                                                newPassword: e.target.value
                                            })
                                        }
                                        type="password"
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        variant="outlined"
                                        style={{ width: '50%' }}
                                        label="Retype your new password"
                                        value={state.cfPassword}
                                        onChange={(e) =>
                                            setState({
                                                ...state,
                                                cfPassword: e.target.value
                                            })
                                        }
                                        type="password"
                                    />
                                </Grid>
                                <Grid item>
                                    <Button
                                        className={classes.btn}
                                        disabled={
                                            state.oldPassword === '' ||
                                            state.newPassword === '' ||
                                            state.cfPassword === ''
                                                ? true
                                                : false
                                        }>
                                        Save
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ChangePasswordScreen;
