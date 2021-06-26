import React, { useState, useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    Grid,
    IconButton,
    TextField,
    Typography,
    Button,
    Divider
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import { observer } from 'mobx-react-lite';
import Modal from 'react-modal';
import { loginStore } from '../../Login/loginStore';
import { organizationStore } from '../organizationStore';
import Styles from './Style';

Modal.setAppElement('#root');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: '75%',
        width: '50%',
        borderRadius: 10
    }
};

// const genders = [
//     {
//         value: 0,
//         label: Gender.UNKNOWN
//     },
//     {
//         value: 1,
//         label: Gender.MALE
//     },
//     {
//         value: 2,
//         label: Gender.FEMALE
//     }
// ];

const ModalEdit = observer(() => {
    const classes = Styles();

    if (loginStore.userInfo && organizationStore.organization) {
        return (
            <Modal
                isOpen={organizationStore.modalOrganization.edit}
                onRequestClose={() =>
                    (organizationStore.modalOrganization.edit = false)
                }
                style={customStyles}
                contentLabel="Example Modal">
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <Grid
                            container
                            justify="space-between"
                            alignItems="center">
                            <Typography variant="h6">
                                Edit profile organization
                            </Typography>
                            <IconButton
                                onClick={() =>
                                    (organizationStore.modalOrganization.edit =
                                        false)
                                }>
                                <Close />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid item>
                        <TextField
                            name="Name"
                            fullWidth
                            id="Name"
                            label="Name"
                            required
                            value={organizationStore.organization.name}
                            onChange={(e) => {
                                if (organizationStore.organization) {
                                    organizationStore.organization.name =
                                        e.target.value;
                                }
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            name="Website"
                            multiline
                            fullWidth
                            id="Website"
                            label="Website"
                            placeholder="Begin with http:// or https:// or wwww."
                            required
                            value={organizationStore.organization.website}
                            onChange={(e) => {
                                if (organizationStore.organization) {
                                    organizationStore.organization.website =
                                        e.target.value;
                                }
                            }}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            required
                            label="Industry"
                            placeholder="Type your organization industry"
                            fullWidth
                            onChange={(e) => {
                                if (organizationStore.organization) {
                                    organizationStore.organization.industry =
                                        e.target.value;
                                }
                            }}
                            value={organizationStore.organization.industry}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            required
                            label="Organization size"
                            fullWidth
                            onChange={(e) => {
                                if (organizationStore.organization) {
                                    organizationStore.organization.company_size =
                                        parseInt(e.target.value);
                                }
                            }}
                            value={organizationStore.organization.company_size}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            label="description"
                            fullWidth
                            placeholder="Type your organization description here..."
                            onChange={(e) => {
                                if (organizationStore.organization) {
                                    organizationStore.organization.description =
                                        e.target.value;
                                }
                            }}
                            value={organizationStore.organization.description}
                        />
                    </Grid>

                    <Grid item>
                        <Grid container justify="space-between">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    autoOk
                                    clearable
                                    format="dd/MM/yyyy"
                                    value={
                                        organizationStore.organization.founded
                                    }
                                    onChange={(date: any) => {
                                        if (organizationStore.organization) {
                                            organizationStore.organization.founded =
                                                date;
                                        }
                                    }}
                                    label="Founded"
                                    fullWidth
                                    style={{
                                        width: '40%'
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                            {/* <TextField
                                id="outlined-select-currency-native"
                                fullWidth
                                select
                                label="Select gender"
                                value={profileStore.profile.gender}
                                onChange={(e) => {
                                    if (profileStore.profile) {
                                        profileStore.profile.gender = parseInt(
                                            e.target.value
                                        );
                                    }
                                }}
                                style={{
                                    width: '40%'
                                }}>
                                {genders.map((option: any) => (
                                    <option
                                        key={option.value}
                                        value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField> */}
                        </Grid>
                    </Grid>
                    <Button
                        variant="outlined"
                        color="primary"
                        className={classes.btn}
                        onClick={() => {
                            // profileStore.updateProfile();
                            // profileStore.updateUserInfo();
                            organizationStore.updateOrganization();
                        }}>
                        {organizationStore.isLoading ? 'Saving...' : 'Save'}
                    </Button>
                </Grid>
            </Modal>
        );
    } else return null;
});

export default ModalEdit;
