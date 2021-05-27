import React from 'react';
import Styles from './Style';

import {
    Grid,
    Paper,
    IconButton,
    Typography,
    Fab,
    Box,
    Avatar,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select
} from '@material-ui/core';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
    DatePicker
} from '@material-ui/pickers';

import Modal from 'react-modal';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import { CameraAlt, Close } from '@material-ui/icons';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: '80%',
        width: '50%',
        // paddingBottom: 5,
        // paddingTop: 10,
        borderRadius: 10,
        padding: 0
    }
};

interface IProps {
    // CreateExp: any;
    modalProfile: boolean;
    closeModalProfile: VoidFunction;
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

const genders = [
    {
        value: '0',
        label: 'default'
    },
    {
        value: '1',
        label: 'Male'
    },
    {
        value: '2',
        label: 'Female'
    }
];

const ModalEdit = (props: any) => {
    const classes = Styles();
    //   const ref = React.forwardRef()
    const {
        modalProfile,
        closeModalProfile,
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

    const [gender, setGender] = React.useState('0');

    return (
        <Modal
            isOpen={modalProfile}
            onRequestClose={closeModalProfile}
            style={customStyles}
            contentLabel="Example Modal">
            <Grid component="nav" className={classes.header} item>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <IconButton onClick={closeModalProfile}>
                        <Close className={classes.icon} />{' '}
                    </IconButton>
                    <Typography className={classes.typo} variant="h4">
                        Edit profile
                    </Typography>
                </div>
                <Fab
                    variant="extended"
                    size="small"
                    className={classes.btn}
                    type="submit">
                    <div className={classes.btnDiv}>
                        <span>Save</span>
                    </div>
                </Fab>
            </Grid>
            <Grid className={classes.darkArea} item>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <IconButton
                        className={classes.camera}
                        aria-label="upload picture"
                        component="span">
                        <CameraAlt className={classes.icon} />
                    </IconButton>
                </label>
                <div className={classes.avatarBox}>
                    <Box>
                        <Avatar className={classes.avatar}>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <IconButton
                                    aria-label="upload picture"
                                    component="span">
                                    <CameraAlt className={classes.icon} />
                                </IconButton>
                            </label>
                        </Avatar>
                    </Box>
                </div>
            </Grid>
            <form className={classes.form} noValidate>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            className={classes.textField}
                            name="Name"
                            variant="filled"
                            fullWidth
                            id="Name"
                            label="Name"
                            autoFocus
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            className={classes.textField}
                            name="Headline"
                            variant="filled"
                            multiline
                            fullWidth
                            id="Headline"
                            label="Headline"
                            autoFocus
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            className={classes.textField}
                            name="location"
                            variant="filled"
                            fullWidth
                            placeholder="Add your location"
                            id="location"
                            label="Location"
                            autoFocus
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-between">
                                <KeyboardDatePicker
                                    variant="dialog"
                                    format="MM/dd/yyyy"
                                    value={startDate}
                                    onChange={(date: any) => setStartDate(date)}
                                    label="Birthday"
                                    fullWidth
                                    // className={classes.textField}
                                    style={{
                                        width: '40%',
                                        marginLeft: '5%',
                                        height: '15%'
                                    }}
                                />
                                <TextField
                                    id="outlined-select-currency-native"
                                    select
                                    label="Select gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    SelectProps={{
                                        native: true
                                    }}
                                    variant="outlined"
                                    style={{
                                        width: '40%',
                                        marginRight: '5%',
                                        height: '15%'
                                    }}>
                                    {genders.map((option: any) => (
                                        <option
                                            key={option.value}
                                            value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>
            </form>
        </Modal>
    );
};

export default ModalEdit;
