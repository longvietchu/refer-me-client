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

import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import Modal from 'react-modal';

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

import CloseIcon from '@material-ui/icons/Close';

import Styles from './Style';

import { loginStore } from '../../Login/loginStore';
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

interface IProps {
    modalEdu: boolean;
    closeModalEdu: VoidFunction;
    startDate: any;
    endDate: any;
    setStartDate: any;
    setEndDate: any;
}

const CreateEducation = observer((props: IProps) => {
    const classes = Styles();
    const { enqueueSnackbar } = useSnackbar();

    const {
        modalEdu,
        closeModalEdu,
        startDate,
        endDate,
        setStartDate,
        setEndDate
    } = props;

    return (
        <div>
            <Modal
                isOpen={educationStore.modalCreateEducation}
                onRequestClose={educationStore.closeModalCreateEducation}
                style={customStyles}
                contentLabel="Example Modal">
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <Grid
                            container
                            justify="space-between"
                            alignItems="center">
                            <Typography variant="h6">Add education</Typography>
                            <IconButton
                                onClick={() =>
                                    educationStore.closeModalCreateEducation()
                                }>
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Divider />

                    <Grid item>
                        {educationStore.organization && (
                            <Autocomplete
                                id="organization"
                                options={educationStore.organization}
                                getOptionLabel={(option: any) => option.name}
                                onChange={(event: any, value: any) => {
                                    if (value) {
                                        educationStore.title = value.name;
                                        educationStore.organization_id =
                                            value._id;
                                        // console.log('value', value);
                                    }
                                }}
                                onInputChange={(event: any, value: any) => {
                                    if (value) {
                                        educationStore.title = value.name;
                                    }
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
                                        label="Organization"
                                        variant="outlined"
                                    />
                                )}
                            />
                        )}
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
                            className={classes.btn_save}
                            onClick={() => {
                                let createSuccess =
                                    educationStore.createEducationOfuser();
                                if (createSuccess) {
                                    if (loginStore.userInfo) {
                                        educationStore.getEducationOfUser(
                                            loginStore.userInfo.id
                                        );
                                        educationStore.closeModalCreateEducation();
                                        enqueueSnackbar(
                                            'Create education success!',
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

export default CreateEducation;
