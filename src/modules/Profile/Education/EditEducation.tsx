import React from 'react';
import {
    Button,
    CircularProgress,
    Divider,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from '@material-ui/core';
import { Close, LocationOn, School } from '@material-ui/icons';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { observer } from 'mobx-react-lite';
import Modal from 'react-modal';
import { profileStore } from '../profileStore';
import Styles from './Style';
import { toJS } from 'mobx';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { IOrganizationInfo } from '../../../common/constants/CommonInterface';
import DeleteEducation from './DeleteEducation';

Modal.setAppElement('#root');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: '70%',
        width: '50%',
        paddingBottom: 5,
        paddingTop: 10,
        borderRadius: 8
    }
};

const EditEducation = observer(() => {
    const classes = Styles();

    if (profileStore.selectedEducation) {
        return (
            <div>
                <Modal
                    isOpen={profileStore.modalEducation.edit}
                    onRequestClose={() =>
                        (profileStore.modalEducation.edit = false)
                    }
                    style={customStyles}
                    contentLabel="Update Education Modal">
                    {profileStore.selectedEducation && (
                        <Grid container direction="column" spacing={3}>
                            <Grid item>
                                <Grid
                                    container
                                    justify="space-between"
                                    alignItems="center">
                                    <Typography variant="h6">
                                        Update education
                                    </Typography>
                                    <IconButton
                                        onClick={() =>
                                            (profileStore.modalEducation.edit =
                                                false)
                                        }>
                                        <Close />
                                    </IconButton>
                                </Grid>
                            </Grid>

                            <Divider />

                            <Grid item>
                                <Autocomplete
                                    freeSolo
                                    id="update-education"
                                    value={profileStore.selectedEducation.title}
                                    onChange={(event, newValue) => {
                                        console.log(
                                            typeof newValue === 'string'
                                        );
                                        if (profileStore.selectedEducation) {
                                            if (typeof newValue === 'string') {
                                                console.log('here');
                                                profileStore.selectedEducation.title =
                                                    newValue;
                                                profileStore.selectedEducation.organization_id =
                                                    '';
                                            } else if (
                                                newValue &&
                                                typeof newValue === 'object'
                                            ) {
                                                // If user choose from suggestion
                                                profileStore.selectedEducation.title =
                                                    newValue.name;
                                                profileStore.selectedEducation.organization_id =
                                                    newValue._id;
                                            }
                                        }
                                    }}
                                    options={
                                        profileStore.searchResult as IOrganizationInfo[]
                                    }
                                    getOptionLabel={(option) => {
                                        // Value selected with enter, right from the input
                                        if (typeof option === 'string') {
                                            return option;
                                        }
                                        if (option.name) {
                                            return option.name;
                                        }
                                        // Regular option
                                        return option.name;
                                    }}
                                    renderOption={(option) => (
                                        <React.Fragment>
                                            <span>
                                                {option.avatar ? (
                                                    <img
                                                        src={option.avatar}
                                                        className={
                                                            classes.organizationAvatar
                                                        }
                                                    />
                                                ) : (
                                                    <img
                                                        src="/images/no-avatar.png"
                                                        className={
                                                            classes.organizationAvatar
                                                        }
                                                    />
                                                )}
                                            </span>
                                            {option.name}
                                        </React.Fragment>
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="School"
                                            required
                                            fullWidth
                                            InputProps={{
                                                ...params.InputProps,
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <LocationOn />
                                                    </InputAdornment>
                                                ),
                                                endAdornment: (
                                                    <React.Fragment>
                                                        {profileStore.isSearching ? (
                                                            <CircularProgress
                                                                color="inherit"
                                                                size={20}
                                                            />
                                                        ) : null}
                                                    </React.Fragment>
                                                )
                                            }}
                                            onChange={(e) =>
                                                profileStore.searchOrganization(
                                                    e.target.value
                                                )
                                            }
                                            error={
                                                profileStore.validateInput
                                                    .title !== ''
                                                    ? true
                                                    : false
                                            }
                                            helperText={
                                                profileStore.validateInput.title
                                            }
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Description"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <School />
                                            </InputAdornment>
                                        )
                                    }}
                                    onChange={(e) => {
                                        if (profileStore.selectedEducation) {
                                            profileStore.selectedEducation.description =
                                                e.target.value;
                                        }
                                    }}
                                    value={
                                        profileStore.selectedEducation
                                            .description
                                    }
                                />
                            </Grid>

                            <Grid item>
                                <Grid container justify="space-between">
                                    <MuiPickersUtilsProvider
                                        utils={DateFnsUtils}>
                                        <DatePicker
                                            autoOk
                                            clearable
                                            openTo="year"
                                            format="yyyy"
                                            views={['year']}
                                            value={
                                                profileStore.selectedEducation
                                                    .joined_at
                                            }
                                            onChange={(date: any) => {
                                                if (
                                                    profileStore.selectedEducation
                                                ) {
                                                    profileStore.selectedEducation.joined_at =
                                                        date;
                                                }
                                            }}
                                            label="Joined year"
                                            style={{ width: '45%' }}
                                        />
                                        <DatePicker
                                            autoOk
                                            clearable
                                            openTo="year"
                                            format="yyyy"
                                            views={['year']}
                                            value={
                                                profileStore.selectedEducation
                                                    .graduated_at
                                            }
                                            onChange={(date: any) => {
                                                if (
                                                    profileStore.selectedEducation
                                                ) {
                                                    profileStore.selectedEducation.graduated_at =
                                                        date;
                                                }
                                            }}
                                            label="Graduated year (or expected)"
                                            style={{ width: '45%' }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </Grid>

                            <Grid>
                                <Button
                                    className={classes.btn_post}
                                    onClick={(e) =>
                                        profileStore.updateEducation()
                                    }>
                                    {profileStore.isLoading
                                        ? 'Saving...'
                                        : 'Save'}
                                </Button>
                                <Button
                                    onClick={() =>
                                        (profileStore.modalEducation.delete =
                                            true)
                                    }
                                    color="secondary"
                                    variant="outlined"
                                    className={classes.btnDelete}>
                                    Delete
                                </Button>
                            </Grid>
                        </Grid>
                    )}
                </Modal>
                <DeleteEducation />
            </div>
        );
    } else return null;
});

export default EditEducation;
