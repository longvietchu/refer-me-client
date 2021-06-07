import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    Button,
    Grid,
    IconButton,
    Paper,
    TextField,
    Typography
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import { Helmet } from 'react-helmet';
import Header from '../../../common/components/header/Header';
import Styles from './Style';
import { observer } from 'mobx-react-lite';
import { profileStore } from '../profileStore';
import { loginStore } from '../../Login/loginStore';

const CreateProfile = observer(() => {
    const classes = Styles();
    const [date, setDate] = useState(new Date());
    const onChangeAvatar = (e: any) => {
        e.preventDefault();
        let file = e.target.files[0];
        profileStore.uploadAvatar(file);
    };

    return (
        <Grid container className={classes.app}>
            <Helmet>
                <title>Refer Me | Create Profile</title>
            </Helmet>
            <Grid item container className={classes.app__header}>
                <Header />
            </Grid>
            <Grid item container className={classes.app__body}>
                <Grid item className={classes.body__feed} xs={12} md={7}>
                    <Grid item className={classes.feed__form}>
                        <Paper>
                            <Typography
                                variant="h3"
                                style={{
                                    color: '#0a66c2',
                                    fontSize: 'var(--font-size-medium)',
                                    fontWeight: 'bold',
                                    padding: 14
                                }}>
                                Create your profile
                            </Typography>

                            <Grid
                                container
                                direction="column"
                                spacing={3}
                                style={{ padding: 14 }}>
                                <Grid item>
                                    <TextField
                                        label="about"
                                        variant="filled"
                                        fullWidth
                                        value={profileStore.inputProfile.about}
                                        onChange={(e) =>
                                            (profileStore.inputProfile.about =
                                                e.target.value)
                                        }
                                    />
                                </Grid>

                                <Grid container item justify="space-around">
                                    <Grid item>
                                        <MuiPickersUtilsProvider
                                            utils={DateFnsUtils}>
                                            <DatePicker
                                                variant="dialog"
                                                format="MM/dd/yyyy"
                                                label="Date of birth"
                                                onChange={(date: any) =>
                                                    (profileStore.inputProfile.dob =
                                                        date)
                                                }
                                                value={
                                                    profileStore.inputProfile
                                                        .dob
                                                }
                                            />
                                        </MuiPickersUtilsProvider>
                                    </Grid>
                                    <Grid item>
                                        <Typography>Avatar</Typography>
                                        <div>
                                            <input
                                                accept="image/*"
                                                style={{ display: 'none' }}
                                                id="icon-button-file"
                                                type="file"
                                                onChange={(e) => {
                                                    onChangeAvatar(e);
                                                }}
                                            />
                                            <label htmlFor="icon-button-file">
                                                <IconButton
                                                    color="primary"
                                                    aria-label="upload picture"
                                                    component="span"
                                                    style={{
                                                        color: '#0a66c2'
                                                    }}>
                                                    <PhotoCamera />
                                                </IconButton>
                                            </label>
                                        </div>
                                        {loginStore.userInfo && (
                                            <div>
                                                <img
                                                    id="output"
                                                    src={
                                                        loginStore.userInfo
                                                            .avatar
                                                    }
                                                    width="100"
                                                    height="100"
                                                />
                                            </div>
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Button className={classes.btn}>
                                Create Profile
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
});

export default CreateProfile;
