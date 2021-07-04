import {
    Button,
    Divider,
    Grid,
    IconButton,
    TextareaAutosize,
    Typography
} from '@material-ui/core';
import { Close, PhotoSizeSelectActual } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { homeStore } from './homeStore';
import Styles from './Style';

Modal.setAppElement('#root');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        paddingBottom: 5,
        paddingTop: 10,
        borderRadius: 8
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 100
    }
};

const CreatePostModal = observer(() => {
    const classes = Styles();
    const [previewImages, setPreviewImages] = useState<string[]>([]);
    const onChangePostImages = (e: any) => {
        e.preventDefault();
        let images = [];
        for (let i = 0; i < e.target.files.length; i++) {
            images.push(URL.createObjectURL(e.target.files[i]));
        }
        setPreviewImages([...previewImages, ...images]);
        homeStore.uploadPostImages(e.target.files);
    };

    return (
        <div>
            <Modal
                isOpen={homeStore.createPostModal}
                onRequestClose={() => (homeStore.createPostModal = false)}
                style={customStyles}
                onAfterClose={() => {
                    homeStore.inputPost = { description: '', post_image: [] };
                }}
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
                        <TextareaAutosize
                            className={classes.textArea}
                            placeholder="Post description"
                            onChange={(e) => {
                                homeStore.inputPost.description =
                                    e.target.value;
                            }}
                            rowsMin={4}
                            value={homeStore.inputPost.description}
                        />
                        <input
                            id="post-images"
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            multiple
                            onChange={(e) => {
                                onChangePostImages(e);
                            }}
                        />
                    </Grid>

                    <Grid container spacing={1}>
                        {previewImages.map((item, index) => (
                            <Grid
                                item
                                key={index}
                                style={{ position: 'relative' }}>
                                <img
                                    src={item}
                                    className={classes.preview_image}
                                />
                                <Close
                                    className={classes.closeIcon}
                                    onClick={() => {
                                        let result = previewImages.filter(
                                            (s) => s !== item
                                        );
                                        setPreviewImages(result);
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>

                    <Grid className={classes.footer}>
                        <label htmlFor="post-images">
                            <PhotoSizeSelectActual
                                style={{
                                    color: '#666666'
                                }}
                            />
                        </label>
                        <Button
                            disabled={
                                homeStore.inputPost.description.length > 0 ||
                                previewImages.length > 0
                                    ? false
                                    : true
                            }
                            variant="contained"
                            className={classes.btn_post}
                            onClick={(e) => homeStore.createPost()}>
                            {homeStore.isPosting ? 'Posting...' : 'Post'}
                        </Button>
                    </Grid>
                </Grid>
            </Modal>
        </div>
    );
});

export default CreatePostModal;
