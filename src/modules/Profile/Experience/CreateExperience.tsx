import DateFnsUtils from '@date-io/date-fns';
import {
    Button,
    Checkbox,
    CircularProgress,
    Divider,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    MenuItem,
    TextField,
    Typography
} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import BusinessIcon from '@material-ui/icons/Business';
import CloseIcon from '@material-ui/icons/Close';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WorkIcon from '@material-ui/icons/Work';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Modal from 'react-modal';
import { IEmploymentType, profileStore } from '../profileStore';
import { IOrganizationInfo } from '../../../common/constants/CommonInterface';
import Styles from './Style';

Modal.setAppElement('#root');
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
        width: '50%',
        paddingBottom: 5,
        paddingTop: 10,
        borderRadius: 8
    }
};

const employment_types = [
    {
        value: IEmploymentType.NONE,
        label: 'Choose one...'
    },
    {
        value: IEmploymentType.FULL_TIME,
        label: 'Full-time'
    },
    {
        value: IEmploymentType.PART_TIME,
        label: 'Part-time'
    },
    {
        value: IEmploymentType.CONTRACT,
        label: 'Contract'
    },
    {
        value: IEmploymentType.TEMPORARY,
        label: 'Temporary'
    },
    {
        value: IEmploymentType.INTERNSHIP,
        label: 'Internship'
    }
];

const CreateExperience = observer(() => {
    const classes = Styles();
    return (
        <div>
            <Modal
                isOpen={profileStore.modalExperience.create}
                onRequestClose={() =>
                    (profileStore.modalExperience.create = false)
                }
                style={customStyles}
                contentLabel="Create Experience Modal">
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <Grid
                            container
                            justify="space-between"
                            alignItems="center">
                            <Typography variant="h6">Add experience</Typography>
                            <IconButton
                                onClick={() =>
                                    (profileStore.modalExperience.create =
                                        false)
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
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <WorkIcon />
                                    </InputAdornment>
                                )
                            }}
                            value={profileStore.inputExperience.job_title}
                            onChange={(e) =>
                                (profileStore.inputExperience.job_title =
                                    e.target.value)
                            }
                            error={
                                profileStore.validateInput.job_title !== ''
                                    ? true
                                    : false
                            }
                            helperText={profileStore.validateInput.job_title}
                        />
                    </Grid>
                    <Grid item>
                        {/* <TextField
                            label="Company"
                            required
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <BusinessIcon />
                                    </InputAdornment>
                                )
                            }}
                            value={profileStore.inputExperience.company}
                            onChange={(e) =>
                                (profileStore.inputExperience.company =
                                    e.target.value)
                            }
                            error={
                                profileStore.validateInput.company !== ''
                                    ? true
                                    : false
                            }
                            helperText={profileStore.validateInput.company}
                        /> */}
                        <Autocomplete
                            freeSolo
                            id="input-company"
                            onInputChange={(event, newInputValue) => {
                                profileStore.searchOrganization(newInputValue);
                                profileStore.inputExperience.company =
                                    newInputValue;
                            }}
                            inputValue={profileStore.inputExperience.company}
                            onChange={(
                                event: any,
                                newValue: string | IOrganizationInfo | null
                            ) => {
                                if (newValue) {
                                    const orgObject: any = toJS(newValue);
                                    // console.log('option: ', orgObject._id);
                                    profileStore.inputExperience.organization_id =
                                        orgObject._id;
                                }
                            }}
                            options={
                                profileStore.searchResult as IOrganizationInfo[]
                            }
                            autoHighlight
                            getOptionLabel={(option) => option.name}
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
                                    label="Company"
                                    required
                                    fullWidth
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <BusinessIcon />
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
                                    error={
                                        profileStore.validateInput.company !==
                                        ''
                                            ? true
                                            : false
                                    }
                                    helperText={
                                        profileStore.validateInput.company
                                    }
                                />
                            )}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Job location"
                            required
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationOnIcon />
                                    </InputAdornment>
                                )
                            }}
                            value={profileStore.inputExperience.location}
                            onChange={(e) =>
                                (profileStore.inputExperience.location =
                                    e.target.value)
                            }
                            error={
                                profileStore.validateInput.location !== ''
                                    ? true
                                    : false
                            }
                            helperText={profileStore.validateInput.location}
                        />
                    </Grid>

                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={
                                        profileStore.modalExperience.presentJob
                                    }
                                    onChange={() =>
                                        (profileStore.modalExperience.presentJob =
                                            !profileStore.modalExperience
                                                .presentJob)
                                    }
                                    name="presentJob"
                                    color="primary"
                                />
                            }
                            label="Is this your present job?"
                        />
                    </Grid>

                    <Grid item>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-between">
                                <DatePicker
                                    className={classes.date_picker}
                                    style={{
                                        marginRight: !profileStore
                                            .modalExperience.presentJob
                                            ? 20
                                            : 0
                                    }}
                                    autoOk
                                    clearable
                                    format="dd/MM/yyyy"
                                    label="Joined Date"
                                    value={
                                        profileStore.inputExperience.joined_at
                                    }
                                    onChange={(date: any) => {
                                        profileStore.inputExperience.joined_at =
                                            date;
                                    }}
                                />
                                {!profileStore.modalExperience.presentJob && (
                                    <DatePicker
                                        className={classes.date_picker}
                                        autoOk
                                        clearable
                                        format="dd/MM/yyyy"
                                        label="Left Date"
                                        value={
                                            profileStore.inputExperience.left_at
                                        }
                                        onChange={(date: any) => {
                                            profileStore.inputExperience.left_at =
                                                date;
                                        }}
                                    />
                                )}
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item>
                        <TextField
                            id="outlined-select-currency-native"
                            label="Employment type"
                            fullWidth
                            select
                            value={profileStore.inputExperience.employment_type}
                            onChange={(e) =>
                                (profileStore.inputExperience.employment_type =
                                    e.target.value)
                            }>
                            {employment_types.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid item>
                        <TextField
                            label="Description"
                            fullWidth
                            multiline
                            rows={4}
                            value={profileStore.inputExperience.job_description}
                            onChange={(e) =>
                                (profileStore.inputExperience.job_description =
                                    e.target.value)
                            }
                        />
                    </Grid>

                    <Grid>
                        <Button
                            className={classes.btn_post}
                            onClick={() => profileStore.createExpericence()}>
                            {profileStore.isLoading ? 'Saving...' : 'Save'}
                        </Button>
                    </Grid>
                </Grid>
            </Modal>
        </div>
    );
});

export default CreateExperience;
