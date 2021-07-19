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

// interface props {
//   job: any;
//   onSave: any;
// }

const OrganizationCard = observer((props: any) => {
    const classes = Styles();

    const { organization } = props;

    const [isSave, setIsSave] = React.useState(false);

    const { enqueueSnackbar } = useSnackbar();
    let history = useHistory();

    return (
        <Card
            className={classes.card}
            // {...rest}
            onClick={() =>
                history.push(`/organization/profile/${organization._id}`)
            }>
            <CardActionArea
                style={{
                    height: '100%'
                }}>
                <CardContent>
                    <Box pb={3} className={classes.box}>
                        {organization.avatar ? (
                            <img
                                alt="Organizations"
                                src={organization.avatar}
                                style={{ width: 68 }}
                            />
                        ) : (
                            <img
                                alt="Jobs"
                                src="/images/no-avatar.png"
                                style={{ width: 68 }}
                            />
                        )}
                    </Box>

                    <Typography
                        color="textPrimary"
                        variant="h5"
                        className={classes.company}>
                        {organization.name}
                    </Typography>

                    <Typography variant="body1" className={classes.industry}>
                        {organization.industry}
                    </Typography>

                    <Typography
                        gutterBottom
                        variant="body1"
                        className={classes.company_size}>
                        {organization.company_size} employees
                    </Typography>

                    <Typography variant="body1" className={classes.time}>
                        Founded at:{' '}
                        {formatDateTimeDDMM(organization.created_at)}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
});

export default OrganizationCard;
