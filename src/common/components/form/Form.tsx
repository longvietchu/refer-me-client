import React, { useState, useEffect } from 'react';
import Styles from './Style';

import {
    Paper,
    useTheme,
    Chip,
    LinearProgress,
    Avatar
} from '@material-ui/core';
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import CreateIcon from '@material-ui/icons/Create';
import { LinkedInBlue, LinkedInLightBlue } from '../../assets/Colors';
import { observer } from 'mobx-react-lite';
import { loginStore } from '../../../modules/Login/loginStore';
import { Link } from 'react-router-dom';
import { homeStore } from '../../../modules/Home/homeStore';

const Form = observer(() => {
    const classes = Styles();
    const theme = useTheme();

    if (loginStore.userInfo) {
        return (
            <Paper className={classes.upload}>
                <div className={classes.upload__header}>
                    <Link to={'/profile'}>
                        <Avatar
                            className={classes.ava}
                            src={loginStore.userInfo.avatar}
                        />
                    </Link>
                    <div
                        className={classes.header__form}
                        onClick={() => (homeStore.createPostModal = true)}>
                        <CreateIcon />
                        <p>Start a post</p>
                    </div>
                </div>

                {/* {uploadData.file.name && !progress && (
                    <div className={classes.selectedFile}>
                        <Chip
                            color="primary"
                            size="small"
                            onDelete={resetState}
                            icon={
                                uploadData.file.type === 'image' ? (
                                    <PhotoSizeSelectActualIcon />
                                ) : (
                                    <VideocamRoundedIcon />
                                )
                            }
                            label={uploadData.file.name}
                        />
                    </div>
                )} */}

                {/* {progress ? (
                    <div className={classes.uploading}>
                        <LinearProgress
                            variant="determinate"
                            // value={progress}
                            className={classes.progress}
                        />
                        <p>{progress} %</p>
                    </div>
                ) : (
                    ''
                )} */}

                <div className={classes.upload__media}>
                    <label
                        htmlFor="upload-image"
                        className={classes.media__options}>
                        <PhotoSizeSelectActualIcon
                            style={{
                                color:
                                    theme.palette.type === 'dark'
                                        ? LinkedInLightBlue
                                        : LinkedInBlue
                            }}
                        />
                        <h4>Photo</h4>
                    </label>
                    <div className={classes.media__options}>
                        <CalendarViewDayIcon style={{ color: '#f5987e' }} />
                        <h4>Write article</h4>
                    </div>
                </div>
            </Paper>
        );
    } else return null;
});

export default Form;
