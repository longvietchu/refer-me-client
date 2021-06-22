import { Avatar, Box, Button, Card, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { networkStore } from '../networkStore';
import Styles from './Style';

const ConnectCard = observer((props: any) => {
    const classes = Styles();
    const { connect } = props;
    console.log('connect', connect);

    return (
        <Card className={classes.card}>
            <Box pb={1} className={classes.box}>
                <Avatar
                    src={connect.avatar}
                    alt="Product"
                    className={classes.ava_top}
                />
            </Box>
            <Typography variant="subtitle2" align="center" color="textPrimary">
                {connect.name}
            </Typography>
            <Typography
                align="center"
                color="textPrimary"
                variant="body1"
                className={classes.occupation}>
                {connect.headline}
            </Typography>
            <Button
                className={classes.btn}
                onClick={() => {
                    networkStore.createConnectionModal = true;
                    networkStore.selectedUser = connect;
                }}>
                Connect
            </Button>
        </Card>
    );
});

export default ConnectCard;
