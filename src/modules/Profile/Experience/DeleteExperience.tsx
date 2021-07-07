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
        borderRadius: 8,
        height: '30%',
        width: '30%'
    }
};

const DeleteExperience = observer(() => {
    const classes = Styles();

    return (
        <div>
            <Modal
                isOpen={profileStore.modalExperience.delete}
                onRequestClose={() =>
                    (profileStore.modalExperience.delete = false)
                }
                style={customStyles}
                contentLabel="delete Expreience Modal">
                {profileStore.selectedExperience && (
                    <Grid container direction="column" spacing={3}>
                        <Grid item>
                            Are you sure to delete experience:{' '}
                            <span style={{ fontWeight: 'bold' }}>
                                {profileStore.selectedExperience.company}
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
                                    if (profileStore.selectedExperience) {
                                        profileStore.deleteExperience(
                                            profileStore.selectedExperience._id
                                        );
                                    }
                                }}>
                                {profileStore.isLoading ? 'Deleting...' : 'Yes'}
                            </Button>
                            <Button
                                className={classes.btnCancel}
                                onClick={(e) => {
                                    profileStore.modalExperience.delete = false;
                                    // profileStore.selectedExperience = undefined;
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

export default DeleteExperience;
