import React from 'react';
import {
    Button,
    Divider,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SchoolIcon from '@material-ui/icons/School';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { observer } from 'mobx-react-lite';
import Modal from 'react-modal';
import { profileStore } from '../profileStore';
import Styles from './Style';

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

const CreateSkill = observer(() => {
    const classes = Styles();

    return (
        <div>
            <Modal
                isOpen={profileStore.modalSkill.create}
                onRequestClose={() => (profileStore.modalSkill.create = false)}
                style={customStyles}
                contentLabel="Create Education Modal">
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <Grid
                            container
                            justify="space-between"
                            alignItems="center">
                            <Typography variant="h6">Add skill</Typography>
                            <IconButton
                                onClick={() =>
                                    (profileStore.modalSkill.create = false)
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
                            fullWidth
                            placeholder="your skills(ex: Hardware Design)"
                            onChange={(e) =>
                                (profileStore.inputEducation.title =
                                    e.target.value)
                            }
                            value={profileStore.inputEducation.title}
                            error={
                                profileStore.validateInput.title !== ''
                                    ? true
                                    : false
                            }
                            helperText={profileStore.validateInput.title}
                        />
                    </Grid>

                    <Grid>
                        <Button
                            className={classes.btn_post}
                            onClick={(e) => profileStore.createEducation()}>
                            {profileStore.isLoading ? 'Saving...' : 'Save'}
                        </Button>
                    </Grid>
                </Grid>
            </Modal>
        </div>
    );
});

export default CreateSkill;
