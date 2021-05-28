import React, { useState } from 'react';
import {
    Button,
    Paper,
    Avatar,
    Box,
    Hidden,
    Divider,
    Card,
    Link,
    Grid,
    Typography,
    ButtonBase
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

    const [isHidden, setIsHidden] = useState(true);

    function ReadMore({ children }: any) {
        if (children.props.length <= 258)
            return (
                <>
                    <div>{children}</div>
                </>
            );
        else {
            return (
                <>
                    <div className={isHidden ? classes.hidden : undefined}>
                        {children}
                    </div>
                    {/* <ButtonBase onClick={() => setIsHidden(!isHidden)}>
                        {isHidden ? '...see more' : 'see less'}
                    </ButtonBase> */}
                </>
            );
        }
    }

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
                                }>
                                Visit website
                            </Button>
                        </Grid>
                    </Card>

                    <Card style={{ marginTop: '20px', borderRadius: 10 }}>
                        <Typography
                            style={{
                                padding: '24px 24px 0px',
                                fontSize: '20px',
                                fontWeight: 600
                            }}>
                            About
                        </Typography>
                        <ReadMore>
                            <Typography
                                style={{
                                    color: '#00000099',
                                    padding: '24px 24px'
                                }}>
                                YEN TUNG Trading and Service Co., Ltd was
                                established on September 25, 2014. Business
                                code: 0106650294 Business areas : Bathroom
                                equipment: with genuine products, famous brands
                                by domestic manufacturers as well as imported
                                products: 1 / Toilet: Inax toilet, ToTo toilet,
                                American Standard toilet, Thai Cotto toilet,
                                Caesar toilet, Vigracera toilet... 2 / Lavabo –
                                washbasin: wall-mounted lavabo, table-mounted
                                lavabo, under-table lavabo 3/ Bathroom mirror
                                cabinet set: Senli mirror basin set, Bross
                                mirror basin set, glass basin cabinet set,
                                Caesar PVC basin cabinet set .. 4/ Shower: Inax
                                shower, Selta shower, American Standard shower,
                                Toto temperature shower 5/ Hot and cold standing
                                shower, temperature shower: Toto shower, Korean
                                shower: Hado shower, Kosco shower, Samwon
                                shower... 6/ Hot and cold wash basin faucet,
                                induction lavabo faucet vòi 7 / Bathroom heating
                                lights: Hans bathroom heating lights, Kottmann
                                bathroom heating lights, Duraqua bathroom
                                heating lights, Braun bathroom heating lights...
                                8/ Mirrors and bathroom accessories. 9/ Standing
                                bathroom, massager sauna room Kitchen equipment:
                                304 stainless steel sink made by domestic
                                manufacturers, imported stainless steel sink Hot
                                and cold sink faucet, single dish faucet, Heater
                                : Ariston water heater. Ferroli water heater,
                                Picenza water heater, Inax water heater… With
                                nearly 20 years in the market - formerly Duc
                                Hien Sanitary ware store - flexible in business
                                method: traditional sales combined with online
                                sales (online sales) with 2 websites main:
                                Vietnam High-class Sanitary Equipment
                                http://sencaytam.com YEN TUNG Trading and
                                Service Co., Ltd. is committed to bringing you
                                genuine products, long-term warranty to ensure
                                satisfaction for customers when buying our
                                products.
                            </Typography>
                        </ReadMore>
                        {isHidden ? (
                            <div>
                                <Divider />
                                <Button
                                    className={classes.btn_details}
                                    onClick={() => setIsHidden(!isHidden)}>
                                    See all details
                                </Button>
                            </div>
                        ) : null}
                    </Card>

                    <Card style={{ marginTop: '20px', borderRadius: 10 }}>
                        <Typography
                            style={{
                                padding: '24px 24px 0px',
                                fontSize: '20px',
                                fontWeight: 600
                            }}>
                            Contact information
                        </Typography>
                        <Grid container>
                            <Grid
                                item
                                container
                                direction="column"
                                xs={4}
                                style={{ margin: 10 }}
                                spacing={3}>
                                <Grid item>
                                    <Typography
                                        style={{
                                            fontWeight: 600,
                                            lineHeight: 1.5
                                        }}>
                                        Website
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        style={{
                                            fontWeight: 600,
                                            lineHeight: 1.5
                                        }}>
                                        Phone
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        style={{
                                            fontWeight: 600,
                                            lineHeight: 1.5
                                        }}>
                                        Industry
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        style={{
                                            fontWeight: 600,
                                            lineHeight: 1.5
                                        }}>
                                        Organization size
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        style={{
                                            fontWeight: 600,
                                            lineHeight: 1.5
                                        }}>
                                        Type
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="column"
                                xs={7}
                                style={{ margin: 10 }}
                                spacing={3}>
                                <Grid item>
                                    <Link
                                        onClick={() =>
                                            window.open(
                                                'https://thietbivesinhonline.vn/',
                                                '_blank'
                                            )
                                        }
                                        component="button"
                                        style={{
                                            lineHeight: 1.5,
                                            fontSize: 16
                                        }}>
                                        https://thietbivesinhonline.vn
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        style={{
                                            lineHeight: 1.5,
                                            fontSize: 16
                                        }}>
                                        0123456789
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    style={{ lineHeight: 1.5, fontSize: 16 }}>
                                    <Typography>Building Materials</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        style={{
                                            lineHeight: 1.5,
                                            fontSize: 16
                                        }}>
                                        2-10 employees
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        style={{
                                            lineHeight: 1.5,
                                            fontSize: 16
                                        }}>
                                        Self-Employed
                                    </Typography>
                                </Grid>
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
