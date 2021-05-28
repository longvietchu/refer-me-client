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

import { IEmployments } from '../ProfileContainer';

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

interface IProps {
    // CreateExp: any;
    modalEdu: boolean;
    closeModalEdu: VoidFunction;
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

const CreateEducation = (props: IProps) => {
    const classes = Styles();

    const {
        modalEdu,
        closeModalEdu,
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

    return (
        <div>
            <Modal
                isOpen={modalEdu}
                onRequestClose={closeModalEdu}
                style={customStyles}
                contentLabel="Example Modal">
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <Grid
                            container
                            justify="space-between"
                            alignItems="center">
                            <Typography variant="h6">Add education</Typography>
                            <IconButton onClick={closeModalEdu}>
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
                            // onChange={(e) => setTitle(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
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
                            // onChange={(e) => setCompany(e.target.value)}
                        />
                    </Grid>
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
                                    value={startDate}
                                    onChange={(date: any) => setStartDate(date)}
                                    label="Start Year"
                                    keyboardIcon={<KeyboardArrowDownIcon />}
                                    style={{ width: '45%' }}
                                />
                                <KeyboardDatePicker
                                    variant="inline"
                                    openTo="year"
                                    views={['year']}
                                    value={endDate}
                                    onChange={(date: any) => setEndDate(date)}
                                    label="End Year (or expected)"
                                    keyboardIcon={<KeyboardArrowDownIcon />}
                                    style={{ width: '45%' }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </Grid>
                    {/* <Grid item>
                        <TextField
                            id="outlined-select-currency-native"
                            label="Employment type"
                            required
                            variant="outlined"
                            fullWidth
                            select
                            // value={employmentType}
                            // onChange={(e) => setEmoloymentType(e.target.value)}
                            SelectProps={{
                                native: true
                            }}>
                            {employments.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Grid> */}

                    <Grid item>
                        <TextField
                            style={{ paddingLeft: 2 }}
                            label="Description"
                            variant="outlined"
                            fullWidth
                            multiline
                            // onChange={(e) => setDescription(e.target.value)}
                        />
                    </Grid>

                    <Grid style={{ alignSelf: 'center' }}>
                        <Button
                            className={classes.btn_post}
                            // onClick={CreateExp}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Modal>
        </div>
    );
};

export default CreateEducation;
