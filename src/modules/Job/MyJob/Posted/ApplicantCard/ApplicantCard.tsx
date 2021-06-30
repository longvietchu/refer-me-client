import { Avatar, Box, Button, Card, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { jobStore } from '../../../jobStore';
import { networkStore } from '../../../../Network/networkStore';
import Styles from './Style';

const ApplicantCard = observer((props: any) => {
    const classes = Styles();
    const { applicant } = props;

    console.log('applicant', applicant);

    return (
        <Card className={classes.card}>
            <Box pb={1} className={classes.box}>
                <Avatar
                    src={applicant.user_info.avatar}
                    alt="Product"
                    className={classes.ava_top}
                />
            </Box>
            <Typography variant="subtitle2" align="center" color="textPrimary">
                {applicant.user_info.name}
            </Typography>
            <Typography
                align="center"
                color="textPrimary"
                variant="body1"
                className={classes.occupation}>
                {applicant.greeting}
            </Typography>
            <Button
                className={classes.btn}
                onClick={() => {
                    networkStore.createConnectionModal = true;
                    networkStore.selectedUser = applicant.user_info;
                }}>
                Connect
            </Button>
        </Card>
    );
});

export default ApplicantCard;
