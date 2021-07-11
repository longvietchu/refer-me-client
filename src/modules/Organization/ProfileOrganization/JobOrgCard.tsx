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

import { formatDateTimeDDMM } from '../../../common/config/Function';

import Styles from './Style';

import { observer } from 'mobx-react-lite';

import { organizationStore } from '../organizationStore';

const JobOrgCard = observer((props: any) => {
    const classes = Styles();

    const { job } = props;

    const [isSave, setIsSave] = React.useState(false);

    const { enqueueSnackbar } = useSnackbar();
    let history = useHistory();

    console.log('job', job);

    const onSave = (
        e: { stopPropagation: () => void },
        variant: VariantType,
        _id: string
    ) => {
        e.stopPropagation();
        console.log('b', _id);
        enqueueSnackbar('Save job successfully!', { variant });
        setIsSave(!isSave);
    };

    return (
        <Card
            className={classes.card}
            // {...rest}
            onClick={() => history.push(`/jobs/${job._id}`)}>
            <CardActionArea
                style={{
                    height: '100%'
                }}>
                <CardContent>
                    <Box pb={3} className={classes.box}>
                        {organizationStore.organization &&
                        organizationStore.organization.avatar ? (
                            <img
                                alt="Jobs"
                                src={organizationStore.organization.avatar}
                                style={{ width: 72 }}
                            />
                        ) : (
                            <img
                                alt="Jobs"
                                src="/images/no-avatar.pngs"
                                style={{ width: 72 }}
                            />
                        )}
                    </Box>

                    {/* <div style={{ height: 100 }} /> */}

                    <Typography
                        color="textPrimary"
                        variant="h5"
                        className={classes.title}>
                        {job.title}
                    </Typography>
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
                        Opened at: {formatDateTimeDDMM(job.created_at)}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
});

export default JobOrgCard;
