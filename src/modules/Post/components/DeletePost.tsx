import { Button, Grid } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Modal from 'react-modal';
import { homeStore } from '../../Home/homeStore';
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
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 100
    }
};

const DeletePost = observer(() => {
    const classes = Styles();

    return (
        <div>
            <Modal
                isOpen={homeStore.modalPost.delete}
                onRequestClose={() => (homeStore.modalPost.delete = false)}
                style={customStyles}
                contentLabel="Update Education Modal">
                {homeStore.selectedPost && (
                    <Grid container direction="column" spacing={3}>
                        <Grid item>Are you sure to delete this post?</Grid>
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
                                    homeStore.deletePost();
                                }}>
                                {homeStore.isDeleting
                                    ? 'Deleting...'
                                    : 'Delete'}
                            </Button>
                            <Button
                                className={classes.btnCancel}
                                onClick={(e) => {
                                    homeStore.modalPost.delete = false;
                                    homeStore.selectedPost = undefined;
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

export default DeletePost;
