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
    CircularProgress
} from '@material-ui/core';

import Modal from 'react-modal';
import MUIRichTextEditor from 'mui-rte';

import Autocomplete from '@material-ui/lab/Autocomplete';

import WorkIcon from '@material-ui/icons/Work';
import BusinessIcon from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CloseIcon from '@material-ui/icons/Close';

import Styles from './Style';
import { toJS } from 'mobx';

import { observer } from 'mobx-react-lite';
import { IEmploymentType, jobStore } from './jobStore';
import { IOrganizationInfo } from '../../common/constants/CommonInterface';
import { convertToRaw } from 'draft-js';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
        width: '50%',
        paddingBottom: 5,
        paddingTop: 10,
        borderRadius: 10
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

const ModalPostJob = observer(() => {
    const classes = Styles();

    const [Ques, setQues] = useState('');

    const handleChange = (prop: any) => (event: any) => {
        // `event` is of type Draft.Model.ImmutableData.EditorState
        //
        // Use convertToRaw to save the editor state including inline styles, blocks, etc.
        const content = JSON.stringify(convertToRaw(event.getCurrentContent()));
        //
        // Or use `getPlainText` method to get the text
        // https://draftjs.org/docs/api-reference-content-state#getplaintext
        // const content = event.getCurrentContent().getPlainText()
        //

        console.log(content);
    };

    const [value, setValue] = useState('');

    const onChange = (event: any) => {
        console.log('event', event);
        jobStore.inputJob.description = event;
    };

    return (
        <div>
            <Modal
                isOpen={jobStore.modalJob}
                onRequestClose={() => (jobStore.modalJob = false)}
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
                                onClick={() => (jobStore.modalJob = false)}>
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
                            value={jobStore.inputJob.title}
                            onChange={(e) =>
                                (jobStore.inputJob.title = e.target.value)
                            }
                            error={
                                jobStore.validateInput.title !== ''
                                    ? true
                                    : false
                            }
                            helperText={jobStore.validateInput.title}
                        />
                    </Grid>
                    <Grid item>
                        {/* <TextField
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
                        /> */}
                        <Autocomplete
                            freeSolo
                            id="input-company"
                            onInputChange={(event, newInputValue) => {
                                jobStore.searchOrganization(newInputValue);
                                jobStore.inputJob.company = newInputValue;
                            }}
                            inputValue={jobStore.inputJob.company}
                            onChange={(
                                event: any,
                                newValue: string | IOrganizationInfo | null
                            ) => {
                                if (newValue) {
                                    const orgObject: any = toJS(newValue);
                                    // console.log('option: ', orgObject._id);
                                    jobStore.inputJob.organization_id =
                                        orgObject._id;
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
                            value={jobStore.inputJob.location}
                            onChange={(e) =>
                                (jobStore.inputJob.location = e.target.value)
                            }
                            error={
                                jobStore.validateInput.location !== ''
                                    ? true
                                    : false
                            }
                            helperText={jobStore.validateInput.location}
                        />
                    </Grid>
                    {/* <Grid item>
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
                        />
                    </Grid> */}
                    <Grid item>
                        <TextField
                            id="outlined-select-currency-native"
                            label="Employment type"
                            required
                            variant="outlined"
                            fullWidth
                            select
                            value={jobStore.inputJob.employment_type}
                            onChange={(e) =>
                                (jobStore.inputJob.employment_type =
                                    e.target.value)
                            }
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
                        {/* <MuiThemeProvider theme={defaultTheme}>
                            <Typography
                                variant="subtitle1"
                                style={{ paddingLeft: 2 }}>
                                Add a job description
                            </Typography>

                            <MUIRichTextEditor
                                label="Type something here..."
                                inlineToolbar={true}
                                inlineToolbarControls={[
                                    'bold',
                                    'italic',
                                    'my-style',
                                    'link'
                                ]}
                                controls={[
                                    'bold',
                                    'italic',
                                    'underline',
                                    'strikethrough',
                                    'numberList',
                                    'bulletList'
                                ]}
                                defaultValue={jobStore.inputJob.description}
                                onChange={onChange}
                            />
                        </MuiThemeProvider> */}
                        <ReactQuill
                            theme="snow"
                            value={jobStore.inputJob.description}
                            onChange={onChange}
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
        </div>
    );
});

export default ModalPostJob;
