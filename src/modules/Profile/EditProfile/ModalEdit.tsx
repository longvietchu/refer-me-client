import DateFnsUtils from '@date-io/date-fns';
import {
    Fab,
    Grid,
    IconButton,
    TextField,
    Typography
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import 'date-fns';
import { observer } from 'mobx-react-lite';
import React from 'react';
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
        height: '80%',
        width: '50%',
        borderRadius: 10,
        padding: 0
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
                <Grid component="nav" className={classes.header} item>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <IconButton
                            onClick={() =>
                                (profileStore.modalProfileOpen = false)
                            }>
                            <Close className={classes.icon} />{' '}
                        </IconButton>
                        <Typography className={classes.typo} variant="h4">
                            Edit profile
                        </Typography>
                    </div>
                    <Fab
                        variant="extended"
                        size="small"
                        className={classes.btn}
                        type="submit"
                        onClick={() => {
                            profileStore.updateProfile();
                            profileStore.updateUserInfo();
                        }}>
                        <div className={classes.btnDiv}>
                            <span>
                                {profileStore.isLoading ? 'Saving...' : 'Save'}
                            </span>
                        </div>
                    </Fab>
                </Grid>
                <form className={classes.form} noValidate>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.textField}
                                name="About"
                                fullWidth
                                id="About"
                                label="About"
                                autoFocus
                                required
                                value={profileStore.profile.about}
                                onChange={(e) => {
                                    if (profileStore.profile) {
                                        profileStore.profile.about =
                                            e.target.value;
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.textField}
                                name="Headline"
                                multiline
                                fullWidth
                                id="Headline"
                                label="Headline"
                                autoFocus
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

                        <Grid item xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-between">
                                    <KeyboardDatePicker
                                        variant="dialog"
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
                                            width: '40%',
                                            marginLeft: '5%',
                                            height: '15%'
                                        }}
                                    />
                                    <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        label="Select gender"
                                        value={profileStore.profile.gender}
                                        onChange={(e) => {
                                            if (profileStore.profile) {
                                                profileStore.profile.gender =
                                                    parseInt(e.target.value);
                                            }
                                        }}
                                        SelectProps={{
                                            native: true
                                        }}
                                        variant="outlined"
                                        style={{
                                            width: '40%',
                                            marginRight: '5%',
                                            height: '15%'
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
                            </MuiPickersUtilsProvider>
                        </Grid>
                    </Grid>
                </form>
            </Modal>
        );
    } else return null;
});

export default ModalEdit;
