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
        padding: 20,
        borderRadius: 8
    }
};

const DeleteSkill = observer(() => {
    const classes = Styles();

    return (
        <div>
            <Modal
                isOpen={profileStore.modalSkill.delete}
                onRequestClose={() => (profileStore.modalSkill.delete = false)}
                style={customStyles}
                contentLabel="Update Education Modal">
                {profileStore.selectedSkill && (
                    <Grid container direction="column" spacing={3}>
                        <Grid item>
                            Are you sure to delete skill:{' '}
                            <span style={{ fontWeight: 'bold' }}>
                                {profileStore.selectedSkill.name}
                            </span>
                            ?
                        </Grid>
                        <Grid
                            item
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.btnDelete}
                                onClick={(e) => {
                                    if (profileStore.selectedSkill) {
                                        profileStore.deleteSkill(
                                            profileStore.selectedSkill._id
                                        );
                                    }
                                }}>
                                {profileStore.isLoading
                                    ? 'Deleting...'
                                    : 'Delete'}
                            </Button>
                            <Button
                                className={classes.btnCancel}
                                onClick={(e) => {
                                    profileStore.modalSkill.delete = false;
                                    profileStore.selectedSkill = undefined;
                                }}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </Modal>
        </div>
    );
});

export default DeleteSkill;
