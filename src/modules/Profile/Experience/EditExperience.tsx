import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import {
    Grid,
    Typography,
    TextField,
    Divider,
    InputAdornment,
    Button,
    IconButton
} from '@material-ui/core';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import Modal from 'react-modal';

import WorkIcon from '@material-ui/icons/Work';
import BusinessIcon from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CloseIcon from '@material-ui/icons/Close';

import Styles from './Style';

import { IEmployments } from '../ProfileContainer';
import { experienceStore } from './experienceStore';
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
        height: '80%',
        width: '30%',
        paddingBottom: 5,
        paddingTop: 10,
        borderRadius: 10
    }
};

interface IProps {
    CreateExp: any;
    modalExp: boolean;
    closeModal: VoidFunction;
    startDate: any;
    endDate: any;
    setStartDate: any;
    setEndDate: any;
    setTitle: any;
    setCompany: any;
    setLocation: any;
    setDescription: any;
    setEmoloymentType: any;
    employments: IEmployments[];
}

const EditExperience = observer((props: IProps) => {
    const classes = Styles();
    const { enqueueSnackbar } = useSnackbar();
    const {
        modalExp,
        closeModal,
        CreateExp,
        startDate,
        endDate,
        setStartDate,
        setEndDate,
        setTitle,
        setCompany,
        setLocation,
        setDescription,
        setEmoloymentType,
        employments
    } = props;
    if (experienceStore.selectedExperience) {
        return (
            <div>
                <Modal
                    isOpen={experienceStore.modalEditExperience}
                    onRequestClose={experienceStore.closeModalEditExperience}
                    style={customStyles}
                    contentLabel="Example Modal">
                    <Grid container direction="column" spacing={3}>
                        <Grid item>
                            <Grid
                                container
                                justify="space-between"
                                alignItems="center">
                                <Typography variant="h6">
                                    Edit experience
                                </Typography>
                                <IconButton
                                    onClick={() =>
                                        experienceStore.closeModalEditExperience()
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
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <WorkIcon />
                                        </InputAdornment>
                                    )
                                }}
                                onChange={(e) => {
                                    if(experienceStore.selectedExperience) {
                                        experienceStore.selectedExperience.job_title = e.target.value
                                    }
                                }
                                }
                                value={
                                    experienceStore.selectedExperience.job_title
                                }
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Company"
                                required
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <BusinessIcon />
                                        </InputAdornment>
                                    )
                                }}
                                onChange={(e) => {
                                    if(experienceStore.selectedExperience) {
                                        experienceStore.selectedExperience.company = e.target.value
                                    }
                                }}
                                value = {experienceStore.selectedExperience.company}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Job location"
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
                                onChange={(e) => {
                                    if(experienceStore.selectedExperience) {
                                        experienceStore.selectedExperience.location = e.target.value
                                    }
                                }}
                                value = {experienceStore.selectedExperience.location}
                            />
                        </Grid>

                        <Grid item>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-between">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Start Date"
                                        onChange={(date: any) => {
                                            if(experienceStore.selectedExperience) {
                                                experienceStore.selectedExperience.joined_at = date
                                            }
                                        }}
                                        value = {experienceStore.selectedExperience.joined_at}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date'
                                        }}
                                        style={{ width: '45%' }}
                                    />
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="End Date"
                                        onChange={(date: any) => {
                                            if(experienceStore.selectedExperience) {
                                                experienceStore.selectedExperience.left_at = date
                                            }
                                        }}
                                        value = {experienceStore.selectedExperience.left_at}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date'
                                        }}
                                        style={{ width: '45%' }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item>
                            <TextField
                                id="outlined-select-currency-native"
                                label="Employment type"
                                required
                                variant="outlined"
                                fullWidth
                                select
                                onChange={(e) => {
                                    if(experienceStore.selectedExperience) {
                                        experienceStore.selectedExperience.employment_type = e.target.value
                                    }
                                }}
                                value = {experienceStore.selectedExperience.employment_type}
                                SelectProps={{
                                    native: true
                                }}>
                                {employments.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}>
                                        {option.value}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item>
                            <TextField
                                style={{ paddingLeft: 2 }}
                                label="Description"
                                variant="outlined"
                                fullWidth
                                multiline
                                onChange={(e) => {
                                    if(experienceStore.selectedExperience) {
                                        experienceStore.selectedExperience.job_description = e.target.value
                                    }
                                }}
                                value = {experienceStore.selectedExperience.job_description}
                            />
                        </Grid>

                        <Grid style={{ alignSelf: 'center' }}>
                            <Button
                                className={classes.btn_post}
                                onClick={(_id: any) => {
                                    let editSuccess = experienceStore.updateExperienceOfUser(_id);
                                    if(editSuccess) {
                                        enqueueSnackbar('Edit experience success!', { variant: 'success' });
                                    }
                                }
        
                                }>
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </Modal>
            </div>
        );
    } else return null;
});

export default EditExperience;
