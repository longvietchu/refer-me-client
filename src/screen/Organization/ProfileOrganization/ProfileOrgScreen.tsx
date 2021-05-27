import React from 'react';
import {
    Tab,
    Tabs,
    Button,
    Paper,
    Avatar,
    Box,
    Hidden,
    Divider,
    Card,
    Link,
    Grid,
    Typography
} from '@material-ui/core';
import {
    Edit,
    FiberManualRecordOutlined,
    Add,
    NavigateBefore,
    DirectionsRounded
} from '@material-ui/icons';

// import TweetCard from "../HomePage/TweetsCard/TweetsCard";
// import Media from "./Media";
// import "roboto-fontface";
import Widgets from '../../../components/widgets/Widgets';
import Header from '../../../components/header/Header';
import Styles from './Style';

import { useHistory } from 'react-router-dom';

import { Helmet } from 'react-helmet';

const ProfileOrgScreen = () => {
    const classes = Styles();
    let history = useHistory();

    return (
        <Grid container className={classes.app}>
            <Helmet>
                <title>RefMe</title>
            </Helmet>
            <Grid
                item
                container
                className={classes.app__header}
                // style={{
                //   boxShadow: mode && "0px 5px 10px -10px rgba(0,0,0,0.75)",
                // }}
            >
                {/* Header */}
                <Header />
            </Grid>
            <Grid item container className={classes.app__body}>
                <Grid item className={classes.body__feed} xs={12} md={7}>
                    <Card>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                {' '}
                                <div className={classes.avatarBox}>
                                    <Box>
                                        <Avatar
                                            className={classes.avatar}
                                            src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/121083834_1699921320175513_6807580545774400741_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hfVRPKiVyaAAX-_QYhQ&_nc_ht=scontent.fhan4-1.fna&oh=fb6798aedb06700257a6b62a9815e721&oe=608BA140"
                                        />
                                    </Box>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid style={{ marginLeft: '1rem' }} item xs={12}>
                            <div
                                style={{ justifyContent: 'space-between' }}
                                className={classes.horizontalDiv}>
                                <div></div>
                                <Button
                                    // onClick={openModalProfile}
                                    className={classes.btn}>
                                    <Edit />
                                </Button>
                            </div>
                            <div>
                                <div
                                    style={{ marginTop: '1rem' }}
                                    className={classes.horizontalDiv}>
                                    <Typography
                                        className={classes.nameTypo}
                                        variant="h6"
                                        id="name">
                                        organization name
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <span>
                                    <Typography
                                        id="status"
                                        style={{ fontSize: '1.2rem' }}>
                                        industry
                                    </Typography>
                                </span>
                            </div>
                            <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="center"
                                spacing={1}>
                                <Grid item>
                                    <span>
                                        <Typography id="location">
                                            Hanoi, Hanoi, Vietnam
                                        </Typography>
                                    </span>
                                </Grid>
                                <FiberManualRecordOutlined
                                    style={{ fontSize: '0.5rem' }}
                                />
                                <Grid item>
                                    <span>
                                        <Typography
                                            id="location"
                                            style={{ color: '#0a66c2' }}>
                                            1 connection
                                        </Typography>
                                    </span>
                                </Grid>
                                <FiberManualRecordOutlined
                                    style={{ fontSize: '0.5rem' }}
                                />
                                <Grid item>
                                    <span>
                                        <Typography
                                            id="location"
                                            style={{ color: '#0a66c2' }}>
                                            Contact info
                                        </Typography>
                                    </span>
                                </Grid>
                            </Grid>

                            <Button
                                endIcon={<DirectionsRounded />}
                                className={classes.btn_vis}
                                onClick={() =>
                                    window.open(
                                        'https://thietbivesinhonline.vn/',
                                        '_blank'
                                    )
                                }
                                // href="https://thietbivesinhonline.vn/"
                            >
                                Visit website
                            </Button>
                        </Grid>
                    </Card>

                    <Card style={{ marginTop: '20px' }}>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <Grid item style={{ margin: '24px 24px 0' }}>
                                <Typography
                                    id="status"
                                    style={{ fontSize: '1.2rem' }}>
                                    Experience
                                </Typography>
                            </Grid>
                            <Grid item style={{ margin: '24px 10px 0' }}>
                                <Button>
                                    <Add style={{ color: '#0a66c2' }} />
                                </Button>
                            </Grid>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                style={{ padding: '0 0 24px' }}>
                                <Link
                                    href="#"
                                    color="inherit"
                                    style={{ padding: '20px 5px 0px 24px' }}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-between"
                                        alignItems="flex-start"
                                        style={{ marginRight: '14px' }}>
                                        <div>
                                            <img
                                                style={{
                                                    height: '56px',
                                                    width: '56px'
                                                }}
                                                src="https://dcv.vn/wp-content/uploads/2021/01/logo-dcv-2021-1.png"
                                            />
                                        </div>
                                        <div>
                                            <h3>Iternship trainee</h3>
                                            <p
                                                style={{
                                                    fontSize: '14px',
                                                    margin: '2px 0px'
                                                }}>
                                                Data Communication of Vietnam
                                            </p>
                                            <div
                                                style={{
                                                    color: '#00000099',
                                                    fontSize: '14px',
                                                    margin: '2px 0px'
                                                }}>
                                                <span>Dec 2020 - Mar 2021</span>
                                                <FiberManualRecordOutlined
                                                    style={{
                                                        fontSize: '0.5rem',
                                                        margin: '0px 4px'
                                                    }}
                                                />
                                                <span>4 mos</span>
                                            </div>
                                            <div
                                                style={{
                                                    color: '#00000099',
                                                    fontSize: '14px',
                                                    margin: '2px 0px'
                                                }}>
                                                <span>
                                                    Hanoi, Hanoi, Vietnam
                                                </span>
                                            </div>
                                        </div>
                                    </Grid>
                                </Link>

                                <Grid item style={{ margin: '20px 10px 0' }}>
                                    <Button>
                                        <Edit style={{ color: '#0a66c2' }} />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Divider style={{ marginLeft: '94px' }} />

                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            style={{ padding: '0 0 24px' }}>
                            <Link
                                href="#"
                                color="inherit"
                                style={{ padding: '20px 5px 0px 24px' }}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="flex-start"
                                    style={{ marginRight: '14px' }}>
                                    <div>
                                        <img
                                            style={{
                                                height: '56px',
                                                width: '56px'
                                            }}
                                            src="https://dcv.vn/wp-content/uploads/2021/01/logo-dcv-2021-1.png"
                                        />
                                    </div>
                                    <div>
                                        <h3>Iternship trainee</h3>
                                        <p
                                            style={{
                                                fontSize: '14px',
                                                margin: '2px 0px'
                                            }}>
                                            Data Communication of Vietnam
                                        </p>
                                        <div
                                            style={{
                                                color: '#00000099',
                                                fontSize: '14px',
                                                margin: '2px 0px'
                                            }}>
                                            <span>Dec 2020 - Mar 2021</span>
                                            <FiberManualRecordOutlined
                                                style={{
                                                    fontSize: '0.5rem',
                                                    margin: '0px 4px'
                                                }}
                                            />
                                            <span>4 mos</span>
                                        </div>
                                        <div
                                            style={{
                                                color: '#00000099',
                                                fontSize: '14px',
                                                margin: '2px 0px'
                                            }}>
                                            <span>Hanoi, Hanoi, Vietnam</span>
                                        </div>
                                    </div>
                                </Grid>
                            </Link>

                            <Grid item style={{ margin: '20px 10px 0' }}>
                                <Button>
                                    <Edit style={{ color: '#0a66c2' }} />
                                </Button>
                            </Grid>
                        </Grid>

                        <Divider />

                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <Grid item style={{ margin: '24px 24px 0' }}>
                                <Typography
                                    id="status"
                                    style={{ fontSize: '1.2rem' }}>
                                    Education
                                </Typography>
                            </Grid>
                            <Grid item style={{ margin: '24px 10px 0' }}>
                                <Button>
                                    <Add style={{ color: '#0a66c2' }} />
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            style={{ padding: '0 0 24px' }}>
                            <Link
                                href="#"
                                color="inherit"
                                style={{ padding: '20px 5px 0px 24px' }}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="flex-start"
                                    style={{ marginRight: '14px' }}>
                                    <div>
                                        <img
                                            style={{
                                                height: '56px',
                                                width: '56px'
                                            }}
                                            src="https://media-exp1.licdn.com/dms/image/C510BAQGVaXAZYQ2QwA/company-logo_100_100/0/1519908097940?e=1626912000&v=beta&t=BDOR_4ZLvK8VlPVH7oZhPAvZaKadju4eytvOOVie8AA"
                                        />
                                    </div>
                                    <div>
                                        <h3>
                                            Hanoi University of Science and
                                            Technology
                                        </h3>
                                        <p
                                            style={{
                                                fontSize: '14px',
                                                margin: '2px 0px'
                                            }}>
                                            Bachelor's degree, Electronics and
                                            Telecommunications
                                        </p>
                                        <div
                                            style={{
                                                color: '#00000099',
                                                fontSize: '14px',
                                                margin: '2px 0px'
                                            }}>
                                            <span>2017 - 2021</span>
                                        </div>
                                    </div>
                                </Grid>
                            </Link>

                            <Grid item style={{ margin: '20px 10px 0' }}>
                                <Button>
                                    <Edit style={{ color: '#0a66c2' }} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>

                <Hidden smDown>
                    <Grid item className={classes.body__widgets} md={3}>
                        {/* Widgets */}
                        <Widgets />
                    </Grid>
                </Hidden>
            </Grid>
        </Grid>
    );
};

export default ProfileOrgScreen;
