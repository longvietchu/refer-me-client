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
        width: '30%'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 100
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
