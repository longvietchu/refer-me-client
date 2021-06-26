import { Button, Grid } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Modal from 'react-modal';
import { organizationStore } from '../organizationStore';
import { useHistory } from 'react-router-dom';

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

    let history = useHistory();

    const onClickDelete = async () => {
        if (organizationStore.organization) {
            await organizationStore.deleteOrganization(
                organizationStore.organization._id
            );
            history.push('/myorganization');
        }
    };

    return (
        <div>
            <Modal
                isOpen={organizationStore.modalOrganization.delete}
                onRequestClose={() =>
                    (organizationStore.modalOrganization.delete = false)
                }
                style={customStyles}
                contentLabel="Update Education Modal">
                {organizationStore.organization && (
                    <Grid container direction="column" spacing={3}>
                        <Grid item>
                            Are you sure to delete organization:{' '}
                            <span style={{ fontWeight: 'bold' }}>
                                {organizationStore.organization.name}
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
                                    if (organizationStore.organization) {
                                        organizationStore.deleteOrganization(
                                            organizationStore.organization._id
                                        );
                                    }
                                }}>
                                {organizationStore.isLoading
                                    ? 'Deleting...'
                                    : 'Delete'}
                            </Button>
                            <Button
                                className={classes.btnCancel}
                                onClick={(e) => {
                                    organizationStore.modalOrganization.delete =
                                        false;
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
