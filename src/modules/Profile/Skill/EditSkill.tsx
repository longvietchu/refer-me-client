import React from 'react';
import {
    Button,
    Divider,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SchoolIcon from '@material-ui/icons/School';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { observer } from 'mobx-react-lite';
import Modal from 'react-modal';
import { profileStore } from '../profileStore';
import Styles from './Style';

Modal.setAppElement('#root');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: '70%',
        width: '50%',
        paddingBottom: 5,
        paddingTop: 10,
        borderRadius: 8
    }
};

const EditSkill = observer(() => {
    const classes = Styles();

    return (
        <div>
            <Modal
                isOpen={profileStore.modalSkill.edit}
                onRequestClose={() => (profileStore.modalSkill.edit = false)}
                style={customStyles}
                contentLabel="Update Education Modal">
                {profileStore.selectedEducation && (
                    <Grid container direction="column" spacing={3}>
                        <Grid item>
                            <Grid
                                container
                                justify="space-between"
                                alignItems="center">
                                <Typography variant="h6">
                                    Update education
                                </Typography>
                                <IconButton
                                    onClick={() =>
                                        (profileStore.modalSkill.edit = false)
                                    }>
                                    <CloseIcon />
                                </IconButton>
                            </Grid>
                        </Grid>

                        <Divider />

                        <Grid item>
                            <TextField
                                label="School"
                                required
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocationOnIcon />
                                        </InputAdornment>
                                    )
                                }}
                                onChange={(e) => {
                                    if (profileStore.selectedEducation) {
                                        profileStore.selectedEducation.title =
                                            e.target.value;
                                    }
                                }}
                                value={profileStore.selectedEducation.title}
                                error={
                                    profileStore.validateInput.title !== ''
                                        ? true
                                        : false
                                }
                                helperText={profileStore.validateInput.title}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Description"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SchoolIcon />
                                        </InputAdornment>
                                    )
                                }}
                                onChange={(e) => {
                                    if (profileStore.selectedEducation) {
                                        profileStore.selectedEducation.description =
                                            e.target.value;
                                    }
                                }}
                                value={
                                    profileStore.selectedEducation.description
                                }
                            />
                        </Grid>

                        <Grid item>
                            <Grid container justify="space-between">
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker
                                        autoOk
                                        clearable
                                        openTo="year"
                                        format="yyyy"
                                        views={['year']}
                                        value={
                                            profileStore.selectedEducation
                                                .joined_at
                                        }
                                        onChange={(date: any) => {
                                            if (
                                                profileStore.selectedEducation
                                            ) {
                                                profileStore.inputEducation.joined_at =
                                                    date;
                                            }
                                        }}
                                        label="Joined year"
                                        style={{ width: '45%' }}
                                    />
                                    <DatePicker
                                        autoOk
                                        clearable
                                        openTo="year"
                                        format="yyyy"
                                        views={['year']}
                                        value={
                                            profileStore.selectedEducation
                                                .graduated_at
                                        }
                                        onChange={(date: any) => {
                                            if (
                                                profileStore.selectedEducation
                                            ) {
                                                profileStore.selectedEducation.graduated_at =
                                                    date;
                                            }
                                        }}
                                        label="Graduated year (or expected)"
                                        style={{ width: '45%' }}
                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>
                        </Grid>

                        <Grid>
                            <Button
                                className={classes.btn_post}
                                onClick={(e) => profileStore.updateEducation()}>
                                {profileStore.isLoading ? 'Saving...' : 'Save'}
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </Modal>
        </div>
    );
});

export default EditSkill;
