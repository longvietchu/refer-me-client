import React, { useState } from 'react';
import {
    Paper,
    Button,
    TextField,
    InputAdornment,
    Typography,
    FormHelperText,
    Link
} from '@material-ui/core';
import Logo from '../../../common/assets/images/text_logo.png';
import Style from './Style';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { observer } from 'mobx-react-lite';
import { loginStore } from '../loginStore';

const LoginCard = observer(() => {
    const classes = Style();
    const { enqueueSnackbar } = useSnackbar();
    let history = useHistory();

    const Login = async () => {
        loginStore.login();
        if (loginStore.loginState) {
            history.push('/home');
            enqueueSnackbar('Login success!', { variant: 'success' });
        }
    };

    const LoginEnter = async (e: any) => {};
    return (
        <Paper elevation={3} className={classes.card}>
            <header className={classes.header}>
                <img src={Logo} alt="logo" />
            </header>

            <Typography variant="h4">Sign in</Typography>

            <form className={classes.form}>
                <TextField
                    label="email"
                    color="primary"
                    margin="normal"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        )
                    }}
                    type="email"
                    placeholder="enter your email..."
                    onChange={(e) => {
                        loginStore.email = e.target.value;
                    }}
                    value={loginStore.email}
                    onKeyDown={LoginEnter}
                />
                <TextField
                    label="password"
                    color="primary"
                    margin="normal"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockRounded />
                            </InputAdornment>
                        )
                    }}
                    type="password"
                    value={loginStore.password}
                    placeholder="enter your password..."
                    onChange={(e) => {
                        loginStore.password = e.target.value;
                    }}
                    onKeyDown={LoginEnter}
                />

                <div style={{ width: '100%' }}>
                    <FormHelperText
                        style={{
                            color: '#ff0000',
                            fontSize: 11,
                            marginBottom: 8
                        }}>
                        {loginStore.validateError}
                    </FormHelperText>
                </div>

                <Button
                    onClick={Login}
                    color="primary"
                    variant="contained"
                    className={classes.btn}
                    style={{ opacity: loginStore.isLoading ? 0.5 : 1 }}
                    disabled={loginStore.isLoading ? true : false}>
                    {loginStore.isLoading ? 'Loging In...' : 'Log In'}
                </Button>
            </form>

            <div className={classes.google}>
                <div style={{ marginBottom: 10 }}>
                    New to Refer Me? {''}
                    <Link href="/signup">Join now</Link>
                </div>
            </div>
        </Paper>
    );
});

export default LoginCard;
