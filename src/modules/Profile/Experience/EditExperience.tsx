import DateFnsUtils from '@date-io/date-fns';
import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    MenuItem,
    TextField,
    Typography
} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import BusinessIcon from '@material-ui/icons/Business';
import CloseIcon from '@material-ui/icons/Close';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WorkIcon from '@material-ui/icons/Work';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Modal from 'react-modal';
import { IEmploymentType, profileStore } from '../profileStore';
import Styles from './Style';

Modal.setAppElement('#root');
const defaultTheme = createMuiTheme();
Object.assign(defaultTheme, {
    overrides: {
        MUIRichTextEditor: {
            root: {
                border: '1px solid gray'
            },
            editor: {
                padding: 8
            },
            placeHolder: {
                padding: 8,
                position: 'static'
            },
            toolbar: { borderBottom: '1px solid gray' }
        }
    }
});

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: '80%',
        width: '50%',
        paddingBottom: 5,
        paddingTop: 10,
        borderRadius: 8
    }
};

const employment_types = [
    {
        value: IEmploymentType.NONE,
        label: 'Choose one...'
    },
    {
        value: IEmploymentType.FULL_TIME,
        label: 'Full-time'
    },
    {
        value: IEmploymentType.PART_TIME,
        label: 'Part-time'
    },
    {
        value: IEmploymentType.CONTRACT,
        label: 'Contract'
    },
    {
        value: IEmploymentType.TEMPORARY,
        label: 'Temporary'
    },
    {
        value: IEmploymentType.INTERNSHIP,
        label: 'Internship'
    }
];

const EditExperience = observer(() => {
    const classes = Styles();
    if (profileStore.selectedExperience) {
        return (
            <div>
                <Modal
                    isOpen={profileStore.modalExperience.edit}
                    onRequestClose={() =>
                        (profileStore.modalExperience.edit = false)
                    }
                    onAfterOpen={() => {
                        if (
                            profileStore.selectedExperience &&
                            profileStore.selectedExperience.left_at
                        ) {
                            profileStore.modalExperience.presentJob = false;
                        } else {
                            profileStore.modalExperience.presentJob = true;
                        }
                    }}
                    onAfterClose={() => {
                        profileStore.modalExperience.presentJob = true;
                    }}
                    style={customStyles}
                    contentLabel="Edit Experience Modal">
                    <Grid container direction="column" spacing={3}>
                        <Grid item>
                            <Grid
                                container
                                justify="space-between"
                                alignItems="center">
                                <Typography variant="h6">
                                    Update experience
                                </Typography>
                                <IconButton
                                    onClick={() =>
                                        (profileStore.modalExperience.edit =
                                            false)
                                    }>
                                    <CloseIcon />
                                </IconButton>
                            </Grid>
                        </Grid>

                        <Divider />

                        <Grid item>
                            <TextField
                                label="Job title"
                                required
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <WorkIcon />
                                        </InputAdornment>
                                    )
                                }}
                                value={
                                    profileStore.selectedExperience.job_title
                                }
                                onChange={(e) => {
                                    if (profileStore.selectedExperience) {
                                        profileStore.selectedExperience.job_title =
                                            e.target.value;
                                    }
                                }}
                                error={
                                    profileStore.validateInput.job_title !== ''
                                        ? true
                                        : false
                                }
                                helperText={
                                    profileStore.validateInput.job_title
                                }
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Company"
                                required
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <BusinessIcon />
                                        </InputAdornment>
                                    )
                                }}
                                value={profileStore.selectedExperience.company}
                                onChange={(e) => {
                                    if (profileStore.selectedExperience) {
                                        profileStore.selectedExperience.company =
                                            e.target.value;
                                    }
                                }}
                                error={
                                    profileStore.validateInput.company !== ''
                                        ? true
                                        : false
                                }
                                helperText={profileStore.validateInput.company}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Job location"
                                required
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocationOnIcon />
                                        </InputAdornment>
                                    )
                                }}
                                value={profileStore.selectedExperience.location}
                                onChange={(e) => {
                                    if (profileStore.selectedExperience) {
                                        profileStore.selectedExperience.location =
                                            e.target.value;
                                    }
                                }}
                                error={
                                    profileStore.validateInput.location !== ''
                                        ? true
                                        : false
                                }
                                helperText={profileStore.validateInput.location}
                            />
                        </Grid>

                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={
                                            profileStore.modalExperience
                                                .presentJob
                                        }
                                        onChange={() =>
                                            (profileStore.modalExperience.presentJob =
                                                !profileStore.modalExperience
                                                    .presentJob)
                                        }
                                        name="presentJob"
                                        color="primary"
                                    />
                                }
                                label="Is this your present job?"
                            />
                        </Grid>

                        <Grid item>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-between">
                                    <DatePicker
                                        className={classes.date_picker}
                                        style={{ marginRight: 20 }}
                                        autoOk
                                        clearable
                                        format="dd/MM/yyyy"
                                        label="Joined Date"
                                        value={
                                            profileStore.selectedExperience
                                                .joined_at
                                        }
                                        onChange={(date: any) => {
                                            if (
                                                profileStore.selectedExperience
                                            ) {
                                                profileStore.selectedExperience.joined_at =
                                                    date;
                                            }
                                        }}
                                    />
                                    {!profileStore.modalExperience
                                        .presentJob && (
                                        <DatePicker
                                            className={classes.date_picker}
                                            autoOk
                                            clearable
                                            format="dd/MM/yyyy"
                                            label="Left Date"
                                            value={
                                                profileStore.selectedExperience
                                                    .left_at
                                            }
                                            onChange={(date: any) => {
                                                if (
                                                    profileStore.selectedExperience
                                                ) {
                                                    profileStore.selectedExperience.left_at =
                                                        date;
                                                }
                                            }}
                                        />
                                    )}
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item>
                            <TextField
                                id="outlined-select-currency-native"
                                label="Employment type"
                                fullWidth
                                select
                                value={
                                    profileStore.selectedExperience
                                        .employment_type
                                }
                                onChange={(e) => {
                                    if (profileStore.selectedExperience) {
                                        profileStore.selectedExperience.employment_type =
                                            e.target.value;
                                    }
                                }}>
                                {employment_types.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item>
                            <TextField
                                label="Description"
                                fullWidth
                                multiline
                                rows={4}
                                value={
                                    profileStore.selectedExperience
                                        .job_description
                                }
                                onChange={(e) => {
                                    if (profileStore.selectedExperience) {
                                        profileStore.selectedExperience.job_description =
                                            e.target.value;
                                    }
                                }}
                            />
                        </Grid>

                        <Grid>
                            <Button
                                className={classes.btn_post}
                                onClick={() => profileStore.updateExperience()}>
                                {profileStore.isLoading ? 'Saving...' : 'Save'}
                            </Button>
                        </Grid>
                    </Grid>
                </Modal>
            </div>
        );
    } else return null;
});

export default EditExperience;
