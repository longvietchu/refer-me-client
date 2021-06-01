import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import {
    Grid,
    Typography,
    TextField,
    Divider,
    InputAdornment,
    Button,
    IconButton,
    ButtonBase
} from '@material-ui/core';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
    DatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import Modal from 'react-modal';

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CloseIcon from '@material-ui/icons/Close';

import Styles from './Style';

import { educationStore } from './educationStore';

import { observer } from 'mobx-react-lite';
import { useSnackbar } from 'notistack';

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
        height: '70%',
        width: '30%',
        paddingBottom: 5,
        paddingTop: 10,
        borderRadius: 10
    }
};

const EditEducation = observer(() => {
    const classes = Styles();
    const { enqueueSnackbar } = useSnackbar();

    if (educationStore.selectedEducation) {
        return (
            <div>
                <Modal
                    isOpen={educationStore.modalEditEducation}
                    onRequestClose={educationStore.closeModalEditEducation}
                    style={customStyles}
                    contentLabel="Example Modal">
                    <Grid container direction="column" spacing={3}>
                        <Grid item>
                            <Grid
                                container
                                justify="space-between"
                                alignItems="center">
                                <Typography variant="h6">
                                    Edit education
                                </Typography>
                                <IconButton
                                    onClick={() =>
                                        educationStore.closeModalEditEducation()
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
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocationOnIcon />
                                        </InputAdornment>
                                    )
                                }}
                                value={educationStore.selectedEducation.title}
                                onChange={(e) => {
                                    if (educationStore.selectedEducation) {
                                        educationStore.selectedEducation.title =
                                            e.target.value;
                                    }
                                }}
                            />
                        </Grid>
                        {/* <Grid item>
                            <TextField
                                label="Degree"
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SchoolIcon />
                                        </InputAdornment>
                                    )
                                }}
                                value={
                                    educationStore.selectedEducation.description
                                }
                                onChange={(e) => {
                                    if (educationStore.selectedEducation) {
                                        educationStore.selectedEducation.description =
                                            e.target.value;
                                    }
                                }}
                            />
                        </Grid> */}
                        <Grid item>
                            <TextField
                                label="Field of study"
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <WorkIcon />
                                        </InputAdornment>
                                    )
                                }}
                                // onChange={(e) => setLocation(e.target.value)}
                            />
                        </Grid>

                        <Grid item>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-between">
                                    <KeyboardDatePicker
                                        variant="inline"
                                        openTo="year"
                                        views={['year']}
                                        label="Start Year"
                                        keyboardIcon={<KeyboardArrowDownIcon />}
                                        style={{ width: '45%' }}
                                        value={
                                            educationStore.selectedEducation
                                                .joined_at
                                        }
                                        onChange={(date: any) => {
                                            if (
                                                educationStore.selectedEducation
                                            ) {
                                                educationStore.selectedEducation.joined_at =
                                                    date;
                                            }
                                        }}
                                    />
                                    <KeyboardDatePicker
                                        variant="inline"
                                        openTo="year"
                                        views={['year']}
                                        label="End Year (or expected)"
                                        keyboardIcon={<KeyboardArrowDownIcon />}
                                        style={{ width: '45%' }}
                                        value={
                                            educationStore.selectedEducation
                                                .graduated_at
                                        }
                                        onChange={(date: any) => {
                                            if (
                                                educationStore.selectedEducation
                                            ) {
                                                educationStore.selectedEducation.graduated_at =
                                                    date;
                                            }
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </Grid>

                        <Grid item>
                            <TextField
                                style={{ paddingLeft: 2 }}
                                label="Description"
                                variant="outlined"
                                fullWidth
                                multiline
                                value={
                                    educationStore.selectedEducation.description
                                }
                                onChange={(e) => {
                                    if (educationStore.selectedEducation) {
                                        educationStore.selectedEducation.description =
                                            e.target.value;
                                    }
                                }}
                            />
                        </Grid>

                        <Grid style={{ alignSelf: 'center' }}>
                            <Button
                                className={classes.btn_post}
                                onClick={(_id: any) => {
                                    let editSuccess =
                                        educationStore.updateEducationOfUser(
                                            _id
                                        );
                                    if (editSuccess) {
                                        enqueueSnackbar(
                                            'Edit experience success!',
                                            { variant: 'success' }
                                        );
                                    }
                                }}>
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </Modal>
            </div>
        );
    } else return null;
});

export default EditEducation;
