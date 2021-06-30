import { Button, Grid, TextField } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Modal from 'react-modal';
import { networkStore } from '../../../../Network/networkStore';
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

const CreateConnection = observer(() => {
    const classes = Styles();

    if (networkStore.selectedUser) {
        console.log('aaaa', networkStore.selectedUser);
    }

    if (networkStore.selectedUser) {
        return (
            <div>
                <Modal
                    isOpen={networkStore.createConnectionModal}
                    onRequestClose={() =>
                        (networkStore.createConnectionModal = false)
                    }
                    onAfterClose={() => {
                        networkStore.selectedUser = undefined;
                        networkStore.greeting = '';
                    }}
                    style={customStyles}
                    contentLabel="Create connection Modal">
                    <Grid container direction="column" spacing={3}>
                        <Grid item>
                            Let's write a greeting to{' '}
                            <span style={{ fontWeight: 'bold' }}>
                                {networkStore.selectedUser.name}
                            </span>
                            :
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Greeting"
                                fullWidth
                                onChange={(e) => {
                                    networkStore.greeting = e.target.value;
                                }}
                                value={networkStore.greeting}
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
                                onClick={(e) => {
                                    if (networkStore.selectedUser) {
                                        networkStore.createConnection(
                                            networkStore.selectedUser._id
                                        );
                                    }
                                }}>
                                {networkStore.isLoading ? 'Sending...' : 'Send'}
                            </Button>
                            <Button
                                className={classes.btnCancel}
                                onClick={(e) => {
                                    networkStore.createConnectionModal = false;
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

export default CreateConnection;
