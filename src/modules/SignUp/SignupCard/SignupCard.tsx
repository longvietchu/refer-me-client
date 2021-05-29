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
import { AccountCircle, LockRounded, Person } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { signupStore } from '../sigupStore';

const SignupCard = () => {
    const classes = Style();

    const [helperText, sethelperText] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    let history = useHistory();
    let { name, email, password } = signupStore.signupInfo;

    const onClickSignup = async () => {
        // if (res.data && res.data.success == true) {
        //     enqueueSnackbar('You have successfully registered!', {
        //         variant: 'success'
        //     });
        //     history.push('/home');
        // } else {
        //     sethelperText(res.data.message);
        // }
        await signupStore.signup();
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
                    onChange={(e) => (name = e.target.value)}
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
                    onChange={(e) => (email = e.target.value)}
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
                    onChange={(e) => (password = e.target.value)}
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
                <div>
                    Already on Refer Me? {''}
                    <Link href="/">Sign in</Link>
                </div>
            </div>
        </Paper>
    );
};

export default SignupCard;
