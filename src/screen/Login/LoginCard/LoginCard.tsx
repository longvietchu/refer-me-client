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
import Logo from '../../../assets/images/text_logo.png';
import Style from './Style';
import KEY from '../../../assets/AsynStorage';

import { AccountCircle, LockRounded } from '@material-ui/icons';

import { login } from '../../../apis/Functions/users';

import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const LoginCard = () => {
    const classes = Style();

    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const [helperText, sethelperText] = useState('');
    const { enqueueSnackbar } = useSnackbar();

    let history = useHistory();

    const Login = async () => {
        setState({
            ...state,
            email: state.email.trim(),
            password: state.password.trim()
        });
        if (state.email === '' || state.password === '') {
            sethelperText('');
            sethelperText('Please enter your email address and password');
        } else {
            const res = await login(state);
            console.log('res', res);
            if (res.data && res.data.success == true) {
                localStorage.setItem(KEY.API_TOKEN, res.data.token);
                history.push('/home');
                sethelperText('');
                enqueueSnackbar('Login success!', { variant: 'success' });
            } else {
                sethelperText("That's not the right email or password");
            }
        }
    };

    const LoginEnter = async (e: any) => {
        setState({
            ...state,
            email: state.email.trim(),
            password: state.password.trim()
        });
        if (e.key === 'Enter') {
            if (state.email === '' || state.password === '') {
                sethelperText('');
                sethelperText('Please enter your email address and password');
            } else {
                const res = await login(state);
                console.log('res', res);
                if (res.data && res.data.success == true) {
                    localStorage.setItem(KEY.API_TOKEN, res.data.token);
                    history.push('/home');
                    sethelperText('');
                    enqueueSnackbar('Login success!', { variant: 'success' });
                } else {
                    sethelperText("That's not the right email or password");
                }
            }
        }
    };

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
                    value={state.email}
                    placeholder="enter your email..."
                    onChange={(e) => {
                        setState({
                            ...state,
                            email: e.target.value
                        });
                    }}
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
                    value={state.password}
                    placeholder="enter your password..."
                    onChange={(e) => {
                        setState({
                            ...state,
                            password: e.target.value
                        });
                    }}
                    onKeyDown={LoginEnter}
                />

                <div style={{ width: '100%' }}>
                    <FormHelperText
                        style={{
                            marginLeft: '16px',
                            color: 'red',
                            fontSize: '13px'
                        }}>
                        {helperText}
                    </FormHelperText>
                </div>

                <Button
                    onClick={Login}
                    color="primary"
                    variant="contained"
                    className={classes.btn}>
                    Log In
                </Button>
            </form>

            <div className={classes.google}>
                {/* <section>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </section> */}
                <div style={{ marginBottom: 10 }}>
                    New to RefMe? {''}
                    <Link href="/signup">Join now</Link>
                </div>

                {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
            </div>
        </Paper>
    );
};

export default LoginCard;
