import React, { useState, useEffect } from 'react';
import {
    Grid,
    Typography,
    IconButton,
    Paper,
    InputBase,
    Button,
    TextField
} from '@material-ui/core';

import Header from '../../../common/components/header/Header';
import { Helmet } from 'react-helmet';

import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

import Styles from './Style';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { useHistory } from 'react-router-dom';

const CreateOrganization = () => {
    const classes = Styles();
    let history = useHistory();

    const [date, setDate] = useState(new Date());
    const [image, setImage] = useState<string | undefined>();
    const [selectImg, setSelectImg] = useState();

    const onImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e: any) => {
                setImage(e.target.result);
                console.log('e', e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        // setImage(URL.createObjectURL(event.target.files[0]));
    };

    useEffect(() => {
        if (!selectImg) {
            setImage(undefined);
            return;
        } else {
            const objectUrl = URL.createObjectURL(selectImg);
            setImage(objectUrl);
            return () => URL.revokeObjectURL(objectUrl);
        }

        // free memory when ever this component is unmounted
    }, [selectImg]);

    const onSelectImg = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectImg(undefined);
            return;
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectImg(e.target.files[0]);
        console.log('e', e);
    };

    const onClickClose = (e: any) => {
        console.log('index--', e);
        setSelectImg(undefined);
    };

    const onClickCreate = () => {
        history.push('./profile');
    };
    return (
        <Grid
            container
            className={classes.app}
            // style={{ backgroundColor: mode ? darkPrimary : LinkedInBgColor }}
        >
            <Helmet>
                <title>RefMe</title>
            </Helmet>
            <Grid item container className={classes.app__header}>
                {/* Header */}
                <Header />
            </Grid>
            <Grid item container className={classes.app__body}>
                <Grid item className={classes.body__feed} xs={12} md={7}>
                    <Grid item className={classes.feed__form}>
                        <Paper>
                            <Typography
                                variant="h3"
                                style={{
                                    color: '#0a66c2',
                                    fontSize: 'var(--font-size-medium)',
                                    fontWeight: 'bold',
                                    padding: 14
                                }}>
                                Organization details
                            </Typography>

                            <Grid
                                container
                                direction="column"
                                spacing={3}
                                style={{ padding: 14 }}>
                                <Grid item>
                                    <TextField
                                        required
                                        label="Name"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        label="Website"
                                        variant="outlined"
                                        placeholder="Begin with http:// or https:// or wwww."
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        label="Industry"
                                        variant="outlined"
                                        placeholder="Type your organization industry"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        label="Organization size"
                                        variant="outlined"
                                        placeholder="Begin with http:// or https:// or wwww."
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        label="Organization type"
                                        variant="outlined"
                                        placeholder="Begin with http:// or https:// or wwww."
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        label="description"
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Type your organization description here..."
                                    />
                                </Grid>

                                <Grid container item justify="space-around">
                                    <Grid item>
                                        <MuiPickersUtilsProvider
                                            utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                variant="dialog"
                                                format="MM/dd/yyyy"
                                                label="Organization founding"
                                                value={date}
                                                onChange={(date: any) =>
                                                    setDate(date)
                                                }
                                            />
                                        </MuiPickersUtilsProvider>
                                    </Grid>
                                    <Grid item>
                                        <Typography>Logo</Typography>
                                        {!selectImg && (
                                            <div>
                                                <input
                                                    accept="image/*"
                                                    style={{ display: 'none' }}
                                                    id="icon-button-file"
                                                    type="file"
                                                    onChange={onSelectImg}
                                                />
                                                <label htmlFor="icon-button-file">
                                                    <IconButton
                                                        color="primary"
                                                        aria-label="upload picture"
                                                        component="span"
                                                        style={{
                                                            color: '#0a66c2'
                                                        }}>
                                                        <PhotoCamera />
                                                    </IconButton>
                                                </label>
                                            </div>
                                        )}

                                        {selectImg && (
                                            <div>
                                                <img
                                                    id="output"
                                                    src={image}
                                                    width="100"
                                                    height="100"
                                                />
                                                <IconButton
                                                    style={{
                                                        color: '#1473E6',
                                                        position: 'relative',
                                                        bottom: 95,
                                                        right: 24
                                                    }}
                                                    onClick={onClickClose}>
                                                    <CancelRoundedIcon />
                                                </IconButton>
                                            </div>
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Button className={classes.btn} onClick={onClickCreate}>
                            Create organization
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CreateOrganization;
