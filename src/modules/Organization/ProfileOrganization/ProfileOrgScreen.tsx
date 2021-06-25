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
    DirectionsRounded,
    CameraAlt,
    Delete
} from '@material-ui/icons';

// import TweetCard from "../HomePage/TweetsCard/TweetsCard";
// import Media from "./Media";
// import "roboto-fontface";
import Widgets from '../../../common/components/widgets/Widgets';
import Header from '../../../common/components/header/Header';
import Styles from './Style';

import { useHistory } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import { formatDateTimeDDMM } from '../../../common/config/Function';

import { observer } from 'mobx-react-lite';
import { organizationStore } from '../organizationStore';
import { loginStore } from '../../Login/loginStore';
import LoadingHeader from '../../../common/components/util/LoadingHeader';
import ModalEdit from '../EditProfileOrganization/ModalEdit';

const ProfileOrgScreen = observer(() => {
    const classes = Styles();

    const [isHidden, setIsHidden] = useState(true);
    const [showMore, setShowMore] = useState<boolean>(false);

    function ReadMore({ children }: any) {
        if (children.props.length < 258)
            return (
                <>
                    <div>{children}</div>
                </>
            );
        if (children.props.length >= 258 && !isHidden) {
            return (
                <>
                    <div className={isHidden ? classes.hidden : undefined}>
                        {children}
                    </div>
                    {/* <ButtonBase onClick={() => setIsHidden(!isHidden)}>
                        {isHidden ? '...see more' : 'see less'}
                    </ButtonBase> */}
                    <div>
                        <Divider />
                        <Button
                            className={classes.btn_details}
                            onClick={() => setIsHidden(!isHidden)}>
                            See all details
                        </Button>
                    </div>
                </>
            );
        }
    }

    const getText = (text: string) => {
        // For Text that is shorter than desired length
        if (text.length <= 258) return text;
        // If text is longer than desired length & showMore is true
        if (text.length > 258 && showMore) {
            return (
                <>
                    <p>{text}</p>

                    {/* <button onClick={() => setShowMore(false)}>
                        Show Less
                    </button> */}
                    <div>
                        <Divider />
                        <Button
                            className={classes.btn_details}
                            onClick={() => setShowMore(false)}>
                            See less
                        </Button>
                    </div>
                </>
            );
        }
        // If text is longer than desired length & showMore is false
        if (text.length > 258) {
            return (
                <>
                    <p className={!showMore ? classes.hidden : undefined}>
                        {text.slice(0, 258)}
                    </p>

                    <div>
                        <Divider />
                        <Button
                            className={classes.btn_details}
                            onClick={() => setShowMore(true)}>
                            See all details
                        </Button>
                    </div>
                </>
            );
        }
    };

    const onChangeAvatar = (e: any) => {
        e.preventDefault();
        let file = e.target.files[0];
        organizationStore.uploadImage(file);
    };

    const onChangeCoverImg = (e: any) => {
        e.preventDefault();
        let file = e.target.files[0];
        organizationStore.uploadCoverImage(file);
    };

    if (loginStore.userInfo && organizationStore.organization) {
        return (
            <Grid container className={classes.app}>
                <Helmet>
                    <title>Refer Me</title>
                </Helmet>
                <Grid item container className={classes.app__header}>
                    {/* Header */}
                    <Header />
                </Grid>
                <Grid item container className={classes.app__body}>
                    <Grid item className={classes.body__feed} xs={12} md={7}>
                        <Card>
                            <Grid item xs={12}>
                                <Paper
                                    className={classes.paper}
                                    style={{
                                        background: organizationStore
                                            .organization.background_image
                                            ? `url(${organizationStore.organization.background_image}) no-repeat center center`
                                            : 'rgb(204, 214, 221)',
                                        backgroundSize: 'cover'
                                    }}>
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="cover-image"
                                        multiple
                                        type="file"
                                        onChange={(e) => {
                                            onChangeCoverImg(e);
                                        }}
                                    />
                                    {loginStore.userInfo.id ===
                                        organizationStore.organization
                                            .user_id && (
                                        <label
                                            htmlFor="cover-image"
                                            className={classes.labelCover}>
                                            <CameraAlt />
                                        </label>
                                    )}

                                    <div className={classes.avatarBox}>
                                        <Box>
                                            <Avatar
                                                className={classes.avatar}
                                                src={
                                                    organizationStore
                                                        .organization.avatar
                                                }
                                            />
                                            <input
                                                accept="image/*"
                                                className={classes.input}
                                                id="avatar-image"
                                                multiple
                                                type="file"
                                                onChange={(e) => {
                                                    onChangeAvatar(e);
                                                }}
                                            />
                                            {loginStore.userInfo.id ===
                                                organizationStore.organization
                                                    .user_id && (
                                                <label
                                                    htmlFor="avatar-image"
                                                    className={
                                                        classes.labelAvatar
                                                    }>
                                                    <Edit />
                                                </label>
                                            )}
                                        </Box>
                                    </div>
                                </Paper>
                            </Grid>

                            <Grid
                                style={{
                                    padding: '1rem',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}
                                item
                                xs={12}>
                                <div className={classes.userInfo}>
                                    <Typography
                                        className={classes.nameTypo}
                                        variant="h6"
                                        id="name">
                                        {organizationStore.organization.name}
                                    </Typography>

                                    <Typography
                                        id="status"
                                        style={{ fontSize: '1.2rem' }}>
                                        {
                                            organizationStore.organization
                                                .industry
                                        }
                                    </Typography>

                                    {organizationStore.organization.website ? (
                                        <Button
                                            endIcon={<DirectionsRounded />}
                                            className={classes.btn_vis}
                                            onClick={() => {
                                                if (
                                                    organizationStore.organization
                                                ) {
                                                    window.open(
                                                        `${organizationStore.organization.website}`,
                                                        '_blank'
                                                    );
                                                }
                                            }}>
                                            Visit website
                                        </Button>
                                    ) : null}
                                </div>
                                {loginStore.userInfo.id ===
                                    organizationStore.organization.user_id && (
                                    <div className={classes.careerInfo}>
                                        <Button
                                            onClick={() =>
                                                (organizationStore.modalEditOrganization =
                                                    true)
                                            }
                                            className={classes.btn}>
                                            <Edit />
                                        </Button>
                                        <Button
                                            onClick={() =>
                                                (organizationStore.modalEditOrganization =
                                                    true)
                                            }
                                            className={classes.btn}>
                                            <Delete />
                                        </Button>
                                    </div>
                                )}
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
                            {/* <ReadMore> */}
                            <p
                                style={{
                                    color: '#00000099',
                                    padding: '24px 24px'
                                }}>
                                {getText(
                                    organizationStore.organization.description
                                )}
                            </p>
                            {/* </ReadMore> */}

                            {/* {isHidden ? (
                                <div>
                                    <Divider />
                                    <Button
                                        className={classes.btn_details}
                                        onClick={() => setIsHidden(!isHidden)}>
                                        See all details
                                    </Button>
                                </div>
                            ) : null} */}
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
                                            Founded at
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
                                            {
                                                organizationStore.organization
                                                    .website
                                            }
                                        </Link>
                                    </Grid>

                                    <Grid
                                        item
                                        style={{
                                            lineHeight: 1.5,
                                            fontSize: 16
                                        }}>
                                        <Typography>
                                            {
                                                organizationStore.organization
                                                    .industry
                                            }
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            style={{
                                                lineHeight: 1.5,
                                                fontSize: 16
                                            }}>
                                            {
                                                organizationStore.organization
                                                    .company_size
                                            }{' '}
                                            employees
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            style={{
                                                lineHeight: 1.5,
                                                fontSize: 16
                                            }}>
                                            {formatDateTimeDDMM(
                                                organizationStore.organization
                                                    .founded
                                            )}
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
                    <ModalEdit />
                </Grid>
            </Grid>
        );
    } else return <LoadingHeader />;
});

export default ProfileOrgScreen;
