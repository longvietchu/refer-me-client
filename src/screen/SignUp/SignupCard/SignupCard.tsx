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

import { AccountCircle, LockRounded } from '@material-ui/icons';

import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const SignupCard = () => {
    const classes = Style();

    const [helperText, sethelperText] = useState('');
    const { enqueueSnackbar } = useSnackbar();

    let history = useHistory();

    return (
        <Paper elevation={3} className={classes.card}>
            <header className={classes.header}>
                <img src={Logo} alt="logo" />
            </header>

            <Typography variant="h4">Sign up</Typography>

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
                    // onClick={Login}
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
