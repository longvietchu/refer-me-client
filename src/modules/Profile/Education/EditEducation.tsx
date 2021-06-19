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
import Autocomplete from '@material-ui/lab/Autocomplete';

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
import { loginStore } from '../../Login/loginStore';

import { observer } from 'mobx-react-lite';
import { useSnackbar } from 'notistack';
import { organizationStore } from '../../Organization/organizationStore';

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

    if (educationStore.organization) {
        console.log('aa', educationStore.organization.slice());
    }

    if (educationStore.selectedEducation) {
        console.log('titles', educationStore.selectedEducation.title);
        console.log('des', educationStore.selectedEducation.description);

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

                        <Grid item>
                            <Autocomplete
                                value={educationStore.selectedEducation.title}
                                inputValue={
                                    educationStore.selectedEducation.title
                                }
                                id="School"
                                options={educationStore.organization.slice()}
                                onChange={(event: any, value: any) => {
                                    if (
                                        value &&
                                        educationStore.selectedEducation
                                    ) {
                                        educationStore.organization_id =
                                            value._id;
                                        educationStore.selectedEducation.title =
                                            value.title;
                                    }
                                }}
                                onInputChange={(event: any, value: any) => {
                                    if (educationStore.selectedEducation) {
                                        return (educationStore.selectedEducation.title =
                                            value.title);
                                    }
                                }}
                                renderOption={(option: any) => {
                                    return (
                                        <React.Fragment>
                                            <span>
                                                <img
                                                    src={option.avatar}
                                                    style={{
                                                        height: 20,
                                                        width: 20,
                                                        paddingRight: 2
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
                                        label="School"
                                        required
                                        variant="outlined"
                                        fullWidth
                                    />
                                )}
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

                        <Divider />

                        <Grid item style={{ alignSelf: 'flex-end' }}>
                            <Button
                                className={classes.btn_delete}
                                onClick={(_id: any) => {
                                    let deleteSuccess =
                                        educationStore.deleteEducationOfUser(
                                            _id
                                        );
                                    if (deleteSuccess) {
                                        enqueueSnackbar(
                                            'delete education success!',
                                            { variant: 'success' }
                                        );
                                        loginStore.userInfo &&
                                            educationStore.getEducationOfUser(
                                                loginStore.userInfo.id
                                            );
                                    }
                                }}>
                                Delete
                            </Button>
                            <Button
                                className={classes.btn_save}
                                onClick={(_id: any) => {
                                    let editSuccess =
                                        educationStore.updateEducationOfUser(
                                            _id
                                        );
                                    if (editSuccess) {
                                        enqueueSnackbar(
                                            'Edit education success!',
                                            { variant: 'success' }
                                        );
                                        loginStore.userInfo &&
                                            educationStore.getEducationOfUser(
                                                loginStore.userInfo.id
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
