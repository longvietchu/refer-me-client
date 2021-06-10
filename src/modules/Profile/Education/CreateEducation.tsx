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

const CreateEducation = observer(() => {
    const classes = Styles();

    return (
        <div>
            <Modal
                isOpen={profileStore.modalEducation.create}
                onRequestClose={() =>
                    (profileStore.modalEducation.create = false)
                }
                style={customStyles}
                contentLabel="Create Education Modal">
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <Grid
                            container
                            justify="space-between"
                            alignItems="center">
                            <Typography variant="h6">Add education</Typography>
                            <IconButton
                                onClick={() =>
                                    (profileStore.modalEducation.create = false)
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
                            onChange={(e) =>
                                (profileStore.inputEducation.title =
                                    e.target.value)
                            }
                            value={profileStore.inputEducation.title}
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
                            onChange={(e) =>
                                (profileStore.inputEducation.description =
                                    e.target.value)
                            }
                            value={profileStore.inputEducation.description}
                        />
                    </Grid>

                    <Grid item>
                        <Grid container justify="space-between">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    autoOk
                                    clearable
                                    format="yyyy"
                                    views={['year']}
                                    value={
                                        profileStore.inputEducation.joined_at
                                    }
                                    onChange={(date: any) => {
                                        profileStore.inputEducation.joined_at =
                                            date;
                                    }}
                                    label="Joined year"
                                    style={{ width: '45%' }}
                                />
                                <DatePicker
                                    autoOk
                                    clearable
                                    format="yyyy"
                                    views={['year']}
                                    value={
                                        profileStore.inputEducation.graduated_at
                                    }
                                    onChange={(date: any) => {
                                        profileStore.inputEducation.graduated_at =
                                            date;
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
                            onClick={(e) => profileStore.createEducation()}>
                            {profileStore.isLoading ? 'Saving...' : 'Save'}
                        </Button>
                    </Grid>
                </Grid>
            </Modal>
        </div>
    );
});

export default CreateEducation;
