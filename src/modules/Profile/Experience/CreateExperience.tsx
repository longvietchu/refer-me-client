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

// const employments = [
//     {
//         value: 'initial',
//         label: 'Choose one...'
//     },
//     {
//         value: 'full',
//         label: 'Full-time'
//     },
//     {
//         value: 'part',
//         label: 'Part-time'
//     },
//     {
//         value: 'contract',
//         label: 'Contract'
//     },
//     {
//         value: 'temporary',
//         label: 'Temporary'
//     },
//     {
//         value: 'internship',
//         label: 'Internship'
//     }
// ];

const CreateExperience = (props: IProps) => {
    const classes = Styles();

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

    // const [employmentType, setEmploymentType] = useState('initial');

    const [selectedDate, setSelectedDate] = useState<Date | null>(
        new Date('2014-08-18T21:11:54')
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setEmploymentType(event.target.value);
    // };

    return (
        <div>
            <Modal
                isOpen={modalExp}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <Grid
                            container
                            justify="space-between"
                            alignItems="center">
                            <Typography variant="h6">Add experience</Typography>
                            <IconButton onClick={closeModal}>
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
                            onChange={(e) => setTitle(e.target.value)}
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
                            onChange={(e) => setCompany(e.target.value)}
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
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </Grid>

                    <Grid item>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-between">
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    views={['month', 'year']}
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Start Date"
                                    value={startDate}
                                    onChange={(date: any) => setStartDate(date)}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date'
                                    }}
                                    style={{ width: '45%' }}
                                />
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    views={['month', 'year']}
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="End Date"
                                    value={endDate}
                                    onChange={(date: any) => setEndDate(date)}
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
                            // value={employmentType}
                            onChange={(e) => setEmoloymentType(e.target.value)}
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

                    <Grid item>
                        <TextField
                            style={{ paddingLeft: 2 }}
                            label="Description"
                            variant="outlined"
                            fullWidth
                            multiline
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Grid>

                    <Grid style={{ alignSelf: 'center' }}>
                        <Button
                            className={classes.btn_post}
                            onClick={CreateExp}>
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Modal>
        </div>
    );
};

export default CreateExperience;
