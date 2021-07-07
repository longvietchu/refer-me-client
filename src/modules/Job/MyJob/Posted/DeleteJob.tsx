import { Button, Grid } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Modal from 'react-modal';

import { jobStore } from '../../jobStore';
import Styles from './Style';
import { useHistory } from 'react-router-dom';

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
        height: '25%',
        width: '30%'
    }
};

const DeleteJob = observer(() => {
    const classes = Styles();
    let history = useHistory();

    const onClickDelete = async () => {
        if (jobStore.detailJob) {
            await jobStore.deleteJob(jobStore.detailJob._id);
            history.push('/myjob');
        }
    };

    return (
        <div>
            <Modal
                isOpen={jobStore.modalDeleteJob}
                onRequestClose={() => (jobStore.modalDeleteJob = false)}
                style={customStyles}
                contentLabel="delete Expreience Modal">
                {jobStore.detailJob && (
                    <Grid container direction="column" spacing={3}>
                        <Grid item>
                            Are you sure to delete job:{' '}
                            <span style={{ fontWeight: 'bold' }}>
                                {jobStore.detailJob.title}
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
                                onClick={onClickDelete}
                                disabled={jobStore.isLoading ? true : false}>
                                {jobStore.isLoading ? 'Deleting' : 'Yes'}
                            </Button>
                            <Button
                                className={classes.btnCancel}
                                onClick={(e) =>
                                    (jobStore.modalDeleteJob = false)
                                }>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </Modal>
        </div>
    );
});

export default DeleteJob;
