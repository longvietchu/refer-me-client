import {
    Avatar,
    Box,
    Button,
    Card,
    Hidden,
    LinearProgress,
    Paper
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Add, CameraAlt, Edit } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../common/components/header/Header';
import Widgets from '../../common/components/widgets/Widgets';
import { stringUtil } from '../../common/utils/StringUtils';
import { loginStore } from '../Login/loginStore';
import ModalEdit from './EditProfile/ModalEdit';
import CreateEducation from './Education/CreateEducation';
import EditEducation from './Education/EditEducation';
import ListEducation from './Education/ListEducation';
import CreateExperience from './Experience/CreateExperience';
import EditExperience from './Experience/EditExperience';
import ListExperience from './Experience/ListExperience';
import { profileStore } from './profileStore';
import CreateSkill from './Skill/CreateSkill';
import ListSkill from './Skill/ListSkill';
import Styles from './Style';

const ProfileScreen = observer(() => {
    const classes = Styles();
    const history = useHistory();

    const [tab, setTab] = useState('Home');

    const onChangeAvatar = (e: any) => {
        e.preventDefault();
        let file = e.target.files[0];
        profileStore.uploadAvatar(file);
    };

    const onChangeCoverImg = (e: any) => {
        e.preventDefault();
        let file = e.target.files[0];
        profileStore.uploadCoverImage(file);
    };

    if (loginStore.userInfo && profileStore.profile) {
        return (
            <Grid container className={classes.app}>
                <Grid item container className={classes.app__header}>
                    <Header />
                </Grid>
                <Grid item container className={classes.app__body}>
                    <Grid item className={classes.body__feed} xs={12} md={7}>
                        <Card>
                            <Grid item xs={12}>
                                <Paper
                                    className={classes.paper}
                                    style={{
                                        background: profileStore.profile
                                            .background_image
                                            ? `url(${profileStore.profile.background_image}) no-repeat center center`
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
                                        profileStore.profile.user_id && (
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
                                                src={loginStore.userInfo.avatar}
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
                                                profileStore.profile
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
                                    marginLeft: '1rem',
                                    marginBottom: '1rem'
                                }}
                                item
                                xs={12}>
                                <div
                                    style={{ justifyContent: 'space-between' }}
                                    className={classes.horizontalDiv}>
                                    <div></div>
                                    <Button
                                        onClick={() =>
                                            (profileStore.modalProfileOpen =
                                                true)
                                        }
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
                                            {loginStore.userInfo.name}
                                        </Typography>
                                    </div>
                                    <span>
                                        <Typography id="username">
                                            <small>
                                                @
                                                {stringUtil.unMark(
                                                    loginStore.userInfo.name
                                                )}
                                            </small>
                                        </Typography>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <Typography
                                            id="status"
                                            style={{ fontSize: '1.2rem' }}>
                                            {loginStore.userInfo.headline}
                                        </Typography>
                                    </span>
                                </div>
                                {/* <Grid
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
                                </Grid> */}
                            </Grid>
                        </Card>
                        <Grid item xs={12}>
                            {tab === 'Jobs' && (
                                <Typography
                                    style={{ textAlign: 'center' }}
                                    variant="subtitle1">
                                    Jobs
                                </Typography>
                            )}
                        </Grid>

                        <Card style={{ marginTop: 16, padding: 24 }}>
                            <Grid item>
                                <Typography
                                    id="status"
                                    style={{
                                        fontSize: '1.2rem',
                                        fontWeight: 500
                                    }}>
                                    About
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography style={{ fontSize: 15 }}>
                                    {profileStore.profile.about}
                                </Typography>
                            </Grid>
                        </Card>

                        <Card style={{ marginTop: '16px' }}>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center">
                                <Grid item style={{ margin: '24px 24px 0' }}>
                                    <Typography
                                        id="status"
                                        style={{
                                            fontSize: '1.2rem',
                                            fontWeight: 500
                                        }}>
                                        Experience
                                    </Typography>
                                </Grid>
                                <Grid item style={{ margin: '24px 10px 0' }}>
                                    <Button
                                        onClick={() =>
                                            (profileStore.modalExperience.create =
                                                true)
                                        }>
                                        <Add style={{ color: '#0a66c2' }} />
                                    </Button>
                                </Grid>
                            </Grid>
                            <ListExperience />
                        </Card>

                        <Card style={{ marginTop: '16px' }}>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center">
                                <Grid item style={{ margin: '24px 24px 0' }}>
                                    <Typography
                                        id="status"
                                        style={{
                                            fontSize: '1.2rem',
                                            fontWeight: 500
                                        }}>
                                        Education
                                    </Typography>
                                </Grid>
                                <Grid item style={{ margin: '24px 10px 0' }}>
                                    <Button
                                        onClick={() =>
                                            (profileStore.modalEducation.create =
                                                true)
                                        }>
                                        <Add style={{ color: '#0a66c2' }} />
                                    </Button>
                                </Grid>
                            </Grid>
                            <ListEducation />
                        </Card>
                        <Card style={{ marginTop: '16px' }}>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center">
                                <Grid item style={{ margin: '24px 24px 0' }}>
                                    <Typography
                                        id="status"
                                        style={{
                                            fontSize: '1.2rem',
                                            fontWeight: 500
                                        }}>
                                        Skills & endorsements
                                    </Typography>
                                </Grid>
                                <Grid item style={{ margin: '24px 10px 0' }}>
                                    <Button
                                        onClick={() =>
                                            (profileStore.modalSkill.create =
                                                true)
                                        }>
                                        <Add style={{ color: '#0a66c2' }} />
                                    </Button>
                                </Grid>
                            </Grid>
                            <ListSkill />
                        </Card>
                    </Grid>

                    <Hidden smDown>
                        <Grid item className={classes.body__widgets} md={3}>
                            <Widgets />
                        </Grid>
                    </Hidden>

                    <CreateExperience />
                    <CreateEducation />
                    <CreateSkill />

                    <ModalEdit />
                    <EditExperience />
                    <EditEducation />
                </Grid>
            </Grid>
        );
    } else return <LinearProgress />;
    // return <LoadingCard />;
    // return <Redirect to="/create/profile" />;
});

export default ProfileScreen;
