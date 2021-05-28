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

import { AccountCircle, LockRounded, Person } from '@material-ui/icons';

import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { signup } from '../../../apis/Functions/users';

const SignupCard = () => {
    const classes = Style();

    const [helperText, sethelperText] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    let history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onClickSignup = async () => {
        const res = await signup({
            name: name,
            email: email,
            password: password
        });
        if (res.data && res.data.success == true) {
            enqueueSnackbar('You have successfully registered!', {
                variant: 'success'
            });
            history.push('/home');
        } else {
            sethelperText(res.data.message);
        }
        console.log('resss', res);
    };

    return (
        <Paper elevation={3} className={classes.card}>
            <header className={classes.header}>
                <img src={Logo} alt="logo" />
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    onClick={onClickSignup}
                    color="primary"
                    variant="contained"
                    className={classes.btn}>
                    Join
                </Button>
            </form>

            <div className={classes.google}>
                <section>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </section>
                <div>Join with Google</div>
                <div>
                    Already on RefMe? {''}
                    <Link href="/">Sign in</Link>
                </div>

                {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
            </div>
        </Paper>
    );
};

export default SignupCard;
