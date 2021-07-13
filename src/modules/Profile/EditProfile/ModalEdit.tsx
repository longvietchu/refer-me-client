import React, { useState, useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    Grid,
    IconButton,
    TextField,
    Typography,
    Button,
    Divider
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import { observer } from 'mobx-react-lite';
import Modal from 'react-modal';
import { loginStore } from '../../Login/loginStore';
import { Gender, profileStore } from '../profileStore';
import Styles from './Style';

Modal.setAppElement('#root');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        borderRadius: 10
    }
};

const genders = [
    {
        value: 0,
        label: Gender.UNKNOWN
    },
    {
        value: 1,
        label: Gender.MALE
    },
    {
        value: 2,
        label: Gender.FEMALE
    }
];

const ModalEdit = observer(() => {
    const classes = Styles();

    if (loginStore.userInfo && profileStore.profile) {
        return (
            <Modal
                isOpen={profileStore.modalProfileOpen}
                onRequestClose={() => (profileStore.modalProfileOpen = false)}
                style={customStyles}
                contentLabel="Example Modal">
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <Grid
                            container
                            justify="space-between"
                            alignItems="center">
                            <Typography variant="h6">Edit profile</Typography>
                            <IconButton
                                onClick={() =>
                                    (profileStore.modalProfileOpen = false)
                                }>
                                <Close />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid item>
                        <TextField
                            name="About"
                            fullWidth
                            id="About"
                            label="About"
                            required
                            value={profileStore.profile.about}
                            onChange={(e) => {
                                if (profileStore.profile) {
                                    profileStore.profile.about = e.target.value;
                                }
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            name="Headline"
                            multiline
                            fullWidth
                            id="Headline"
                            label="Headline"
                            required
                            value={loginStore.userInfo.headline}
                            onChange={(e) => {
                                if (loginStore.userInfo) {
                                    loginStore.userInfo.headline =
                                        e.target.value;
                                }
                            }}
                        />
                    </Grid>

                    <Grid item>
                        <Grid container justify="space-between">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    autoOk
                                    clearable
                                    format="dd/MM/yyyy"
                                    value={profileStore.profile.dob}
                                    onChange={(date: any) => {
                                        if (profileStore.profile) {
                                            profileStore.profile.dob = date;
                                        }
                                    }}
                                    label="Birthday"
                                    fullWidth
                                    style={{
                                        width: '40%'
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                            <TextField
                                id="outlined-select-currency-native"
                                fullWidth
                                select
                                label="Select gender"
                                value={profileStore.profile.gender}
                                onChange={(e) => {
                                    if (profileStore.profile) {
                                        profileStore.profile.gender = parseInt(
                                            e.target.value
                                        );
                                    }
                                }}
                                style={{
                                    width: '40%'
                                }}>
                                {genders.map((option: any) => (
                                    <option
                                        key={option.value}
                                        value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                    <Button
                        variant="outlined"
                        color="primary"
                        className={classes.btn}
                        onClick={() => {
                            profileStore.updateProfile();
                            profileStore.updateUserInfo();
                        }}>
                        {profileStore.isLoading ? 'Saving...' : 'Save'}
                    </Button>
                </Grid>
            </Modal>
        );
    } else return null;
});

export default ModalEdit;
