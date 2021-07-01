import React from 'react';
import {
    Button,
    Divider,
    Fab,
    Grid,
    IconButton,
    TextareaAutosize,
    Typography
} from '@material-ui/core';
import { Close, PhotoSizeSelectActual } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import Modal from 'react-modal';
import Styles from './Style';
import { homeStore } from './homeStore';

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

const CreatePostModal = observer(() => {
    const classes = Styles();

    return (
        <div>
            <Modal
                isOpen={homeStore.createPostModal}
                onRequestClose={() => (homeStore.createPostModal = false)}
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
                                    (homeStore.createPostModal = false)
                                }>
                                <Close />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Divider />

                    <Grid item>
                        <textarea
                            className={classes.textArea}
                            placeholder="Post description"
                            onChange={(e) => {
                                homeStore.inputPost.description =
                                    e.target.value;
                            }}
                            rows={4}
                            value={homeStore.inputPost.description}></textarea>
                        <input
                            id="upload-image"
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={(e) => console.log('images')}
                        />
                    </Grid>

                    <Grid item>
                        {homeStore.inputPost.post_image.map((item, index) => (
                            <span className={classes.skillItem} key={index}>
                                {item}
                                <IconButton
                                    style={{ padding: 0, marginLeft: 4 }}
                                    onClick={() => {
                                        homeStore.inputPost.post_image =
                                            homeStore.inputPost.post_image.filter(
                                                (s) => s !== item
                                            );
                                    }}>
                                    <Close className={classes.closeIcon} />
                                </IconButton>
                            </span>
                        ))}
                        <label htmlFor="upload-image">
                            <PhotoSizeSelectActual
                                style={{
                                    color: '#0073b1'
                                }}
                            />
                        </label>
                    </Grid>

                    <Grid>
                        <Button
                            disabled={
                                homeStore.inputPost.description.length > 0
                                    ? false
                                    : true
                            }
                            className={classes.btn_post}
                            onClick={(e) => homeStore.createPost()}>
                            {homeStore.isPosting ? 'Saving...' : 'Save'}
                        </Button>
                    </Grid>
                </Grid>
            </Modal>
        </div>
    );
});

export default CreatePostModal;
