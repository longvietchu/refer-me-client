import React from 'react';
import {
    Card,
    CardContent,
    Button,
    CardActionArea,
    Box,
    Avatar,
    IconButton,
    Typography
} from '@material-ui/core';

import { Link, useHistory } from 'react-router-dom';

import { VariantType, useSnackbar } from 'notistack';

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import { formatDateTimeDDMM } from '../../../../common/config/Function';

import Styles from './Style';

import { observer } from 'mobx-react-lite';

import { JobTab, jobStore } from '../../jobStore';

// interface props {
//   job: any;
//   onSave: any;
// }

const MyJobCard = observer((props: any) => {
    const classes = Styles();

    const { job } = props;

    const [isSave, setIsSave] = React.useState(false);

    const { enqueueSnackbar } = useSnackbar();
    let history = useHistory();

    console.log('job--', job);

    return (
        <Card
            className={classes.card}
            // {...rest}

            onClick={() => {
                if (jobStore.jobTab === JobTab.POSTED) {
                    history.push(`/hiring/jobs/${job._id}`);
                } else history.push(`/jobs/${job._id}`);
            }}>
            <CardActionArea
                style={{
                    height: '100%'
                }}>
                <CardContent>
                    <Box pb={3} className={classes.box}>
                        {job.organization_info &&
                        job.organization_info.avatar ? (
                            <img
                                alt="Jobs"
                                src={job.organization_info.avatar}
                                style={{ width: 72 }}
                            />
                        ) : (
                            <img
                                alt="Jobs"
                                src="/images/no-avatar.png"
                                style={{ width: 72 }}
                            />
                        )}
                    </Box>

                    <Typography
                        color="textPrimary"
                        variant="h5"
                        className={classes.title}>
                        {job.title}
                    </Typography>

                    {/* {job.compnay ? (
                        <Typography variant="body1" className={classes.company}>
                            {job.company}
                        </Typography>
                    ) : job.user_info && job.user_info.name != undefined ? (
                        <Typography variant="body1" className={classes.company}>
                            {job.user_info.name}
                        </Typography>
                    ) : null} */}

                    <Typography variant="body1" className={classes.company}>
                        {job.company}
                    </Typography>

                    <Typography
                        gutterBottom
                        variant="body1"
                        className={classes.location}>
                        {job.location}
                    </Typography>

                    <Typography variant="body1" className={classes.time}>
                        {formatDateTimeDDMM(job.created_at)}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
});

export default MyJobCard;
