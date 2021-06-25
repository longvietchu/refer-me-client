import React, { useEffect } from 'react';
import {
    Paper,
    Button,
    TextField,
    InputAdornment,
    Typography,
    FormHelperText
} from '@material-ui/core';
import Style from './Style';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { observer } from 'mobx-react-lite';
import { loginStore } from '../loginStore';

const LoginCard = observer(() => {
    const classes = Style();
    const { enqueueSnackbar } = useSnackbar();
    let history = useHistory();

    useEffect(() => {
        return () => {
            loginStore.email = '';
            loginStore.password = '';
            loginStore.validateError = '';
            loginStore.isLoading = false;
        };
    }, []);

    const login = async () => {
        loginStore.validateError = '';
        let isLoginSuccess = await loginStore.login();
        if (isLoginSuccess) {
            history.push('/home');
            enqueueSnackbar('Sign in success!', { variant: 'success' });
        }
    };

    const loginEnter = async (e: any) => {
        if (e.key === 'Enter') {
            loginStore.validateError = '';
            login();
        }
    };

    return (
        <Paper elevation={3} className={classes.card}>
            <header className={classes.header}>
                <img src="/rfm-icon.png" alt="Refer Me" />
                <Typography variant="h4">Sign in</Typography>
            </header>
            <TextField
                fullWidth
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
                onKeyDown={loginEnter}
            />
            <TextField
                fullWidth
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
                placeholder="enter your password..."
                onChange={(e) => {
                    loginStore.password = e.target.value;
                }}
                value={loginStore.password}
                onKeyDown={loginEnter}
            />

            <div style={{ width: '100%', marginBottom: 16 }}>
                <FormHelperText
                    style={{
                        color: '#ff0000',
                        fontSize: 11,
                        marginBottom: 8,
                        fontStyle: 'italic'
                    }}>
                    {loginStore.validateError}
                </FormHelperText>
            </div>

            <Button
                fullWidth
                onClick={login}
                variant="contained"
                color="primary"
                style={{ marginBottom: 16 }}
                disabled={loginStore.isLoading ? true : false}>
                {loginStore.isLoading ? 'Signing In...' : 'Sign In'}
            </Button>

            <div className={classes.google}>
                <div style={{ marginBottom: 10 }}>
                    New to Refer Me? {''}
                    <Link to="/signup">Join now</Link>
                </div>
            </div>
        </Paper>
    );
});

export default LoginCard;
