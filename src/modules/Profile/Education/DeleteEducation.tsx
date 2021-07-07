import { Button, Grid } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
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

const DeleteEducation = observer(() => {
    const classes = Styles();

    return (
        <div>
            <Modal
                isOpen={profileStore.modalEducation.delete}
                onRequestClose={() =>
                    (profileStore.modalEducation.delete = false)
                }
                style={customStyles}
                contentLabel="Update Education Modal">
                {profileStore.selectedEducation && (
                    <Grid container direction="column" spacing={3}>
                        <Grid item>
                            Are you sure to delete education:{' '}
                            <span style={{ fontWeight: 'bold' }}>
                                {profileStore.selectedEducation.title}
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
                                    if (profileStore.selectedEducation) {
                                        profileStore.deleteEducation(
                                            profileStore.selectedEducation._id
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
                                    profileStore.modalEducation.delete = false;
                                    // profileStore.selectedEducation = undefined;
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

export default DeleteEducation;
