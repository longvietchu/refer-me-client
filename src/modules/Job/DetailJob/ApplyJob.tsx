import { Button, Grid, TextField } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Modal from 'react-modal';
import { jobStore } from '../jobStore';
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
        width: '50%',
        borderRadius: 8
    }
};

const ApplyJob = observer(() => {
    const classes = Styles();

    const onClickApplyJob = async () => {
        if (jobStore.detailJob) {
            const isApplySuccess = await jobStore.applyJob(
                jobStore.detailJob._id
            );
            if (isApplySuccess !== null) {
                // history.push(`/profile/${loginStore.userInfo.id}`);
                window.location.reload();
            }
        }
    };

    if (jobStore.detailJob) {
        return (
            <div>
                <Modal
                    isOpen={jobStore.applyJobModal}
                    onRequestClose={() => (jobStore.applyJobModal = false)}
                    onAfterClose={() => {
                        jobStore.detailJob = undefined;
                        jobStore.greeting = '';
                    }}
                    style={customStyles}
                    contentLabel="Create connection Modal">
                    <Grid container direction="column" spacing={3}>
                        <Grid item>
                            Let's write a greeting to{' '}
                            {jobStore.detailJob.organization_info ? (
                                <span>
                                    {jobStore.detailJob.organization_info.name}
                                </span>
                            ) : (
                                <span style={{ fontWeight: 'bold' }}>
                                    {jobStore.detailJob.user_info.name}
                                </span>
                            )}
                            :
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Greeting"
                                fullWidth
                                onChange={(e) => {
                                    jobStore.greeting = e.target.value;
                                }}
                                value={jobStore.greeting}
                            />
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
                                color="primary"
                                className={classes.btnSend}
                                // onClick={(e) => {
                                //     if (jobStore.detailJob) {
                                //         jobStore.applyJob(
                                //             jobStore.detailJob._id
                                //         );
                                //     }
                                // }}
                                onClick={() => onClickApplyJob()}>
                                {jobStore.isLoading ? 'Sending...' : 'Send'}
                            </Button>
                            <Button
                                className={classes.btnCancel}
                                onClick={(e) => {
                                    jobStore.applyJobModal = false;
                                }}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </Modal>
            </div>
        );
    } else return null;
});

export default ApplyJob;
