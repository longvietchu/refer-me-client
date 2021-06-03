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

import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import Autocomplete from '@material-ui/lab/Autocomplete';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import Modal from 'react-modal';

import WorkIcon from '@material-ui/icons/Work';
import BusinessIcon from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CloseIcon from '@material-ui/icons/Close';

import Styles from './Style';

import { IEmployments } from '../ProfileContainer';

import { loginStore } from '../../Login/loginStore';
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

const CreateExperience = observer((props: IProps) => {
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

    return (
        <div>
            <Modal
                isOpen={experienceStore.modalCreateExperience}
                onRequestClose={experienceStore.closeModalCreateExperience}
                style={customStyles}
                contentLabel="Example Modal">
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <Grid
                            container
                            justify="space-between"
                            alignItems="center">
                            <Typography variant="h6">Add experience</Typography>
                            <IconButton
                                onClick={() =>
                                    experienceStore.closeModalCreateExperience()
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
                            value={experienceStore.job_title}
                            onChange={(e) =>
                                (experienceStore.job_title = e.target.value)
                            }
                        />
                    </Grid>
                    <Grid item>
                        {experienceStore.organization && (
                            <Autocomplete
                                id="company"
                                options={experienceStore.organization}
                                getOptionLabel={(option: any) => option.name}
                                onChange={(event: any, value: any) => {
                                    if (value)
                                        return (experienceStore.company =
                                            value.name);
                                }}
                                renderOption={(option) => {
                                    return (
                                        <React.Fragment>
                                            <span>
                                                <img
                                                    src={option.avatar}
                                                    style={{
                                                        height: 20,
                                                        width: 20
                                                    }}
                                                />{' '}
                                                {option.name}
                                            </span>
                                        </React.Fragment>
                                    );
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Company"
                                        variant="outlined"
                                    />
                                )}
                            />
                        )}
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
                            value={experienceStore.location}
                            onChange={(e) =>
                                (experienceStore.location = e.target.value)
                            }
                        />
                    </Grid>

                    <Grid item>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-between">
                                <DatePicker
                                    variant="inline"
                                    views={['month', 'year']}
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Start Date"
                                    value={experienceStore.joined_at}
                                    onChange={(date: any) =>
                                        (experienceStore.joined_at = date)
                                    }
                                    style={{ width: '45%' }}
                                />
                                <DatePicker
                                    variant="inline"
                                    views={['month', 'year']}
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="End Date"
                                    value={experienceStore.left_at}
                                    onChange={(date: any) =>
                                        (experienceStore.left_at = date)
                                    }
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
                            value={experienceStore.employment_type}
                            onChange={(e) =>
                                (experienceStore.employment_type =
                                    e.target.value)
                            }
                            SelectProps={{
                                native: true
                            }}>
                            {employments.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid style={{ alignSelf: 'center' }}>
                        <Button
                            className={classes.btn_save}
                            onClick={() => {
                                let createSuccess =
                                    experienceStore.createExperienceOfuser();
                                if (createSuccess) {
                                    if (loginStore.userInfo) {
                                        experienceStore.getExperienceOfUser(
                                            loginStore.userInfo.id
                                        );
                                        experienceStore.closeModalCreateExperience();
                                        enqueueSnackbar(
                                            'Create experience success!',
                                            {
                                                variant: 'success'
                                            }
                                        );
                                    }
                                }
                            }}>
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Modal>
        </div>
    );
});

export default CreateExperience;
