import React from 'react';
import {
    Card,
    CardContent,
    CardActionArea,
    Box,
    Avatar,
    Typography,
    Button,
    Grid
} from '@material-ui/core';
import Styles from './Style';
import { observer } from 'mobx-react-lite';

const ConnectCard = observer((props: any) => {
    const classes = Styles();
    const { connect } = props;
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
            <Button className={classes.btn}>Connect</Button>
        </Card>
    );
});

export default ConnectCard;
