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

import Autocomplete from '@material-ui/lab/Autocomplete';

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
import { educationStore } from './educationStore';
import { observer } from 'mobx-react-lite';

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

const CreateEducation = observer((props: IProps) => {
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
                        {/* <TextField
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
                            onChange={(e) => {
                                educationStore.title = e.target.value
                                educationStore.searchOrganization(e.target.value);
                            }
                            }
                            value={educationStore.title}
                        /> */}
                        <Autocomplete
                            id="combo-box-demo"
                            options={educationStore.searchResult}
                            getOptionLabel={(option: any) => option.name}
                            style={{ width: 300 }}
                            getOptionSelected={(option, value) =>
                                option.name === value.name
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Combo box"
                                    variant="outlined"
                                    // onChange={(e) => {
                                    //     educationStore.title = e.target.value;
                                    //     educationStore.searchOrganization(
                                    //         e.target.value
                                    //     );
                                    //     // educationStore.organization_id =
                                    //     console.log('11', e);
                                    // }}
                                    // value={educationStore.title}
                                />
                            )}
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
                                // onChange={(e) => setCompany(e.target.value)}
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
                                <DatePicker
                                    variant="inline"
                                    openTo="year"
                                    views={['year']}
                                    onChange={(date: any) =>
                                        (educationStore.joined_at = date)
                                    }
                                    value={educationStore.joined_at}
                                    label="Start Year"
                                    style={{ width: '45%' }}
                                />
                                <DatePicker
                                    variant="inline"
                                    openTo="year"
                                    views={['year']}
                                    onChange={(date: any) =>
                                        (educationStore.graduated_at = date)
                                    }
                                    value={educationStore.graduated_at}
                                    label="End Year (or expected)"
                                    style={{ width: '45%' }}
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
                            onChange={(e) =>
                                (educationStore.description = e.target.value)
                            }
                            value={educationStore.description}
                        />
                    </Grid>

                    <Grid style={{ alignSelf: 'center' }}>
                        <Button
                            className={classes.btn_post}
                            onClick={() =>
                                educationStore.createEducationOfuser()
                            }>
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Modal>
        </div>
    );
});

export default CreateEducation;
