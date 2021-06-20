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

import { VariantType, useSnackbar } from 'notistack';

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import { formatDateTimeDDMM } from '../../../common/config/Function';

import Styles from './Style';

import { observer } from 'mobx-react-lite';

// interface props {
//   job: any;
//   onSave: any;
// }

const JobCard = observer((props: any) => {
    const classes = Styles();

    const { job } = props;

    const [isSave, setIsSave] = React.useState(false);

    const { enqueueSnackbar } = useSnackbar();

    const difDate = () => {
        let date1 = new Date(job.created_at).getTime();
        let date2 = new Date().getTime();

        let d = Math.abs((date2 - date1) / (1000 * 3600 * 24));
        return d + 'days';
    };

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
            onClick={() => console.log('1')}>
            <CardActionArea>
                <CardContent>
                    <Box pb={3} className={classes.box}>
                        {job.organization_info &&
                        job.organization_info.avatar ? (
                            <Avatar
                                alt="Jobs"
                                src={job.organization_info.avatar}
                                variant="square"
                                style={{ height: 72, width: 72 }}
                            />
                        ) : (
                            <Avatar
                                alt="Jobs"
                                src="/images/no-avatar.png"
                                variant="square"
                                style={{ height: 72, width: 72 }}
                            />
                        )}

                        {!job.isSave ? (
                            <IconButton
                                edge="end"
                                onClick={(e) => onSave(e, 'success', job._id)}>
                                <BookmarkBorderIcon
                                    style={{ fontSize: '32' }}
                                />
                            </IconButton>
                        ) : (
                            <IconButton
                                edge="end"
                                onClick={(e) => onSave(e, 'error', job._id)}>
                                <BookmarkIcon
                                    style={{
                                        fontSize: '32',
                                        color: '#00000099'
                                    }}
                                />
                            </IconButton>
                        )}
                    </Box>

                    <Typography
                        color="textPrimary"
                        variant="h5"
                        className={classes.title}>
                        {job.title}
                    </Typography>
                    {job.organization_info && job.organization_info.name ? (
                        <Typography variant="body1" className={classes.company}>
                            {job.organization_info.name}
                        </Typography>
                    ) : null}

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

export default JobCard;
