import DateFnsUtils from '@date-io/date-fns';
import {
    Avatar,
    Box,
    Fab,
    Grid,
    IconButton,
    TextField,
    Typography
} from '@material-ui/core';
import { CameraAlt, Close } from '@material-ui/icons';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import 'date-fns';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import Modal from 'react-modal';

import { Gender, profileStore } from '../profileStore';
import Styles from './Style';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: '80%',
        width: '50%',
        // paddingBottom: 5,
        // paddingTop: 10,
        borderRadius: 10,
        padding: 0
    }
};

interface IProps {
    // CreateExp: any;
    modalProfile: boolean;
    closeModalProfile: VoidFunction;
    startDate: any;
    endDate: any;
    setStartDate: any;
    setEndDate: any;
    // setTitle: any;
    // setCompany: any;
    // setLocation: any;
    // setDescription: any;
    // setEmoloymentType: any;
    // employments: IEmployments[];
}

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

const ModalEdit = observer((props: any) => {
    const classes = Styles();
    const {
        modalProfile,
        closeModalProfile,
        // CreateExp,
        startDate,
        endDate,
        setStartDate,
        setEndDate
        // setTitle,
        // setCompany,
        // setLocation,
        // setDescription,
        // setEmoloymentType,
        // employments
    } = props;
    const onChangeFile = (e: any) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.readAsDataURL(file);
        profileStore.uploadCoverImage(file);
    };
    if(profileStore.profile) {

        return (
            <Modal
                // isOpen={modalProfile}
                // onRequestClose={closeModalProfile}
                isOpen={profileStore.modalEditProfile}
                onRequestClose={profileStore.closeModalEditProfile}
                style={customStyles}
                contentLabel="Example Modal">
                <Grid component="nav" className={classes.header} item>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <IconButton
                            // onClick={closeModalProfile}
                            onClick={() => profileStore.closeModalEditProfile()}>
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
                        onClick={() => profileStore.updateProfile()}>
                        <div className={classes.btnDiv}>
                            <span>
                                {profileStore.isLoading ? 'Saving...' : 'Save'}
                            </span>
                        </div>
                    </Fab>
                </Grid>
                <Grid className={classes.darkArea} item>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={(e) => {
                            onChangeFile(e);
                        }}
                    />
                    <label htmlFor="contained-button-file">
                        <IconButton
                            className={classes.camera}
                            aria-label="upload picture"
                            component="span">
                            <CameraAlt className={classes.icon} />
                        </IconButton>
                    </label>
                    <div className={classes.avatarBox}>
                        <Box>
                            <Avatar className={classes.avatar}>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="contained-button-file">
                                    <IconButton
                                        aria-label="upload picture"
                                        component="span">
                                        <CameraAlt className={classes.icon} />
                                    </IconButton>
                                </label>
                            </Avatar>
                        </Box>
                    </div>
                </Grid>
                <form className={classes.form} noValidate>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.textField}
                                name="About"
                                variant="filled"
                                fullWidth
                                id="About"
                                label="About"
                                autoFocus
                                required
                                value={profileStore.profile.about}
                                onChange={(e) => {
                                    if(profileStore.profile) {
                                        profileStore.profile.about = e.target.value
                                    }
                                }
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.textField}
                                name="Headline"
                                variant="filled"
                                multiline
                                fullWidth
                                id="Headline"
                                label="Headline"
                                autoFocus
                                required
                                value={profileStore.profile.headline}
                                onChange={(e) =>
                                    {
                                        if(profileStore.profile) {
                                            profileStore.profile.headline = e.target.value
                                        }
                                    }
                                }
                            />
                        </Grid>
    
                        <Grid item xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-between">
                                    <KeyboardDatePicker
                                        variant="dialog"
                                        format="dd/MM/yyyy"
                                        value={
                                            profileStore.profile.dob || startDate
                                        }
                                        onChange={(date: any) =>
                                            {
                                                if(profileStore.profile) {
                                                    profileStore.profile.dob = date
                                                }
                                            }
                                        }
                                        label="Birthday"
                                        fullWidth
                                        // className={classes.textField}
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
                                            if(profileStore.profile) {
                                                profileStore.profile.gender = parseInt(e.target.value)
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
    } else return null
});

export default ModalEdit;
