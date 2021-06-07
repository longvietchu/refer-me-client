import React, { useState } from 'react';
import {
    Paper,
    Button,
    TextField,
    InputAdornment,
    Typography,
    FormHelperText
} from '@material-ui/core';
import Style from './Style';
import { AccountCircle, LockRounded, Person } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { signupStore } from '../sigupStore';
import { observer } from 'mobx-react-lite';

const SignupCard = observer(() => {
    const classes = Style();

    const [helperText, sethelperText] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    let history = useHistory();

    const onClickSignup = async () => {
        let isSignupSuccess = await signupStore.signup();
        if (isSignupSuccess) {
            history.push('/');
            enqueueSnackbar('Sign-up success!', { variant: 'success' });
        }
    };

    return (
        <Paper elevation={3} className={classes.card}>
            <header className={classes.header}>
                <img src="/rfm-icon.png" alt="Refer Me" />
                <Typography variant="h4">Sign up</Typography>
            </header>

            <form className={classes.form}>
                <TextField
                    label="name"
                    color="primary"
                    margin="normal"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Person />
                            </InputAdornment>
                        )
                    }}
                    type="name"
                    placeholder="enter your name..."
                    value={signupStore.signupInfo.name}
                    onChange={(e) =>
                        (signupStore.signupInfo.name = e.target.value)
                    }
                />
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
                    value={signupStore.signupInfo.email}
                    onChange={(e) =>
                        (signupStore.signupInfo.email = e.target.value)
                    }
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
                    placeholder="enter your password..."
                    value={signupStore.signupInfo.password}
                    onChange={(e) =>
                        (signupStore.signupInfo.password = e.target.value)
                    }
                />

                <div style={{ width: '100%' }}>
                    <FormHelperText
                        style={{
                            color: '#ff0000',
                            fontSize: 11,
                            marginBottom: 8
                        }}>
                        {helperText}
                    </FormHelperText>
                </div>

                <Button
                    onClick={onClickSignup}
                    color="primary"
                    variant="contained"
                    className={classes.btn}
                    style={{ opacity: signupStore.isLoading ? 0.5 : 1 }}
                    disabled={signupStore.isLoading ? true : false}>
                    {signupStore.isLoading ? 'Joining...' : 'Join'}
                </Button>
            </form>

            <div className={classes.google}>
                <section>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </section>
                <div>
                    Already on Refer Me? {''}
                    <Link to="/">Sign in</Link>
                </div>
            </div>
        </Paper>
    );
});

export default SignupCard;
