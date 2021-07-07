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
import LoadingHeader from '../../common/components/util/LoadingHeader';
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
import DeleteSkill from './Skill/DeleteSkill';
import ListSkill from './Skill/ListSkill';
import DeleteExperience from './Experience/DeleteExperience';
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
                                                src={
                                                    profileStore.profile
                                                        .user_info.avatar
                                                }
                                            />
                                            <input
                                                accept="image/*"
                                                className={classes.input}
                                                id="avatar-image"
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
                                        {profileStore.profile.user_info.name}
                                    </Typography>
                                    <Typography id="username">
                                        <small>
                                            @
                                            {stringUtil.unMark(
                                                profileStore.profile.user_info
                                                    .name
                                            )}
                                        </small>
                                    </Typography>

                                    <Typography
                                        id="status"
                                        style={{ fontSize: '1.2rem' }}>
                                        {
                                            profileStore.profile.user_info
                                                .headline
                                        }
                                    </Typography>
                                </div>

                                <div className={classes.careerInfo}>
                                    {loginStore.userInfo.id ===
                                        profileStore.profile.user_id && (
                                        <Button
                                            onClick={() =>
                                                (profileStore.modalProfileOpen =
                                                    true)
                                            }
                                            className={classes.btn}>
                                            <Edit />
                                        </Button>
                                    )}
                                    {profileStore.experienceList && (
                                        <div className={classes.summarizeInfo}>
                                            {profileStore.experienceList[0]
                                                .organization_info &&
                                            profileStore.experienceList[0]
                                                .organization_info.avatar ? (
                                                <Avatar
                                                    variant="square"
                                                    src={
                                                        profileStore
                                                            .experienceList[0]
                                                            .organization_info
                                                            .avatar
                                                    }
                                                    style={{
                                                        marginRight: 8,
                                                        width: 25,
                                                        height: 25
                                                    }}
                                                />
                                            ) : (
                                                <Avatar
                                                    variant="square"
                                                    src="/images/no-avatar.png"
                                                    style={{
                                                        marginRight: 8,
                                                        width: 25,
                                                        height: 25
                                                    }}
                                                />
                                            )}
                                            <Typography variant="subtitle2">
                                                {
                                                    profileStore
                                                        .experienceList[0]
                                                        .company
                                                }
                                            </Typography>
                                        </div>
                                    )}
                                    {profileStore.educationList && (
                                        <div className={classes.summarizeInfo}>
                                            {profileStore.educationList[0]
                                                .organization_info &&
                                            profileStore.educationList[0]
                                                .organization_info.avatar ? (
                                                <Avatar
                                                    variant="square"
                                                    src={
                                                        profileStore
                                                            .educationList[0]
                                                            .organization_info
                                                            .avatar
                                                    }
                                                    style={{
                                                        marginRight: 8,
                                                        width: 25,
                                                        height: 25
                                                    }}
                                                />
                                            ) : (
                                                <Avatar
                                                    variant="square"
                                                    src="/images/no-avatar.png"
                                                    style={{
                                                        marginRight: 8,
                                                        width: 25,
                                                        height: 25
                                                    }}
                                                />
                                            )}
                                            <Typography variant="subtitle2">
                                                {
                                                    profileStore
                                                        .educationList[0].title
                                                }
                                            </Typography>
                                        </div>
                                    )}
                                </div>
                            </Grid>
                        </Card>

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
                                alignItems="center"
                                style={{ padding: '16px 16px 0 16px' }}>
                                <Grid item>
                                    <Typography
                                        id="status"
                                        style={{
                                            fontSize: '1.2rem',
                                            fontWeight: 500
                                        }}>
                                        Experience
                                    </Typography>
                                </Grid>
                                {loginStore.userInfo.id ===
                                    profileStore.profile.user_id && (
                                    <Grid item>
                                        <Button
                                            onClick={() =>
                                                (profileStore.modalExperience.create =
                                                    true)
                                            }>
                                            <Add
                                                style={{ color: '#0000008a' }}
                                            />
                                        </Button>
                                    </Grid>
                                )}
                            </Grid>
                            <ListExperience />
                        </Card>

                        <Card style={{ marginTop: '16px' }}>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                style={{ padding: '16px 16px 0 16px' }}>
                                <Grid item>
                                    <Typography
                                        id="status"
                                        style={{
                                            fontSize: '1.2rem',
                                            fontWeight: 500
                                        }}>
                                        Education
                                    </Typography>
                                </Grid>
                                {loginStore.userInfo.id ===
                                    profileStore.profile.user_id && (
                                    <Grid item>
                                        <Button
                                            onClick={() =>
                                                (profileStore.modalEducation.create =
                                                    true)
                                            }>
                                            <Add
                                                style={{ color: '#0000008a' }}
                                            />
                                        </Button>
                                    </Grid>
                                )}
                            </Grid>
                            <ListEducation />
                        </Card>
                        <Card style={{ marginTop: '16px' }}>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                style={{ padding: '16px 16px 0 16px' }}>
                                <Grid item>
                                    <Typography
                                        id="status"
                                        style={{
                                            fontSize: '1.2rem',
                                            fontWeight: 500
                                        }}>
                                        Skills & endorsements
                                    </Typography>
                                </Grid>
                                {loginStore.userInfo.id ===
                                    profileStore.profile.user_id && (
                                    <Grid item>
                                        <Button
                                            onClick={() =>
                                                (profileStore.modalSkill.create =
                                                    true)
                                            }>
                                            <Add
                                                style={{ color: '#0000008a' }}
                                            />
                                        </Button>
                                    </Grid>
                                )}
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
                    <DeleteExperience />
                    <DeleteSkill />
                </Grid>
            </Grid>
        );
    } else return <LoadingHeader />;
    // return <LoadingCard />;
    // return <Redirect to="/create/profile" />;
});

export default ProfileScreen;
