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
import BusinessIcon from '@material-ui/icons/Business';
import CloseIcon from '@material-ui/icons/Close';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WorkIcon from '@material-ui/icons/Work';
import Autocomplete from '@material-ui/lab/Autocomplete';
import MDEditor from '@uiw/react-md-editor';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Modal from 'react-modal';
import { IOrganizationInfo } from '../../common/constants/CommonInterface';
import { IEmploymentType, jobStore } from './jobStore';
import Styles from './Style';

Modal.setAppElement('#root');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        padding: 20,
        borderRadius: 8,
        width: '60%'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 100
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

const EditJob = observer(() => {
    const classes = Styles();

    if (jobStore.selectedJob) {
        return (
            <Modal
                isOpen={jobStore.modalEditJob}
                onRequestClose={() => (jobStore.modalEditJob = false)}
                style={customStyles}
                contentLabel="Example Modal">
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <Grid
                            container
                            justify="space-between"
                            alignItems="center">
                            <Typography variant="h6">Post a new job</Typography>
                            <IconButton
                                onClick={() => (jobStore.modalEditJob = false)}>
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
                            value={jobStore.selectedJob.title}
                            onChange={(e) => {
                                if (jobStore.selectedJob) {
                                    jobStore.selectedJob.title = e.target.value;
                                }
                            }}
                            error={
                                jobStore.validateInput.title !== ''
                                    ? true
                                    : false
                            }
                            helperText={jobStore.validateInput.title}
                        />
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            freeSolo
                            id="input-company"
                            onInputChange={(event, newInputValue) => {
                                jobStore.searchOrganization(newInputValue);
                                if (jobStore.selectedJob) {
                                    jobStore.selectedJob.company =
                                        newInputValue;
                                }
                            }}
                            inputValue={jobStore.selectedJob.company}
                            onChange={(
                                event: any,
                                newValue: string | IOrganizationInfo | null
                            ) => {
                                if (newValue) {
                                    const orgObject: any = toJS(newValue);
                                    if (jobStore.selectedJob) {
                                        jobStore.selectedJob.organization_id =
                                            orgObject._id;
                                    }
                                }
                            }}
                            options={
                                jobStore.searchResult as IOrganizationInfo[]
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
                                                {jobStore.isSearching ? (
                                                    <CircularProgress
                                                        color="inherit"
                                                        size={20}
                                                    />
                                                ) : null}
                                            </React.Fragment>
                                        )
                                    }}
                                    error={
                                        jobStore.validateInput.company !== ''
                                            ? true
                                            : false
                                    }
                                    helperText={jobStore.validateInput.company}
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
                            value={jobStore.selectedJob.location}
                            onChange={(e) => {
                                if (jobStore.selectedJob) {
                                    jobStore.selectedJob.location =
                                        e.target.value;
                                }
                            }}
                            error={
                                jobStore.validateInput.location !== ''
                                    ? true
                                    : false
                            }
                            helperText={jobStore.validateInput.location}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="select-employment-type"
                            label="Employment type"
                            required
                            fullWidth
                            select
                            value={jobStore.selectedJob.employment_type}
                            onChange={(e) => {
                                if (jobStore.selectedJob) {
                                    jobStore.selectedJob.employment_type =
                                        e.target.value;
                                }
                            }}
                            SelectProps={{
                                native: true
                            }}>
                            {employment_types.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid item>
                        <MDEditor
                            value={jobStore.selectedJob.description}
                            onChange={(value) => {
                                if (value && jobStore.selectedJob) {
                                    jobStore.selectedJob.description = value;
                                }
                            }}
                            preview="edit"
                        />
                    </Grid>

                    <Grid style={{ alignSelf: 'center' }}>
                        <Button
                            className={classes.btn_post}
                            onClick={() => jobStore.createJob()}>
                            {jobStore.isLoading ? 'Posting...' : 'Post job'}
                        </Button>
                    </Grid>
                </Grid>
            </Modal>
        );
    } else return null;
});

export default EditJob;
