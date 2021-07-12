import DateFnsUtils from '@date-io/date-fns';
import {
    Button,
    Grid,
    IconButton,
    Paper,
    TextField,
    Typography
} from '@material-ui/core';
import { Close, PhotoCamera } from '@material-ui/icons';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import { loginStore } from '../../Login/loginStore';
import { profileStore } from '../profileStore';
import Styles from './Style';

const CreateProfile = observer(() => {
    const classes = Styles();
    let history = useHistory();
    const [previewAvatar, setPreviewAvatar] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState<any>();
    const onChangeAvatar = (e: any) => {
        e.preventDefault();
        let file = e.target.files[0];
        setPreviewAvatar(URL.createObjectURL(file));
        setSelectedAvatar(file);
        // console.log('select: ', URL.createObjectURL(file));
    };

    const onClickCreateProfile = async () => {
        await profileStore.uploadAvatar(selectedAvatar);
        const isUpdateSuccess = await profileStore.createProfile();
        if (isUpdateSuccess && loginStore.userInfo) {
            history.push(`/profile/${loginStore.userInfo.id}`);
        }
    };

    return (
        <Grid container className={classes.app}>
            <Helmet>
                <title>Refer Me | Profile</title>
            </Helmet>
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
                                <Grid container item alignItems="center">
                                    <Typography>Avatar</Typography>
                                    <div
                                        style={{
                                            margin: '0 12px'
                                        }}>
                                        <input
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            id="select-avatar"
                                            type="file"
                                            onChange={(e) => {
                                                onChangeAvatar(e);
                                            }}
                                        />
                                        <label htmlFor="select-avatar">
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
                                    {previewAvatar.length > 0 && (
                                        <Grid
                                            item
                                            style={{ position: 'relative' }}>
                                            <img
                                                src={previewAvatar}
                                                className={
                                                    classes.preview_image
                                                }
                                            />
                                            <Close
                                                className={classes.closeIcon}
                                                onClick={() => {
                                                    setPreviewAvatar('');
                                                }}
                                            />
                                        </Grid>
                                    )}
                                </Grid>
                                <Grid item>
                                    <TextField
                                        label="about"
                                        fullWidth
                                        value={profileStore.inputProfile.about}
                                        onChange={(e) =>
                                            (profileStore.inputProfile.about =
                                                e.target.value)
                                        }
                                    />
                                </Grid>

                                <Grid container item>
                                    <Grid item>
                                        <MuiPickersUtilsProvider
                                            utils={DateFnsUtils}>
                                            <DatePicker
                                                autoOk
                                                clearable
                                                disableFuture
                                                openTo="year"
                                                format="dd/MM/yyyy"
                                                views={[
                                                    'year',
                                                    'month',
                                                    'date'
                                                ]}
                                                label="Date of birth"
                                                value={
                                                    profileStore.inputProfile
                                                        .dob
                                                }
                                                onChange={(date: any) =>
                                                    (profileStore.inputProfile.dob =
                                                        date)
                                                }
                                            />
                                        </MuiPickersUtilsProvider>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Button
                                className={classes.btn}
                                onClick={(e) => onClickCreateProfile()}>
                                {profileStore.isLoading
                                    ? 'Creating...'
                                    : 'Create Profile'}
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
});

export default CreateProfile;
